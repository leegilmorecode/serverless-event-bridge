import AWS from 'aws-sdk';

type ManagedUpload = AWS.S3.ManagedUpload.SendData;
type PutObjectRequest = AWS.S3.PutObjectRequest;

const s3 = new AWS.S3();

export async function writeFileToBucket(
  bucket: string,
  fileKey: string,
  body: Buffer | string,
  type: string,
): Promise<ManagedUpload> {
  const putObjectRequest: PutObjectRequest = {
    Bucket: bucket,
    Key: fileKey,
    Body: body,
    ACL: 'private',
    ContentEncoding: 'base64',
    ContentType: type,
  };
  const putObjectOutput: ManagedUpload = await s3.upload(putObjectRequest).promise();

  return putObjectOutput;
}
