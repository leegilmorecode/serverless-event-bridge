

export class Partnership {
  'name': string;
  'utr': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "utr",
            "baseName": "utr",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return Partnership.attributeTypeMap;
    }
}




