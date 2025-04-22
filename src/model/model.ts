export type ApplicationDetails = {
  nationalIdNumber: string;
  gender: string;
  applicationType: string;
  replacementReason: string;
  applicationPurpose: string;
  passportType: string;
  fee: string;
};

export type PassportAppointmentData = {
  id: string;
  applicantName: string;
  applicantCode: string;
  appointmentDate: string;
  appointmentTime: string;
  serviceUnit: string;
  status: string;
  submissionDate: string;
  serviceCode: string;
  applicationDetails: ApplicationDetails;
};
