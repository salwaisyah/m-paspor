export type StepStatus = 'incomplete' | 'completed' | 'invalid';

export type StepValidationStatus = Record<number, StepStatus>;

export type StepValidationStatusSetter = React.Dispatch<
  React.SetStateAction<StepValidationStatus>
>;
