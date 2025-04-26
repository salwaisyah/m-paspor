import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import genderData from '../../../../data/DropdownData/GenderData';
import civilStatusData from '../../../../data/DropdownData/CivilStatusData';
import Colors from '../../../../../assets/styles/Colors';

type Step1VerifyNikSubStep3Props = {
  setStep: (val: number) => void;
  setSubStep: (val: number) => void;
};

const Step1VerifyNikSubStep3 = ({
  setStep,
  setSubStep,
}: Step1VerifyNikSubStep3Props) => {
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
          />
          <TextInputComponent
            title="NIK"
            placeholder="Nama NIK Anda"
            isRequired
          />
          <View style={styles.subStepTextInputRowContainer}>
            <View style={styles.subStepTextInputFlex}>
              <TextInputComponent
                title="Tanggal Lahir"
                placeholder="DD/MM/YYYY"
                isRequired
                isDate
              />
            </View>
            <View style={styles.subStepTextInputFlex}>
              <TextInputComponent
                title="Jenis Kelamin"
                placeholder="Jenis Kelamin"
                isRequired
                isDropdown
                dropdownItemData={genderData}
              />
            </View>
          </View>
          <TextInputComponent
            title="Status Sipil"
            placeholder="Pilih Status Sipil Anda"
            isRequired
            isDropdown
            dropdownItemData={civilStatusData}
          />
        </View>

        <View style={styles.subStepButtonContainer}>
          <Button
            mode="contained"
            onPress={() => {
              setStep(2);
              setSubStep(1);
            }}
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
