

export class DirectorshipDetails {
  'isDirector': boolean;
  'leaveDate': string;
  'niAlternativeMethod': boolean;
  'startDate': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isDirector",
            "baseName": "isDirector",
            "type": "boolean"
        },
        {
            "name": "leaveDate",
            "baseName": "leaveDate",
            "type": "string"
        },
        {
            "name": "niAlternativeMethod",
            "baseName": "niAlternativeMethod",
            "type": "boolean"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return DirectorshipDetails.attributeTypeMap;
    }
}




