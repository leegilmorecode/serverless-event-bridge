
import { EmployerAddress } from './EmployerAddress';
import { PartnerDetails } from './PartnerDetails';

export class PersonalDetails {
  'address': EmployerAddress;
  'partnerDetails': PartnerDetails;
  'dateOfBirth': string;
  'email': string;
  'emailPayslip': boolean;
  'emailStatement': boolean;
  'firstName': string;
  'gender': string;
  'lastName': string;
  'maritalStatus': string;
  'middleName': string;
  'mobile': string;
  'niNumber': string;
  'passportNumber': string;
  'passwordProtectPayslip': boolean;
  'pdfPassword': string;
  'photoUrl': string;
  'statePensionAge': number;
  'telephone': string;
  'title': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "EmployerAddress"
        },
        {
            "name": "partnerDetails",
            "baseName": "partnerDetails",
            "type": "PartnerDetails"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "emailPayslip",
            "baseName": "emailPayslip",
            "type": "boolean"
        },
        {
            "name": "emailStatement",
            "baseName": "emailStatement",
            "type": "boolean"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "maritalStatus",
            "baseName": "maritalStatus",
            "type": "string"
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string"
        },
        {
            "name": "mobile",
            "baseName": "mobile",
            "type": "string"
        },
        {
            "name": "niNumber",
            "baseName": "niNumber",
            "type": "string"
        },
        {
            "name": "passportNumber",
            "baseName": "passportNumber",
            "type": "string"
        },
        {
            "name": "passwordProtectPayslip",
            "baseName": "passwordProtectPayslip",
            "type": "boolean"
        },
        {
            "name": "pdfPassword",
            "baseName": "pdfPassword",
            "type": "string"
        },
        {
            "name": "photoUrl",
            "baseName": "photoUrl",
            "type": "string"
        },
        {
            "name": "statePensionAge",
            "baseName": "statePensionAge",
            "type": "number"
        },
        {
            "name": "telephone",
            "baseName": "telephone",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return PersonalDetails.attributeTypeMap;
    }
}




