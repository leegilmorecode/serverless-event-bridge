

export class LeaverDetails {
  'hasLeft': boolean;
  'isDeceased': boolean;
  'leaveDate': string;
  'p45Sent': boolean;
  'paymentAfterLeaving': boolean;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hasLeft",
            "baseName": "hasLeft",
            "type": "boolean"
        },
        {
            "name": "isDeceased",
            "baseName": "isDeceased",
            "type": "boolean"
        },
        {
            "name": "leaveDate",
            "baseName": "leaveDate",
            "type": "string"
        },
        {
            "name": "p45Sent",
            "baseName": "p45Sent",
            "type": "boolean"
        },
        {
            "name": "paymentAfterLeaving",
            "baseName": "paymentAfterLeaving",
            "type": "boolean"
        }    ];

    public static getAttributeTypeMap() {
        return LeaverDetails.attributeTypeMap;
    }
}




