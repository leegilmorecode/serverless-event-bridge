
import { Address } from './Address';
import { Employee } from './Employee';
import { Name } from './Name';
import { Partnership } from './Partnership';

export class VerificationResponse {
  'address': Address;
  'item': Employee;
  'name': Name;
  'partnership': Partnership;
  'action': string;
  'costOfMaterials': string;
  'costOfMaterialsUnrounded': string;
  'crn': string;
  'displayName': string;
  'emailStatementTo': string;
  'employeeUniqueId': string;
  'matched': string;
  'nino': string;
  'numberOfPayments': number;
  'taxTreatment': string;
  'telephone': string;
  'totalDeducted': string;
  'totalPayments': string;
  'totalPaymentsUnrounded': string;
  'tradingName': string;
  'type': string;
  'umbrellaFee': string;
  'unmatchedRate': string;
  'utr': string;
  'validationMsg': string;
  'verificationNumber': string;
  'worksRef': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "Employee"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "Name"
        },
        {
            "name": "partnership",
            "baseName": "partnership",
            "type": "Partnership"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "costOfMaterials",
            "baseName": "costOfMaterials",
            "type": "string"
        },
        {
            "name": "costOfMaterialsUnrounded",
            "baseName": "costOfMaterialsUnrounded",
            "type": "string"
        },
        {
            "name": "crn",
            "baseName": "crn",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "emailStatementTo",
            "baseName": "emailStatementTo",
            "type": "string"
        },
        {
            "name": "employeeUniqueId",
            "baseName": "employeeUniqueId",
            "type": "string"
        },
        {
            "name": "matched",
            "baseName": "matched",
            "type": "string"
        },
        {
            "name": "nino",
            "baseName": "nino",
            "type": "string"
        },
        {
            "name": "numberOfPayments",
            "baseName": "numberOfPayments",
            "type": "number"
        },
        {
            "name": "taxTreatment",
            "baseName": "taxTreatment",
            "type": "string"
        },
        {
            "name": "telephone",
            "baseName": "telephone",
            "type": "string"
        },
        {
            "name": "totalDeducted",
            "baseName": "totalDeducted",
            "type": "string"
        },
        {
            "name": "totalPayments",
            "baseName": "totalPayments",
            "type": "string"
        },
        {
            "name": "totalPaymentsUnrounded",
            "baseName": "totalPaymentsUnrounded",
            "type": "string"
        },
        {
            "name": "tradingName",
            "baseName": "tradingName",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "umbrellaFee",
            "baseName": "umbrellaFee",
            "type": "string"
        },
        {
            "name": "unmatchedRate",
            "baseName": "unmatchedRate",
            "type": "string"
        },
        {
            "name": "utr",
            "baseName": "utr",
            "type": "string"
        },
        {
            "name": "validationMsg",
            "baseName": "validationMsg",
            "type": "string"
        },
        {
            "name": "verificationNumber",
            "baseName": "verificationNumber",
            "type": "string"
        },
        {
            "name": "worksRef",
            "baseName": "worksRef",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return VerificationResponse.attributeTypeMap;
    }
}




