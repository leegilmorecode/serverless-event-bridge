interface Config {
  namespace: string;
  payslipLogoBucket: string;
  pdfBucketName: string;
  eventBusName: string;
  payslipUploadedEventSource: string;
  payslipUploadedEventDetailType: string;
}

export const config: Config = {
  namespace: 'c223e510-4262-11ec-9b1a-378b15e43da7',
  eventBusName: process.env.EVENT_BUS_NAME || '',
  payslipLogoBucket: process.env.PAYSLIP_LOGO_BUCKET_NAME || '',
  payslipUploadedEventSource: 'payslip.uploaded',
  payslipUploadedEventDetailType: 'PayslipUploaded',
  pdfBucketName: process.env.PDF_BUCKET_NAME || '',
};
