

export class EventItem {
  'attachmentOrderId': string;
  'code': string;
  'currencySymbol': string;
  'description': string;
  'formattedValue': string;
  'hasSecondaryDescription': boolean;
  'pensionId': string;
  'secondaryDescription': string;
  'type': string;
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
            "name": "currencySymbol",
            "baseName": "currencySymbol",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "formattedValue",
            "baseName": "formattedValue",
            "type": "string"
        },
        {
            "name": "hasSecondaryDescription",
            "baseName": "hasSecondaryDescription",
            "type": "boolean"
        },
        {
            "name": "pensionId",
            "baseName": "pensionId",
            "type": "string"
        },
        {
            "name": "secondaryDescription",
            "baseName": "secondaryDescription",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }    ];

    public static getAttributeTypeMap() {
        return EventItem.attributeTypeMap;
    }
}




