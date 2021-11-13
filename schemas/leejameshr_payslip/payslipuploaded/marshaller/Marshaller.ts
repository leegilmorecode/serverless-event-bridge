import { Address } from '../Address';
import { Cis } from '../Cis';
import { Department } from '../Department';
import { DirectorshipDetails } from '../DirectorshipDetails';
import { Employee } from '../Employee';
import { EmployerAddress } from '../EmployerAddress';
import { EmploymentDetails } from '../EmploymentDetails';
import { Event } from '../Event';
import { EventItem } from '../EventItem';
import { FpsFields } from '../FpsFields';
import { HmrcDetails } from '../HmrcDetails';
import { LeaverDetails } from '../LeaverDetails';
import { Metadata } from '../Metadata';
import { Name } from '../Name';
import { OverseasEmployerDetails } from '../OverseasEmployerDetails';
import { PartnerDetails } from '../PartnerDetails';
import { Partnership } from '../Partnership';
import { PayOptions } from '../PayOptions';
import { PayOptionsItem } from '../PayOptionsItem';
import { PensionerPayroll } from '../PensionerPayroll';
import { PersonalDetails } from '../PersonalDetails';
import { StarterDetails } from '../StarterDetails';
import { TaxAndNi } from '../TaxAndNi';
import { Verification } from '../Verification';
import { VerificationResponse } from '../VerificationResponse';

let primitives = ['string', 'boolean', 'double', 'integer', 'long', 'float', 'number', 'any'];

let enumsMap: { [index: string]: any } = {};

let typeMap: { [index: string]: any } = {
  Address: Address,
  Cis: Cis,
  Department: Department,
  DirectorshipDetails: DirectorshipDetails,
  Employee: Employee,
  EmployerAddress: EmployerAddress,
  EmploymentDetails: EmploymentDetails,
  Event: Event,
  EventItem: EventItem,
  FpsFields: FpsFields,
  HmrcDetails: HmrcDetails,
  LeaverDetails: LeaverDetails,
  Metadata: Metadata,
  Name: Name,
  OverseasEmployerDetails: OverseasEmployerDetails,
  PartnerDetails: PartnerDetails,
  Partnership: Partnership,
  PayOptions: PayOptions,
  PayOptionsItem: PayOptionsItem,
  PensionerPayroll: PensionerPayroll,
  PersonalDetails: PersonalDetails,
  StarterDetails: StarterDetails,
  TaxAndNi: TaxAndNi,
  Verification: Verification,
  VerificationResponse: VerificationResponse,
};

export class Marshaller {
  public static marshall(data: any, type: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index in data) {
        let date = data[index];
        transformedData.push(Marshaller.marshall(date, subType));
      }
      return transformedData;
    } else if (type === 'Date') {
      return data.toString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance: { [index: string]: any } = {};
      for (let index in attributeTypes) {
        let attributeType = attributeTypes[index];
        instance[attributeType.baseName] = Marshaller.marshall(data[attributeType.name], attributeType.type);
      }
      return instance;
    }
  }

  public static unmarshal(data: any, type: string) {
    // polymorphism may change the actual type.
    type = Marshaller.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index in data) {
        let date = data[index];
        transformedData.push(Marshaller.unmarshal(date, subType));
      }
      return transformedData;
    } else if (type === 'Date') {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index in attributeTypes) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = Marshaller.unmarshal(data[attributeType.baseName], attributeType.type);
      }
      return instance;
    }
  }

  private static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === 'Date') {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // unknown type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          return data[discriminatorProperty]; // use the type given in the discriminator
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }
}