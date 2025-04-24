import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'react-native-paper';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import RadioButtonOptionComponent from '../../../../components/RadioButtonOption';
import destinationCountryOptions from '../../../../data/Options/DestinationCountryOptions';
import destinationCountryData from '../../../../data/DropdownData/DestinationCountryData';
import Colors from '../../../../../assets/styles/Colors';

type Step2SupportingDocsSubStep7Props = {
  setSubStep: (step: number) => void;
  selectedOption: string;
  setSelectedOption: (val: string) => void;
};

const Step2SupportingDocsSubStep7 = ({
  setSubStep,
  selectedOption,
  setSelectedOption,
}: Step2SupportingDocsSubStep7Props) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          onPress={() => setSubStep(6)}
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
          <TextInputComponent
            title="Negara mana yang akan Anda tuju?"
            placeholder="Masukkan negara tujuan"
            isDropdown
            dropdownItemData={destinationCountryData}
          />
          {destinationCountryOptions.map(option => (
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
          onPress={() => setSubStep(8)}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step2SupportingDocsSubStep7;
