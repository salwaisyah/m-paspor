import React, {RefObject} from 'react';
import {ScrollView, View, Pressable, Text} from 'react-native';
import {Checkbox, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../../assets/styles/Colors';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import postalCodeData from '../../../../data/DropdownData/PostalCodeData';
import districtData from '../../../../data/DropdownData/DistrictData';
import cityData from '../../../../data/DropdownData/CityData';
import provinceData from '../../../../data/DropdownData/ProvinceData';
import {changeStep} from '../../../../utils/stepNavigation';
import { StepValidationStatusSetter } from '../../../../../types/step';

type Step4ApplicantAdditionalDataSubStep1Props = {
  step: number;
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
  setStepValidationStatus: StepValidationStatusSetter;
  checkedOption: boolean;
  setCheckedOption: React.Dispatch<React.SetStateAction<boolean>>;
  editedCompletedRef: RefObject<Set<number>>;
};

const Step4ApplicantAdditionalDataSubStep1: React.FC<
  Step4ApplicantAdditionalDataSubStep1Props
> = ({
  step,
  setStep,
  setSubStep,
  setStepValidationStatus,
  checkedOption,
  setCheckedOption,
  editedCompletedRef,
}) => {
  const onBackPress = () => {
    changeStep({
      currentStep: step,
      targetStep: 3,
      setStep,
      setStepValidationStatus,
      editedCompletedRef,
    });
  };

  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          style={({pressed}) => ({
            transform: [{scale: pressed ? 0.99 : 1}],
            marginBottom: 12,
          })}
          onPress={onBackPress}>
          <Button
            mode="contained"
            icon="chevron-left"
            textColor={Colors.neutral100.color}
            style={styles.subStepButtonBackContainer}>
            Kembali
          </Button>
        </Pressable>

        <Text style={styles.subStepDesc}>
          Data di bawah ini harus sesuai dengan keterangan pada KTP pemohon.
          Data yang bertanda (
          <Text style={{color: Colors.indicatorRed.color}}>*</Text>) wajib
          diisi.
        </Text>

        <View
          style={[
            styles.subStepQuestionnaireOptionContainer,
            {marginBottom: 0},
          ]}>
          <Text style={styles.questionnaireDataSecondary}>
            Alamat sesuai KTP
          </Text>
          <TextInputComponent
            title="Tanggal Dikeluarkan KTP"
            placeholder="DD/MM/YYYY"
            isRequired
            isDate
          />
          <TextInputComponent
            title="Kewarganegaraan"
            placeholder="Indonesia"
            isRequired
            isDisabled
          />
          <TextInputComponent
            title="Alamat Sesuai KTP"
            placeholder="Masukkan alamat sesuai KTP"
            isRequired
            supportText="0/100 karakter"
            containerHeight={90}
            isMultiline
          />
          <TextInputComponent
            title="Provinsi Sesuai KTP"
            placeholder="Cari Provinsi"
            isDropdown
            dropdownItemData={provinceData}
          />
          <TextInputComponent
            title="Kabupaten/Kota Sesuai KTP"
            placeholder="Cari Kabupaten/Kota"
            isDropdown
            dropdownItemData={cityData}
          />
          <TextInputComponent
            title="Kecamatan Sesuai KTP"
            placeholder="Cari Kecamatan"
            isDropdown
            dropdownItemData={districtData}
          />
          <TextInputComponent
            title="Kode Pos Sesuai KTP"
            placeholder="Cari Kode Pos"
            isDropdown
            dropdownItemData={postalCodeData}
          />
        </View>

        <View
          style={[
            styles.subStepQuestionnaireOptionContainer,
            {marginBottom: 32},
          ]}>
          <Text style={styles.questionnaireDataSecondary}>
            Alamat Sekarang (Domisili)
          </Text>
          <View style={styles.subStepCheckWrapper}>
            <Checkbox
              status={checkedOption ? 'checked' : 'unchecked'}
              color={Colors.secondary20.color}
              uncheckedColor={Colors.secondary20.color}
              onPress={() => setCheckedOption(prev => !prev)}
            />
            <Text style={styles.subStepDesc}>Alamat sekarang sesuai KTP</Text>
          </View>
          <TextInputComponent
            title="Alamat Sesuai Domisili"
            placeholder="Masukkan alamat sesuai Domisili"
            isRequired
            supportText="0/100 karakter"
            containerHeight={90}
            isMultiline
          />
          <TextInputComponent
            title="Provinsi Sesuai Domisili"
            placeholder="Cari Provinsi"
            isDropdown
            dropdownItemData={provinceData}
          />
          <TextInputComponent
            title="Kabupaten/Kota Sesuai Domisili"
            placeholder="Cari Kabupaten/Kota"
            isDropdown
            dropdownItemData={cityData}
          />
          <TextInputComponent
            title="Kecamatan Sesuai Domisili"
            placeholder="Cari Kecamatan"
            isDropdown
            dropdownItemData={districtData}
          />
          <TextInputComponent
            title="Kode Pos Sesuai Domisili"
            placeholder="Cari Kode Pos"
            isDropdown
            dropdownItemData={postalCodeData}
          />
        </View>

        <Button
          mode="contained"
          onPress={() => {
            setStep(4);
            setSubStep(2);
          }}
          style={[styles.subStepButtonContained, {marginBottom: 8}]}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step4ApplicantAdditionalDataSubStep1;
