import React, {useState} from 'react';
import {ScrollView, View, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import RadioButtonOptionComponent from '../../../../components/RadioButtonOption';
import destinationCountryOptions from '../../../../data/Options/DestinationCountryOptions';
import Colors from '../../../../../assets/styles/Colors';
import countryData from '../../../../data/DropdownData/CountryData';

type Step2PassportApplicationQuestionnaireSubStep7Props = {
  setSubStep: (step: number) => void;
  selectedDestinationCountryOption: string;
  setSelectedDestinationCountryOption: (val: string) => void;
};

const Step2PassportApplicationQuestionnaireSubStep7 = ({
  setSubStep,
  selectedDestinationCountryOption,
  setSelectedDestinationCountryOption,
}: Step2PassportApplicationQuestionnaireSubStep7Props) => {
  const [countryValue, setCountryValue] = useState<string | null>(null);

  const handleCountrySelect = (value: string | null) => {
    setCountryValue(value);
    setSelectedDestinationCountryOption('');
  };

  const handleRadioSelect = (value: string) => {
    if (value === 'destination_country_not_set') {
      setSelectedDestinationCountryOption(value);
      setCountryValue(null);
    } else {
      setSelectedDestinationCountryOption(value);
    }
  };

  const isRadioButtonSelected = (value: string) => {
    if (countryValue !== null) {
      return '';
    }
    return selectedDestinationCountryOption === value ? value : '';
  };

  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          style={({pressed}) => ({
            transform: [{scale: pressed ? 0.99 : 1}],
          })}
          onPress={() => {
            setSubStep(6);
            setSelectedDestinationCountryOption('');
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
          <TextInputComponent
            title="Negara mana yang akan Anda tuju?"
            placeholder="Masukkan negara tujuan"
            isDropdownCountry
            dropdownCountryItemData={countryData}
            countryValue={countryValue}
            setCountryValue={handleCountrySelect}
          />
          {destinationCountryOptions.map(option => (
            <RadioButtonOptionComponent
              key={option.value}
              label={option.label}
              description={option.description}
              value={option.value}
              selectedValue={isRadioButtonSelected(option.value)}
              onSelect={() => handleRadioSelect(option.value)}
            />
          ))}
        </View>

        <Button
          mode="contained"
          onPress={() => {
            selectedDestinationCountryOption === 'destination_country_not_set'
              ? setSubStep(10)
              : setSubStep(8);
          }}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step2PassportApplicationQuestionnaireSubStep7;
