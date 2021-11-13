export enum statusCodes {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  BadRequest = 400,
  Unauthorised = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  TooManyRequests = 429,
  InternalServerError = 500,
  ServiceUnavailable = 503,
}

export enum statusCodeMessages {
  OK = 'OK',
  Created = 'Created',
  Accepted = 'Accepted',
  NoContent = 'No content',
  NotFound = 'Not found',
  InternalServerError = 'Internal server error',
  Unauthorised = 'Unauthorised',
  Forbidden = 'Forbidden',
  BadRequest = 'Bad request',
  MethodNotAllowed = 'Method not allowed',
  TooManyRequests = 'Too many requests',
  ServiceUnavailable = 'Service unavailable',
}
