import AWS from 'aws-sdk';

const s3 = new AWS.S3();

export async function checkFileExists(bucket: string, fileKey: string): Promise<boolean> {
  try {
    await s3.getObject({ Bucket: bucket, Key: fileKey }).promise();

    return true;
  } catch (error: any) {
    if (error.code === 'NotFound') {
      return false;
    }
  }
  return false;
}
