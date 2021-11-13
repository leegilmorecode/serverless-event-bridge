import AWS from 'aws-sdk';
import { FileObject } from '../../types';

type GetObjectOutput = AWS.S3.GetObjectOutput;

const s3 = new AWS.S3();

export async function getImageFromBucket(bucket: string, fileKey: string): Promise<FileObject> {
  const { Body: body }: GetObjectOutput = await s3.getObject({ Bucket: bucket, Key: fileKey }).promise();
  const fileObject: FileObject = { name: fileKey, body: body?.toString('base64') };

  return fileObject;
}
