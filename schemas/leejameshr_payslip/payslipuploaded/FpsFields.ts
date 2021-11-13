

export class FpsFields {
  'hoursNormallyWorked': string;
  'irregularPaymentPattern': boolean;
  'nonIndividual': boolean;
  'offPayrollWorker': boolean;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hoursNormallyWorked",
            "baseName": "hoursNormallyWorked",
            "type": "string"
        },
        {
            "name": "irregularPaymentPattern",
            "baseName": "irregularPaymentPattern",
            "type": "boolean"
        },
        {
            "name": "nonIndividual",
            "baseName": "nonIndividual",
            "type": "boolean"
        },
        {
            "name": "offPayrollWorker",
            "baseName": "offPayrollWorker",
            "type": "boolean"
        }    ];

    public static getAttributeTypeMap() {
        return FpsFields.attributeTypeMap;
    }
}




