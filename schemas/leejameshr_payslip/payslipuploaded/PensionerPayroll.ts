

export class PensionerPayroll {
  'amount': number;
  'bereaved': boolean;
  'inReceiptOfPension': boolean;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "bereaved",
            "baseName": "bereaved",
            "type": "boolean"
        },
        {
            "name": "inReceiptOfPension",
            "baseName": "inReceiptOfPension",
            "type": "boolean"
        }    ];

    public static getAttributeTypeMap() {
        return PensionerPayroll.attributeTypeMap;
    }
}




