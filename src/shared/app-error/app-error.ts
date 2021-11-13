import { errorTypes, logLevels } from './error-constants';

const DEFAULT_MESSAGE = 'An error has occurred';

export class AppError extends Error {
  userMessage: string;
  internalMessage: string;
  errorType: number;
  loglevel: number;
  constructor(
    userMessage = DEFAULT_MESSAGE,
    internalMessage = DEFAULT_MESSAGE,
    errorType = errorTypes.ERROR,
    loglevel = logLevels.ERROR,
  ) {
    super(internalMessage);

    this.userMessage = userMessage;
    this.internalMessage = internalMessage;
    this.errorType = errorType;
    this.loglevel = loglevel;
  }
}
