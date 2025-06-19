import {RefObject} from 'react';
export type StepStatus = 'completed' | 'incomplete' | 'invalid';

interface StepChangeParams {
  currentStep: number;
  targetStep: number;
  setStep: (step: number) => void;
  setSubStep?: (sub: number) => void;
  setStepValidationStatus: React.Dispatch<
    React.SetStateAction<Record<number, StepStatus>>
  >;
  editedCompletedRef: RefObject<Set<number>>;
}

export function changeStep({
  currentStep,
  targetStep,
  setStep,
  setSubStep,
  setStepValidationStatus,
  editedCompletedRef,
}: StepChangeParams) {
  setStepValidationStatus(prev => {
    const next = {...prev};

    if (currentStep !== targetStep &&
        editedCompletedRef.current?.has(currentStep)) {
      next[currentStep] = 'completed';
      editedCompletedRef.current.delete(currentStep);
    }

    if (prev[targetStep] === 'completed') {
      editedCompletedRef.current?.add(targetStep);
    }

    next[targetStep] = 'incomplete';

    if (targetStep > currentStep) {
      for (let s = 1; s < targetStep; s++) {
        if (next[s] !== 'completed') next[s] = 'invalid';
      }
    } else if (targetStep < currentStep) {
      for (let s = currentStep; s > targetStep; s--) {
        if (next[s] !== 'completed') next[s] = 'invalid';
      }
    }

    return next;
  });

  setStep(targetStep);
  if (setSubStep) setSubStep(1);
}
