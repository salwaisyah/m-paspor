import React from 'react';
import {View, Pressable, Text} from 'react-native';
import styles from '../styles';
import RadioButtonOptionComponent from '../../../../components/RadioButtonOption';
import hasHadPassportBeforeOptions from '../../../../data/Options/HasHadPassportBeforeOptions';
import {Button} from 'react-native-paper';
import Colors from '../../../../../assets/styles/Colors';

type Step2PassportApplicationQuestionnaireSubStep1Props = {
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
  selectedPassportOption: string;
  setSelectedPassportOption: (value: string) => void;
  showDontHaveYetDialog: () => void;
};

const Step2PassportApplicationQuestionnaireSubStep1 = ({
  setStep,
  setSubStep,
  selectedPassportOption,
  setSelectedPassportOption,
  showDontHaveYetDialog,
}: Step2PassportApplicationQuestionnaireSubStep1Props) => {
  return (
    <View style={styles.subStepContainer}>
      <Pressable
        style={({pressed}) => ({
          transform: [{scale: pressed ? 0.99 : 1}],
        })}
        onPress={() => {
          setStep(1);
          setSubStep(3);
        }}>
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
