
import { FpsFields } from './FpsFields';
import { PayOptionsItem } from './PayOptionsItem';
import { TaxAndNi } from './TaxAndNi';

export class PayOptions {
  'fpsFields': FpsFields;
  'taxAndNi': TaxAndNi;
  'autoAdjustForLeave': boolean;
  'baseHourlyRate': number;
  'basis': string;
  'mapsMiles': number;
  'method': string;
  'mileageVehicleType': string;
  'nationalMinimumWage': boolean;
  'ordinal': number;
  'payAmount': number;
  'payAmountMultiplier': number;
  'payCode': string;
  'period': string;
  'regularPayLines': Array<PayOptionsItem>;
  'tags': Array<string>;
  'withholdTaxRefundIfPayIsZero': boolean;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fpsFields",
            "baseName": "fpsFields",
            "type": "FpsFields"
        },
        {
            "name": "taxAndNi",
            "baseName": "taxAndNi",
            "type": "TaxAndNi"
        },
        {
            "name": "autoAdjustForLeave",
            "baseName": "autoAdjustForLeave",
            "type": "boolean"
        },
        {
            "name": "baseHourlyRate",
            "baseName": "baseHourlyRate",
            "type": "number"
        },
        {
            "name": "basis",
            "baseName": "basis",
            "type": "string"
        },
        {
            "name": "mapsMiles",
            "baseName": "mapsMiles",
            "type": "number"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "mileageVehicleType",
            "baseName": "mileageVehicleType",
            "type": "string"
        },
        {
            "name": "nationalMinimumWage",
            "baseName": "nationalMinimumWage",
            "type": "boolean"
        },
        {
            "name": "ordinal",
            "baseName": "ordinal",
            "type": "number"
        },
        {
            "name": "payAmount",
            "baseName": "payAmount",
            "type": "number"
        },
        {
            "name": "payAmountMultiplier",
            "baseName": "payAmountMultiplier",
            "type": "number"
        },
        {
            "name": "payCode",
            "baseName": "payCode",
            "type": "string"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "string"
        },
        {
            "name": "regularPayLines",
            "baseName": "regularPayLines",
            "type": "Array<PayOptionsItem>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "withholdTaxRefundIfPayIsZero",
            "baseName": "withholdTaxRefundIfPayIsZero",
            "type": "boolean"
        }    ];

    public static getAttributeTypeMap() {
        return PayOptions.attributeTypeMap;
    }
}




