
import { Verification } from './Verification';

export class Cis {
  'verification': Verification;
  'companyNumber': string;
  'companyUtr': string;
  'reverseChargeVAT': boolean;
  'tradingName': string;
  'type': string;
  'utr': string;
  'vatNumber': string;
  'vatRate': number;
  'vatRegistered': boolean;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "verification",
            "baseName": "verification",
            "type": "Verification"
        },
        {
            "name": "companyNumber",
            "baseName": "companyNumber",
            "type": "string"
        },
        {
            "name": "companyUtr",
            "baseName": "companyUtr",
            "type": "string"
        },
        {
            "name": "reverseChargeVAT",
            "baseName": "reverseChargeVAT",
            "type": "boolean"
        },
        {
            "name": "tradingName",
            "baseName": "tradingName",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "utr",
            "baseName": "utr",
            "type": "string"
        },
        {
            "name": "vatNumber",
            "baseName": "vatNumber",
            "type": "string"
        },
        {
            "name": "vatRate",
            "baseName": "vatRate",
            "type": "number"
        },
        {
            "name": "vatRegistered",
            "baseName": "vatRegistered",
            "type": "boolean"
        }    ];

    public static getAttributeTypeMap() {
        return Cis.attributeTypeMap;
    }
}




