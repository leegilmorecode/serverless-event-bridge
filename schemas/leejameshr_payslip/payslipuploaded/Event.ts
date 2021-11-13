import { Employee } from './Employee';
import { EmployerAddress } from './EmployerAddress';
import { EmploymentDetails } from './EmploymentDetails';
import { EventItem } from './EventItem';
import { HmrcDetails } from './HmrcDetails';
import { PayOptions } from './PayOptions';
import { PersonalDetails } from './PersonalDetails';

export class Event {
  'employee': Employee;
  'employer': Employee;
  'employerAddress': EmployerAddress;
  'employmentDetails': EmploymentDetails;
  'hmrcDetails': HmrcDetails;
  'payOptions': PayOptions;
  'personalDetails': PersonalDetails;
  'allowanceNote': string;
  'employerNi': number;
  'employerPensionContribs': number;
  'from': string;
  'isClosed': boolean;
  'lines': Array<EventItem>;
  'correlationId': string;
  'logoUrl': string;
  'logoBucket': string;
  'logoKey': string;
  'payslipKey': string;
  'note': string;
  'paymentDate': string;
  'period': string;
  'to': string;

  private static discriminator: string | undefined = undefined;

  private static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'employee',
      baseName: 'employee',
      type: 'Employee',
    },
    {
      name: 'employer',
      baseName: 'employer',
      type: 'Employee',
    },
    {
      name: 'employerAddress',
      baseName: 'employerAddress',
      type: 'EmployerAddress',
    },
    {
      name: 'employmentDetails',
      baseName: 'employmentDetails',
      type: 'EmploymentDetails',
    },
    {
      name: 'hmrcDetails',
      baseName: 'hmrcDetails',
      type: 'HmrcDetails',
    },
    {
      name: 'payOptions',
      baseName: 'payOptions',
      type: 'PayOptions',
    },
    {
      name: 'personalDetails',
      baseName: 'personalDetails',
      type: 'PersonalDetails',
    },
    {
      name: 'allowanceNote',
      baseName: 'allowanceNote',
      type: 'string',
    },
    {
      name: 'employerNi',
      baseName: 'employerNi',
      type: 'number',
    },
    {
      name: 'employerPensionContribs',
      baseName: 'employerPensionContribs',
      type: 'number',
    },
    {
      name: 'from',
      baseName: 'from',
      type: 'string',
    },
    {
      name: 'isClosed',
      baseName: 'isClosed',
      type: 'boolean',
    },
    {
      name: 'lines',
      baseName: 'lines',
      type: 'Array<EventItem>',
    },
    {
      name: 'correlationId',
      baseName: 'correlationId',
      type: 'string',
    },
    {
      name: 'logoUrl',
      baseName: 'logoUrl',
      type: 'string',
    },
    {
      name: 'logoBucket',
      baseName: 'logoBucket',
      type: 'string',
    },
    {
      name: 'logoKey',
      baseName: 'logoKey',
      type: 'string',
    },
    {
      name: 'payslipKey',
      baseName: 'payslipKey',
      type: 'string',
    },
    {
      name: 'note',
      baseName: 'note',
      type: 'string',
    },
    {
      name: 'paymentDate',
      baseName: 'paymentDate',
      type: 'string',
    },
    {
      name: 'period',
      baseName: 'period',
      type: 'string',
    },
    {
      name: 'to',
      baseName: 'to',
      type: 'string',
    },
  ];

  public static getAttributeTypeMap() {
    return Event.attributeTypeMap;
  }
}
