
import { VerificationResponse } from './VerificationResponse';

export class Verification {
  'verificationResponse': VerificationResponse;
  'date': string;
  'manuallyEntered': boolean;
  'matchInsteadOfVerify': boolean;
  'number': string;
  'taxStatus': string;
  'verificationRequest': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "verificationResponse",
            "baseName": "verificationResponse",
            "type": "VerificationResponse"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "manuallyEntered",
            "baseName": "manuallyEntered",
            "type": "boolean"
        },
        {
            "name": "matchInsteadOfVerify",
            "baseName": "matchInsteadOfVerify",
            "type": "boolean"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "taxStatus",
            "baseName": "taxStatus",
            "type": "string"
        },
        {
            "name": "verificationRequest",
            "baseName": "verificationRequest",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return Verification.attributeTypeMap;
    }
}




