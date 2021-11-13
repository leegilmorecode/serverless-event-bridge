

export class EmployerAddress {
  'country': string;
  'line1': string;
  'line2': string;
  'line3': string;
  'line4': string;
  'line5': string;
  'postCode': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "line3",
            "baseName": "line3",
            "type": "string"
        },
        {
            "name": "line4",
            "baseName": "line4",
            "type": "string"
        },
        {
            "name": "line5",
            "baseName": "line5",
            "type": "string"
        },
        {
            "name": "postCode",
            "baseName": "postCode",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return EmployerAddress.attributeTypeMap;
    }
}




