import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'react-native-paper';
import styles from '../styles';
import durationAbroadOptions from '../../../../data/Options/DurationAbroadOptions';
import RadioButtonOptionComponent from '../../../../components/RadioButtonOption';
import Colors from '../../../../../assets/styles/Colors';

type Step2SupportingDocsSubStep9Props = {
  setSubStep: (step: number) => void;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
};

const Step2SupportingDocsSubStep9 = ({
  setSubStep,
  selectedOption,
  setSelectedOption,
}: Step2SupportingDocsSubStep9Props) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          onPress={() => setSubStep(8)}
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

export default Step2SupportingDocsSubStep9;
