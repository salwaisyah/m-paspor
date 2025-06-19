import React, {RefObject, useRef} from 'react';
import {View, Pressable, Text} from 'react-native';
import styles from '../styles';
import RadioButtonOptionComponent from '../../../../components/RadioButtonOption';
import hasHadPassportBeforeOptions from '../../../../data/Options/HasHadPassportBeforeOptions';
import {Button} from 'react-native-paper';
import Colors from '../../../../../assets/styles/Colors';
import {changeStep} from '../../../../utils/stepNavigation';
import {StepValidationStatusSetter} from '../../../../../types/step';

type Step2PassportApplicationQuestionnaireSubStep1Props = {
  step: number;
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
  setStepValidationStatus: StepValidationStatusSetter;
  selectedPassportOption: string;
  setSelectedPassportOption: (value: string) => void;
  showDontHaveYetDialog: () => void;
  editedCompletedRef: RefObject<Set<number>>;
};

const Step2PassportApplicationQuestionnaireSubStep1 = ({
  step,
  setStep,
  setSubStep,
  setStepValidationStatus,
  selectedPassportOption,
  setSelectedPassportOption,
  showDontHaveYetDialog,
  editedCompletedRef,
}: Step2PassportApplicationQuestionnaireSubStep1Props) => {
  const onBackPress = () => {
    changeStep({
      currentStep: step,
      targetStep: 1,
      setStep,
      setSubStep: () => setSubStep(3),
      setStepValidationStatus,
      editedCompletedRef,
    });
  };

  return (
    <View style={styles.subStepContainer}>
      <Pressable
        style={({pressed}) => ({
          transform: [{scale: pressed ? 0.99 : 1}],
        })}
        onPress={onBackPress}>
        <Button
          mode="contained"
          icon="chevron-left"
          textColor={Colors.neutral100.color}
          style={styles.subStepButtonBackContainer}>
          Kembali
        </Button>
      </Pressable>

      <View style={styles.subStepQuestionnaireOptionContainer}>
        <Text style={styles.questionnaireData}>
          Apakah Anda sudah pernah memiliki paspor?
        </Text>
        {hasHadPassportBeforeOptions.map(option => (
          <RadioButtonOptionComponent
            key={option.value}
            label={option.label}
            description={option.description}
            value={option.value}
            selectedValue={selectedPassportOption}
            onSelect={value => {
              setSelectedPassportOption(value);
              value === 'already' ? setSubStep(2) : showDontHaveYetDialog();
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Step2PassportApplicationQuestionnaireSubStep1;
