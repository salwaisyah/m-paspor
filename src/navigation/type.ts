import {PassportAppointmentData} from '../model/model';

export type RootStackParamList = {
  Login: undefined;
  NavigationRoute: undefined;
  Home: undefined;
  Register: undefined;
  AccountVerification: undefined;
  TermsAndConditions: undefined;
  History: undefined;
  Notification: undefined;
  Profile: undefined;
  EditProfile: undefined;
  CloseAccount: undefined;
  SetPassword: undefined;
  RegularPassport: undefined;
  Guidebook: undefined;
  EazyPassport: undefined;
  ApplicationDetail: {data: PassportAppointmentData};
  ApplicationGuide: undefined;
  PassportRequirements: undefined;
  SeeRequirements: undefined;
  OtherMethod: undefined;
  BillingCode: undefined;
};

export interface ApplicationDetails {
  nationalIdNumber?: string | undefined;
  gender?: string | undefined;
  applicationType?: string | undefined;
  replacementReason?: string | undefined;
  applicationPurpose?: string | undefined;
  passportType?: string | undefined;
  fee?: string | undefined;
}

export interface PassportAppointment {
  id?: string | undefined;
  applicantName?: string | undefined;
  applicantCode?: string | undefined;
  appointmentDate?: string | undefined;
  appointmentTime?: string | undefined;
  serviceUnit?: string | undefined;
  status?: string | undefined;
  submissionDate?: string | undefined;
  serviceCode?: string | undefined;
  applicationDetails?: ApplicationDetails;
}
