import React, {RefObject, useState} from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import Colors from '../../../../../assets/styles/Colors';
import familyRelationshipData from '../../../../data/DropdownData/FamilyRelationshipData';
import {changeStep} from '../../../../utils/stepNavigation';
import {StepValidationStatusSetter} from '../../../../../types/step';

type Step2PassportApplicationQuestionnaireSubStep10Props = {
  step: number;
  setStep: (step: number) => void;
  setSubStep: (step: number) => void;
  setStepValidationStatus: StepValidationStatusSetter;
  selectedDestinationCountryOption: string;
  onSubStepValidation: (isValid: boolean) => void;
  editedCompletedRef: RefObject<Set<number>>;
};

const Step2PassportApplicationQuestionnaireSubStep10 = (
  props: Step2PassportApplicationQuestionnaireSubStep10Props,
) => {
  const {
    step,
    setStep,
    setSubStep,
    setStepValidationStatus,
    selectedDestinationCountryOption,
    onSubStepValidation,
    editedCompletedRef,
  } = props;

  const [relativeName, setRelativeName] = useState('');
  const [relativePhone, setRelativePhone] = useState('');
  const [relativeRelationship, setRelativeRelationship] = useState('');

  const onNextPress = () => {
    const isFormValid =
      relativeName.trim() !== '' &&
      relativePhone.trim() !== '' &&
      relativeRelationship.trim() !== '';

    if (selectedDestinationCountryOption === 'destination_country_not_set') {
      if (isFormValid) {
        onSubStepValidation(true);
      }
      changeStep({
        currentStep: step,
        targetStep: 3,
        setStep,
        setStepValidationStatus,
        editedCompletedRef,
      });
    } else {
      setSubStep(11);
    }
  };

  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          style={({pressed}) => ({
            transform: [{scale: pressed ? 0.99 : 1}],
          })}
          onPress={() => {
            selectedDestinationCountryOption === 'destination_country_not_set'
              ? setSubStep(7)
              : setSubStep(9);
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
            Nomor telepon keluarga/kerabat terdekat Anda di Indonesia yang dapat
            dihubungi
          </Text>

          <TextInputComponent
            title="Nama Kerabat"
            placeholder="Masukkan Nama Kerabat Anda"
            isRequired
            value={relativeName}
            onChangeText={setRelativeName}
          />

          <TextInputComponent
            title="Nomor Telepon"
            placeholder="Contoh: 08513456789"
            isRequired
            value={relativePhone}
            onChangeText={setRelativePhone}
          />

          <TextInputComponent
            title="Keterangan Hubungan Keluarga"
            placeholder="Pilih Hubungan"
            isRequired
            isDropdown
            dropdownItemData={familyRelationshipData}
            value={relativeRelationship}
            onChangeText={setRelativeRelationship}
          />
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

export default Step2PassportApplicationQuestionnaireSubStep10;
