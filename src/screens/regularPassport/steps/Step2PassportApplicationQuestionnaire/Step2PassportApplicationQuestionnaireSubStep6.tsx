import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
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
          onPress={() => {
            selectedPassportOption === 'already'
              ? setSubStep(5)
              : setSubStep(1);
          }}
          style={({pressed}) => [
            styles.subStepButtonBackWrapper,
            {
              transform: [{scale: pressed ? 0.99 : 1}],
            },
          ]}>
          <Icon name="chevron-left" size={24} />
          <Text style={styles.subStepButtonBackText}>Kembali</Text>
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
