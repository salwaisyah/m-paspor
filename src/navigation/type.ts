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
};
