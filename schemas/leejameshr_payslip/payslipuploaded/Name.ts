

export class Name {
  'fore': Array<string>;
  'initials': string;
  'sur': string;
  'ttl': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fore",
            "baseName": "fore",
            "type": "Array<string>"
        },
        {
            "name": "initials",
            "baseName": "initials",
            "type": "string"
        },
        {
            "name": "sur",
            "baseName": "sur",
            "type": "string"
        },
        {
            "name": "ttl",
            "baseName": "ttl",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return Name.attributeTypeMap;
    }
}




