import React, {useState} from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import FontFamily from '../../../../../assets/styles/FontFamily';
import TextInputComponent from '../../../../components/TextInput';
import destinationFamilyContactOptions from '../../../../data/Options/DestinationFamilyContactOptions';
import familyRelationshipData from '../../../../data/DropdownData/FamilyRelationshipData';
import RadioButtonOptionComponent from '../../../../components/RadioButtonOption';
import Colors from '../../../../../assets/styles/Colors';

type Step2PassportApplicationQuestionnaireSubStep11Props = {
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  onSubStepValidation: (isValid: boolean) => void;
};

const Step2PassportApplicationQuestionnaireSubStep11 = ({
  setStep,
  setSubStep,
  selectedOption,
  setSelectedOption,
  onSubStepValidation,
}: Step2PassportApplicationQuestionnaireSubStep11Props) => {
  const [relativeName, setRelativeName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [relationship, setRelationship] = useState('');

  const onNextPress = () => {
    const isFormValid =
      relativeName.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      relationship.trim() !== '' &&
      selectedOption.trim() !== '';

    if (isFormValid) {
      onSubStepValidation(true);
    } else {
      onSubStepValidation(false);
    }

    setStep(3);
  };

  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          style={({pressed}) => ({
            transform: [{scale: pressed ? 0.99 : 1}],
          })}
          onPress={() => setSubStep(10)}>
          <Button
            mode="contained"
            icon="chevron-left"
            textColor={Colors.neutral100.color}
            style={styles.subStepButtonBackContainer}>
            Kembali
          </Button>
        </Pressable>

        <View style={styles.subStepQuestionnaireOptionContainer}>
          <View style={{gap: 4}}>
            <Text style={styles.questionnaireData}>
              Nomor telepon keluarga/kerabat di negara tujuan
            </Text>
            <Text
              style={[
                styles.questionnaireData,
                {...FontFamily.notoSansRegular},
              ]}>
              (Opsional)
            </Text>
          </View>

          <TextInputComponent
            title="Nama Kerabat"
            placeholder="Masukkan Nama Kerabat Anda"
            value={relativeName}
            onChangeText={setRelativeName}
          />

          <TextInputComponent
            title="Nomor Telepon"
            placeholder="Contoh: 08513456789"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <TextInputComponent
            title="Keterangan Hubungan Keluarga"
            placeholder="Pilih Hubungan"
            isDropdown
            dropdownItemData={familyRelationshipData}
            value={relationship}
            onChangeText={setRelationship}
          />

          {destinationFamilyContactOptions.map(options => (
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
          onPress={onNextPress}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step2PassportApplicationQuestionnaireSubStep11;
