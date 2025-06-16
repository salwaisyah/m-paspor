import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import passportApplicationPurposeOptions from '../../../../data/Options/PassportApplicationPurposeOptions';
import styles from '../styles';
import RadioButtonOptionComponent from '../../../../components/RadioButtonOption';
import Colors from '../../../../../assets/styles/Colors';

type Step2PassportApplicationQuestionnaireSubStep6Props = {
  setSubStep: (step: number) => void;
  selectedOption: string;
  setSelectedOption: (val: string) => void;
  selectedPassportOption: string;
};

const Step2PassportApplicationQuestionnaireSubStep6 = (
  props: Step2PassportApplicationQuestionnaireSubStep6Props,
) => {
  const {
    setSubStep,
    selectedOption,
    setSelectedOption,
    selectedPassportOption,
  } = props;
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          style={({pressed}) => ({
            transform: [{scale: pressed ? 0.99 : 1}],
          })}
          onPress={() => {
            selectedPassportOption === 'already'
              ? setSubStep(5)
              : setSubStep(1);
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
            Apakah tujuan Anda membuat paspor?
          </Text>
          {passportApplicationPurposeOptions.map(option => (
            <RadioButtonOptionComponent
              key={option.value}
              label={option.label}
              description={option.description}
              value={option.value}
              selectedValue={selectedOption}
              onSelect={value => setSelectedOption(value)}
            />
          ))}
        </View>

        <Button
          mode="contained"
          onPress={() => setSubStep(7)}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step2PassportApplicationQuestionnaireSubStep6;
