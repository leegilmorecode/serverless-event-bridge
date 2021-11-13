

export class Address {
  'country': string;
  'line': Array<string>;
  'postCode': string;
  'postcode': string;
  'ukPostcode': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "line",
            "baseName": "line",
            "type": "Array<string>"
        },
        {
            "name": "postCode",
            "baseName": "postCode",
            "type": "string"
        },
        {
            "name": "postcode",
            "baseName": "postcode",
            "type": "string"
        },
        {
            "name": "ukPostcode",
            "baseName": "ukPostcode",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}




