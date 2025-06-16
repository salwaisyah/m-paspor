import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import durationAbroadOptions from '../../../../data/Options/DurationAbroadOptions';
import RadioButtonOptionComponent from '../../../../components/RadioButtonOption';
import Colors from '../../../../../assets/styles/Colors';

type Step2PassportApplicationQuestionnaireSubStep9Props = {
  setSubStep: (step: number) => void;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
};

const Step2PassportApplicationQuestionnaireSubStep9 = ({
  setSubStep,
  selectedOption,
  setSelectedOption,
}: Step2PassportApplicationQuestionnaireSubStep9Props) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          style={({pressed}) => ({
            transform: [{scale: pressed ? 0.99 : 1}],
          })}
          onPress={() => setSubStep(8)}>
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
            Berapa lama Anda berencana berada di luar negeri?
          </Text>
          {durationAbroadOptions.map(options => (
            <RadioButtonOptionComponent
              key={options.value}
              label={options.label}
              description={options.description}
              value={options.value}
              selectedValue={selectedOption}
              onSelect={value => setSelectedOption(value)}
            />
          ))}
        </View>

        <Button
          mode="contained"
          onPress={() => setSubStep(10)}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step2PassportApplicationQuestionnaireSubStep9;
