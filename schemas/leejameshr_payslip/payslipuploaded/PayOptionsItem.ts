

export class PayOptionsItem {
  'attachmentOrderId': string;
  'code': string;
  'description': string;
  'multiplier': number;
  'pensionId': string;
  'rate': number;
  'tags': Array<string>;
  'value': number;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachmentOrderId",
            "baseName": "attachmentOrderId",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "multiplier",
            "baseName": "multiplier",
            "type": "number"
        },
        {
            "name": "pensionId",
            "baseName": "pensionId",
            "type": "string"
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }    ];

    public static getAttributeTypeMap() {
        return PayOptionsItem.attributeTypeMap;
    }
}




