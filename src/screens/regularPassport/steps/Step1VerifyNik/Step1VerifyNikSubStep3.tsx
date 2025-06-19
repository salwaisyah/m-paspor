import React, {RefObject, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import genderData from '../../../../data/DropdownData/GenderData';
import civilStatusData from '../../../../data/DropdownData/CivilStatusData';
import Colors from '../../../../../assets/styles/Colors';
import {changeStep} from '../../../../utils/stepNavigation';
import {StepValidationStatusSetter} from '../../../../../types/step';

type Step1VerifyNikSubStep3Props = {
  step: number;
  setStep: (val: number) => void;
  setSubStep: (val: number) => void;
  setStepValidationStatus: StepValidationStatusSetter;
  onSubStepValidation: (isValid: boolean) => void;
  editedCompletedRef: RefObject<Set<number>>;
};

const Step1VerifyNikSubStep3 = ({
  step,
  setStep,
  setSubStep,
  setStepValidationStatus,
  onSubStepValidation,
  editedCompletedRef,
}: Step1VerifyNikSubStep3Props) => {
  const [fullName, setFullName] = useState('');
  const [nik, setNik] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [civilStatus, setCivilStatus] = useState('');

  const onNextPress = () => {
    const isFormValid =
      fullName.trim() !== '' &&
      nik.trim() !== '' &&
      birthDate.trim() !== '' &&
      gender.trim() !== '' &&
      civilStatus.trim() !== '';

    if (isFormValid) {
      onSubStepValidation(true);
    } else {
      onSubStepValidation(false);
    }

    changeStep({
      currentStep: step,
      targetStep: 2,
      setStep,
      setSubStep: () => setSubStep(1),
      setStepValidationStatus,
      editedCompletedRef,
    });
  };

  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <View style={styles.documentImageContainer}>
          <View style={styles.documentImageCropped} />
        </View>

        <View style={[styles.subStepTextInputContainer, {marginBottom: 24}]}>
          <TextInputComponent
            title="Nama Lengkap Pemohon"
            placeholder="Nama Lengkap Anda"
            isRequired
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInputComponent
            title="NIK"
            placeholder="Nama NIK Anda"
            isRequired
            value={nik}
            onChangeText={setNik}
          />
          <View style={styles.subStepTextInputRowContainer}>
            <View style={styles.subStepTextInputFlex}>
              <TextInputComponent
                title="Tanggal Lahir"
                placeholder="DD/MM/YYYY"
                isRequired
                isDate
                value={birthDate}
                onChangeText={setBirthDate}
              />
            </View>
            <View style={styles.subStepTextInputFlex}>
              <TextInputComponent
                title="Jenis Kelamin"
                placeholder="Jenis Kelamin"
                isRequired
                isDropdown
                dropdownItemData={genderData}
                value={gender}
                onChangeText={setGender}
              />
            </View>
          </View>
          <TextInputComponent
            title="Status Sipil"
            placeholder="Pilih Status Sipil Anda"
            isRequired
            isDropdown
            dropdownItemData={civilStatusData}
            value={civilStatus}
            onChangeText={setCivilStatus}
          />
        </View>

        <View style={styles.subStepButtonContainer}>
          <Button
            mode="contained"
            onPress={onNextPress}
            style={styles.subStepButtonContained}
            textColor={Colors.neutral100.color}>
            Lanjut
          </Button>
          <Button
            mode="outlined"
            onPress={() => setSubStep(2)}
            style={styles.subStepButtonOutlined}
            textColor={Colors.primary30.color}>
            Kembali
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Step1VerifyNikSubStep3;
