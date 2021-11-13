

export class TaxAndNi {
  'niTable': string;
  'postgradLoan': boolean;
  'secondaryClass1NotPayable': boolean;
  'studentLoan': string;
  'taxCode': string;
  'week1Month1': boolean;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "niTable",
            "baseName": "niTable",
            "type": "string"
        },
        {
            "name": "postgradLoan",
            "baseName": "postgradLoan",
            "type": "boolean"
        },
        {
            "name": "secondaryClass1NotPayable",
            "baseName": "secondaryClass1NotPayable",
            "type": "boolean"
        },
        {
            "name": "studentLoan",
            "baseName": "studentLoan",
            "type": "string"
        },
        {
            "name": "taxCode",
            "baseName": "taxCode",
            "type": "string"
        },
        {
            "name": "week1Month1",
            "baseName": "week1Month1",
            "type": "boolean"
        }    ];

    public static getAttributeTypeMap() {
        return TaxAndNi.attributeTypeMap;
    }
}




