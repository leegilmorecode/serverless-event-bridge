import * as schema from '../../../schemas/leejameshr_payslip/payslipuploaded/leejameshr.payslip@PayslipUploaded-v1.json';

import { Context, Handler, SQSEvent, SQSRecord } from 'aws-lambda';
import { Logger, checkFileExists, getImageFromBucket, validate, writeFileToBucket } from '../../shared';

import { Event } from '../../../schemas/leejameshr_payslip/payslipuploaded/Event';
import { FileObject } from '../../types';
import { Marshaller } from '../../../schemas/leejameshr_payslip/payslipuploaded/marshaller/Marshaller';
import PDFDocument from 'pdfkit';
import { config } from '../../config/config';
import middy from '@middy/core';
import sqsBatch from '@middy/sqs-partial-batch-failure';
import { v4 as uuidv4 } from 'uuid';

const METHOD = 'pdf-generation.handler';

export const baseHandler: Handler<SQSEvent> = async ({ Records }) => {
  const correlationId = uuidv4();

  const recordPromises: Promise<SQSRecord>[] = Records.map(async (record: SQSRecord) => {
    const { detail }: Record<string, any> = JSON.parse(record.body);

    const payslip: Event = Marshaller.marshall(detail, 'Event');

    Logger.info(
      `CorrelationId:${correlationId} CausationId:${payslip.correlationId} ${METHOD} - started for payslipKey ${payslip.payslipKey}`,
    );

    // validate the payslip event that has come from EventBridge > FIFO queue against the schema
    validate(payslip, schema, 'payslip', 'payslip#/components/schemas/Event');

    Logger.info(
      `CorrelationId:${correlationId} CausationId:${payslip.correlationId} ${METHOD} - payslip ${payslip.payslipKey} validated successfully`,
    );

    // if the PDF already exists in S3 then exit early as we only want to ever generate once
    const exists = await checkFileExists(config.pdfBucketName, `${payslip.payslipKey}.pdf`);

    if (exists) {
      return record;
    }

    // get the image from s3 for the pdf generation using the meta data on the event
    const file: FileObject = await getImageFromBucket(config.payslipLogoBucket, payslip.logoKey);

    const pdfBuffer: Buffer = await new Promise((resolve) => {
      // generate a fake payslip PDF that we can store
      const doc = new PDFDocument();
      doc.fontSize(12);

      const copy = `
      Employee name: ${payslip.employee.name}
      Employee NI: ${payslip.employerNi}
      Employee Payroll Code: ${payslip.employmentDetails.payrollCode}

      Pay Period: ${payslip.period}
      PAYE: ${payslip.hmrcDetails.payeReference}

      Payment Date: ${payslip.paymentDate}
      Payment Amount: ${payslip.payOptions.payAmount}
    `;

      doc.text(copy, 60, 150, {
        align: 'left',
      });

      const fileBody = file.body as string;

      doc.image(Buffer.from(fileBody.replace(`data:image/jpg;base64,`, ''), 'base64'), 80, 10, { width: 100 });
      doc.end();

      const buffers: Uint8Array[] = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        const pdfData: Buffer = Buffer.concat(buffers);
        resolve(pdfData);
      });
    });

    await writeFileToBucket(config.pdfBucketName, `${payslip.payslipKey}.pdf`, pdfBuffer, 'application/pdf');

    Logger.info(
      `CorrelationId:${correlationId} CausationId:${payslip.correlationId} ${METHOD} - payslip ${payslip.payslipKey} completed successfully`,
    );

    return record;
  });

  return Promise.allSettled(recordPromises);
};

// @middy/sqs-partial-batch-failure will ensure that successful records are removed from the batch for idempotency
export const handler: middy.MiddyfiedHandler<SQSEvent, any, Error, Context> = middy(baseHandler).use(sqsBatch());
