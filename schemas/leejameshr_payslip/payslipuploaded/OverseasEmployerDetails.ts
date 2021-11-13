

export class OverseasEmployerDetails {
  'eeaCitizen': boolean;
  'epm6Scheme': boolean;
  'overseasEmployer': boolean;
  'overseasSecondmentStatus': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eeaCitizen",
            "baseName": "eeaCitizen",
            "type": "boolean"
        },
        {
            "name": "epm6Scheme",
            "baseName": "epm6Scheme",
            "type": "boolean"
        },
        {
            "name": "overseasEmployer",
            "baseName": "overseasEmployer",
            "type": "boolean"
        },
        {
            "name": "overseasSecondmentStatus",
            "baseName": "overseasSecondmentStatus",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return OverseasEmployerDetails.attributeTypeMap;
    }
}




