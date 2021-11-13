

export class HmrcDetails {
  'accountsOfficeReference': string;
  'apprenticeshipLevy': boolean;
  'apprenticeshipLevyAllowance': number;
  'carryForwardUnpaidLiabilities': boolean;
  'coTax': string;
  'econ': string;
  'employmentAllowance': boolean;
  'employmentAllowanceMaxClaim': number;
  'id': string;
  'includeEmploymentAllowanceOnMonthlyJournal': boolean;
  'officeNumber': string;
  'payeReference': string;
  'quarterlyPaymentSchedule': boolean;
  'smallEmployersRelief': boolean;
  'utr': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountsOfficeReference",
            "baseName": "accountsOfficeReference",
            "type": "string"
        },
        {
            "name": "apprenticeshipLevy",
            "baseName": "apprenticeshipLevy",
            "type": "boolean"
        },
        {
            "name": "apprenticeshipLevyAllowance",
            "baseName": "apprenticeshipLevyAllowance",
            "type": "number"
        },
        {
            "name": "carryForwardUnpaidLiabilities",
            "baseName": "carryForwardUnpaidLiabilities",
            "type": "boolean"
        },
        {
            "name": "coTax",
            "baseName": "coTax",
            "type": "string"
        },
        {
            "name": "econ",
            "baseName": "econ",
            "type": "string"
        },
        {
            "name": "employmentAllowance",
            "baseName": "employmentAllowance",
            "type": "boolean"
        },
        {
            "name": "employmentAllowanceMaxClaim",
            "baseName": "employmentAllowanceMaxClaim",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "includeEmploymentAllowanceOnMonthlyJournal",
            "baseName": "includeEmploymentAllowanceOnMonthlyJournal",
            "type": "boolean"
        },
        {
            "name": "officeNumber",
            "baseName": "officeNumber",
            "type": "string"
        },
        {
            "name": "payeReference",
            "baseName": "payeReference",
            "type": "string"
        },
        {
            "name": "quarterlyPaymentSchedule",
            "baseName": "quarterlyPaymentSchedule",
            "type": "boolean"
        },
        {
            "name": "smallEmployersRelief",
            "baseName": "smallEmployersRelief",
            "type": "boolean"
        },
        {
            "name": "utr",
            "baseName": "utr",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return HmrcDetails.attributeTypeMap;
    }
}




