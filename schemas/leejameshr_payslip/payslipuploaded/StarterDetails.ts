
import { OverseasEmployerDetails } from './OverseasEmployerDetails';
import { PensionerPayroll } from './PensionerPayroll';

export class StarterDetails {
  'overseasEmployerDetails': OverseasEmployerDetails;
  'pensionerPayroll': PensionerPayroll;
  'startDate': string;
  'starterDeclaration': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "overseasEmployerDetails",
            "baseName": "overseasEmployerDetails",
            "type": "OverseasEmployerDetails"
        },
        {
            "name": "pensionerPayroll",
            "baseName": "pensionerPayroll",
            "type": "PensionerPayroll"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "starterDeclaration",
            "baseName": "starterDeclaration",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return StarterDetails.attributeTypeMap;
    }
}




