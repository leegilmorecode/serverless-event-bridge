import { AppError, errorTypes, logLevels } from '../../shared/app-error';

import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajvOptions = {
  allErrors: true,
};

export function validate(obj: Record<string, any>, schema: Record<string, any>, key: string, ref: string): void {
  const ajv = new Ajv(ajvOptions);
  addFormats(ajv);

  ajv.addVocabulary(['openapi', 'info', 'paths', 'components']);

  ajv.addSchema(schema, key);

  const valid = ajv.validate({ $ref: ref }, obj);

  if (!valid) {
    const errorMessage = `Invalid: ${JSON.stringify(ajv.errors)}`;
    throw new AppError(errorMessage, errorMessage, errorTypes.VALIDATION_ERROR, logLevels.ERROR);
  }
}
