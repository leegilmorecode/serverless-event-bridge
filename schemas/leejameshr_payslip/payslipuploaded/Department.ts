

export class Department {
  'code': string;
  'color': string;
  'employeeCount': number;
  'title': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "employeeCount",
            "baseName": "employeeCount",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return Department.attributeTypeMap;
    }
}




