import { APIGatewayProxyResult } from 'aws-lambda';

export const successHandler = (
  body: Record<string, any> | string = 'OK',
  statusCode = 200,
  headers: Record<string, any> = {},
): APIGatewayProxyResult => {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body, null, 2),
  };
};
