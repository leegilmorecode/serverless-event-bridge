

export class PartnerDetails {
  'firstName': string;
  'initials': string;
  'lastName': string;
  'niNumber': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "initials",
            "baseName": "initials",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "niNumber",
            "baseName": "niNumber",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return PartnerDetails.attributeTypeMap;
    }
}




