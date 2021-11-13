/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Metadata {}

export interface Employee {
  id: string;
  name: string;
  metadata: Metadata;
  url: string;
}

export interface Metadata2 {}

export interface Employer {
  id: string;
  name: string;
  metadata: Metadata2;
  url: string;
}

export interface EmployerAddress {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  postCode: string;
  country: string;
}

export interface HmrcDetails {
  officeNumber: string;
  payeReference: string;
  accountsOfficeReference: string;
  econ: string;
  utr: string;
  coTax: string;
  employmentAllowance: boolean;
  employmentAllowanceMaxClaim: number;
  smallEmployersRelief: boolean;
  apprenticeshipLevy: boolean;
  apprenticeshipLevyAllowance: number;
  quarterlyPaymentSchedule: boolean;
  includeEmploymentAllowanceOnMonthlyJournal: boolean;
  carryForwardUnpaidLiabilities: boolean;
  id: string;
}

export interface TaxAndNi {
  niTable: string;
  secondaryClass1NotPayable: boolean;
  postgradLoan: boolean;
  studentLoan: string;
  taxCode: string;
  week1Month1: boolean;
}

export interface FpsFields {
  offPayrollWorker: boolean;
  irregularPaymentPattern: boolean;
  nonIndividual: boolean;
  hoursNormallyWorked: string;
}

export interface RegularPayLine {
  value: number;
  rate: number;
  multiplier: number;
  description: string;
  attachmentOrderId: string;
  pensionId: string;
  code: string;
  tags: string[];
}

export interface PayOptions {
  period: string;
  ordinal: number;
  payAmount: number;
  basis: string;
  nationalMinimumWage: boolean;
  payAmountMultiplier: number;
  baseHourlyRate: number;
  autoAdjustForLeave: boolean;
  method: string;
  payCode: string;
  withholdTaxRefundIfPayIsZero: boolean;
  mileageVehicleType: string;
  mapsMiles: number;
  taxAndNi: TaxAndNi;
  fpsFields: FpsFields;
  regularPayLines: RegularPayLine[];
  tags: string[];
}

export interface OverseasEmployerDetails {
  overseasEmployer: boolean;
  overseasSecondmentStatus: string;
  eeaCitizen: boolean;
  epm6Scheme: boolean;
}

export interface PensionerPayroll {
  inReceiptOfPension: boolean;
  bereaved: boolean;
  amount: number;
}

export interface StarterDetails {
  startDate: string;
  starterDeclaration: string;
  overseasEmployerDetails: OverseasEmployerDetails;
  pensionerPayroll: PensionerPayroll;
}

export interface DirectorshipDetails {
  isDirector: boolean;
  startDate: string;
  leaveDate: string;
  niAlternativeMethod: boolean;
}

export interface LeaverDetails {
  hasLeft: boolean;
  leaveDate: string;
  isDeceased: boolean;
  paymentAfterLeaving: boolean;
  p45Sent: boolean;
}

export interface Metadata3 {}

export interface Item {
  id: string;
  name: string;
  metadata: Metadata3;
  url: string;
}

export interface Name {
  ttl: string;
  fore: string[];
  initials: string;
  sur: string;
}

export interface Partnership {
  name: string;
  utr: string;
}

export interface Address {
  line: string[];
  postcode: string;
  postCode: string;
  ukPostcode: string;
  country: string;
}

export interface VerificationResponse {
  employeeUniqueId: string;
  emailStatementTo: string;
  numberOfPayments: number;
  item: Item;
  displayName: string;
  action: string;
  type: string;
  name: Name;
  tradingName: string;
  worksRef: string;
  unmatchedRate: string;
  utr: string;
  crn: string;
  nino: string;
  partnership: Partnership;
  address: Address;
  telephone: string;
  totalPaymentsUnrounded: string;
  costOfMaterialsUnrounded: string;
  umbrellaFee: string;
  validationMsg: string;
  verificationNumber: string;
  totalPayments: string;
  costOfMaterials: string;
  totalDeducted: string;
  matched: string;
  taxTreatment: string;
}

export interface Verification {
  manuallyEntered: boolean;
  matchInsteadOfVerify: boolean;
  number: string;
  date: string;
  taxStatus: string;
  verificationRequest: string;
  verificationResponse: VerificationResponse;
}

export interface Cis {
  type: string;
  utr: string;
  tradingName: string;
  companyUtr: string;
  companyNumber: string;
  vatRegistered: boolean;
  vatNumber: string;
  vatRate: number;
  reverseChargeVAT: boolean;
  verification: Verification;
}

export interface Department {
  code: string;
  title: string;
  color: string;
  employeeCount: number;
}

export interface Metadata4 {}

export interface Post {
  id: string;
  name: string;
  metadata: Metadata4;
  url: string;
}

export interface EmploymentDetails {
  cisSubContractor: boolean;
  payrollCode: string;
  jobTitle: string;
  onHold: boolean;
  onFurlough: boolean;
  furloughStart: string;
  furloughEnd: string;
  furloughCalculationBasis: string;
  furloughCalculationBasisAmount: number;
  partialFurlough: boolean;
  furloughHoursNormallyWorked: number;
  furloughHoursOnFurlough: number;
  isApprentice: boolean;
  workingPattern: string;
  forcePreviousPayrollCode: string;
  starterDetails: StarterDetails;
  directorshipDetails: DirectorshipDetails;
  leaverDetails: LeaverDetails;
  cis: Cis;
  department: Department;
  posts: Post[];
}

export interface Address2 {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  postCode: string;
  country: string;
}

export interface PartnerDetails {
  firstName: string;
  initials: string;
  lastName: string;
  niNumber: string;
}

export interface PersonalDetails {
  address: Address2;
  maritalStatus: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  emailPayslip: boolean;
  passwordProtectPayslip: boolean;
  pdfPassword: string;
  emailStatement: boolean;
  photoUrl: string;
  telephone: string;
  mobile: string;
  dateOfBirth: string;
  statePensionAge: number;
  gender: string;
  niNumber: string;
  passportNumber: string;
  partnerDetails: PartnerDetails;
}

export interface Line {
  type: string;
  code: string;
  description: string;
  secondaryDescription: string;
  value: number;
  attachmentOrderId: string;
  pensionId: string;
  currencySymbol: string;
  formattedValue: string;
  hasSecondaryDescription: boolean;
}

export interface Payslip {
  isClosed: boolean;
  period: string;
  from: string;
  to: string;
  paymentDate: string;
  note: string;
  allowanceNote: string;
  employee: Employee;
  logo: string;
  employer: Employer;
  employerAddress: EmployerAddress;
  hmrcDetails: HmrcDetails;
  payOptions: PayOptions;
  employmentDetails: EmploymentDetails;
  personalDetails: PersonalDetails;
  lines: Line[];
  employerNi: number;
  employerPensionContribs: number;
}

export type FileObject = {
  name: string;
  body: string | undefined;
};
