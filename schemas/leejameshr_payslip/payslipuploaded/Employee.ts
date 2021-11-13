
import { Metadata } from './Metadata';

export class Employee {
  'metadata': Metadata;
  'id': string;
  'name': string;
  'url': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "Metadata"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return Employee.attributeTypeMap;
    }
}




