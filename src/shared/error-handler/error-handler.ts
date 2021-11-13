import { statusCodeMessages, statusCodes } from '../status-codes';

import { APIGatewayProxyResult } from 'aws-lambda';
import { AppError } from '../app-error';

type ErrorBody = string | Record<string, any>;

export function errorHandler(error: Error | AppError, headers: Record<string, any> = {}): APIGatewayProxyResult {
  let body: ErrorBody = 'An error has occurred';
  let statusCode = 500;

  const errorType = error && 'errorType' in error ? error.errorType : 2;

  switch (errorType) {
    case 1: // ACCESS_FORBIDDEN
      body = statusCodeMessages.Forbidden;
      statusCode = statusCodes.Forbidden;
      break;
    case 2: // ERROR
    case 3: // INVALID_DEPENDENCIES
      break;
    case 4: // INVALID_OPERATION
      body = statusCodeMessages.MethodNotAllowed;
      statusCode = statusCodes.MethodNotAllowed;
      break;
    case 5: // VALIDATION_ERROR
      body = error && 'errorType' in error ? { message: error.userMessage } : 'Validation error';
      statusCode = statusCodes.BadRequest;
      break;
    case 6: // NOT_FOUND
      body = statusCodeMessages.NotFound;
      statusCode = statusCodes.NotFound;
      break;
    case 7: // UNAUTHORISED
      body = statusCodeMessages.Unauthorised;
      statusCode = statusCodes.Unauthorised;
      break;
    case 8: // THROTTLED
      body = statusCodeMessages.TooManyRequests;
      statusCode = statusCodes.TooManyRequests;
      break;
    case 9: // SERVICE_UNAVAILABLE
      body = statusCodeMessages.ServiceUnavailable;
      statusCode = statusCodes.ServiceUnavailable;
      break;
    default:
      // ERROR
      break;
  }

  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body, null, 2),
  };
}
