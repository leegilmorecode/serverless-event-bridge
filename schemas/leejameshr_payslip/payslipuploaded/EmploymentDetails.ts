
import { Cis } from './Cis';
import { Department } from './Department';
import { DirectorshipDetails } from './DirectorshipDetails';
import { Employee } from './Employee';
import { LeaverDetails } from './LeaverDetails';
import { StarterDetails } from './StarterDetails';

export class EmploymentDetails {
  'cis': Cis;
  'department': Department;
  'directorshipDetails': DirectorshipDetails;
  'leaverDetails': LeaverDetails;
  'starterDetails': StarterDetails;
  'cisSubContractor': boolean;
  'forcePreviousPayrollCode': string;
  'furloughCalculationBasis': string;
  'furloughCalculationBasisAmount': number;
  'furloughEnd': string;
  'furloughHoursNormallyWorked': number;
  'furloughHoursOnFurlough': number;
  'furloughStart': string;
  'isApprentice': boolean;
  'jobTitle': string;
  'onFurlough': boolean;
  'onHold': boolean;
  'partialFurlough': boolean;
  'payrollCode': string;
  'posts': Array<Employee>;
  'workingPattern': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cis",
            "baseName": "cis",
            "type": "Cis"
        },
        {
            "name": "department",
            "baseName": "department",
            "type": "Department"
        },
        {
            "name": "directorshipDetails",
            "baseName": "directorshipDetails",
            "type": "DirectorshipDetails"
        },
        {
            "name": "leaverDetails",
            "baseName": "leaverDetails",
            "type": "LeaverDetails"
        },
        {
            "name": "starterDetails",
            "baseName": "starterDetails",
            "type": "StarterDetails"
        },
        {
            "name": "cisSubContractor",
            "baseName": "cisSubContractor",
            "type": "boolean"
        },
        {
            "name": "forcePreviousPayrollCode",
            "baseName": "forcePreviousPayrollCode",
            "type": "string"
        },
        {
            "name": "furloughCalculationBasis",
            "baseName": "furloughCalculationBasis",
            "type": "string"
        },
        {
            "name": "furloughCalculationBasisAmount",
            "baseName": "furloughCalculationBasisAmount",
            "type": "number"
        },
        {
            "name": "furloughEnd",
            "baseName": "furloughEnd",
            "type": "string"
        },
        {
            "name": "furloughHoursNormallyWorked",
            "baseName": "furloughHoursNormallyWorked",
            "type": "number"
        },
        {
            "name": "furloughHoursOnFurlough",
            "baseName": "furloughHoursOnFurlough",
            "type": "number"
        },
        {
            "name": "furloughStart",
            "baseName": "furloughStart",
            "type": "string"
        },
        {
            "name": "isApprentice",
            "baseName": "isApprentice",
            "type": "boolean"
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "string"
        },
        {
            "name": "onFurlough",
            "baseName": "onFurlough",
            "type": "boolean"
        },
        {
            "name": "onHold",
            "baseName": "onHold",
            "type": "boolean"
        },
        {
            "name": "partialFurlough",
            "baseName": "partialFurlough",
            "type": "boolean"
        },
        {
            "name": "payrollCode",
            "baseName": "payrollCode",
            "type": "string"
        },
        {
            "name": "posts",
            "baseName": "posts",
            "type": "Array<Employee>"
        },
        {
            "name": "workingPattern",
            "baseName": "workingPattern",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return EmploymentDetails.attributeTypeMap;
    }
}




