import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'react-native-paper';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import Colors from '../../../../../assets/styles/Colors';
import familyRelationshipData from '../../../../data/DropdownData/FamilyRelationshipData';

type Step2PassportApplicationQuestionnaireSubStep10Props = {
  selectedDestinationCountryOption: string;
  setStep: (step: number) => void;
  setSubStep: (step: number) => void;
};

const Step2PassportApplicationQuestionnaireSubStep10 = (
  props: Step2PassportApplicationQuestionnaireSubStep10Props,
) => {
  const {selectedDestinationCountryOption, setStep, setSubStep} = props;
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          onPress={() => {
            selectedDestinationCountryOption === 'destination_country_not_set'
              ? setSubStep(7)
              : setSubStep(9);
          }}
          style={({pressed}) => [
            styles.subStepButtonBackWrapper,
            {
              transform: [{scale: pressed ? 0.99 : 1}],
              marginBottom: 8,
            },
          ]}>
          <Icon name="chevron-left" size={24} />
          <Text style={styles.subStepButtonBackText}>Kembali</Text>
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
          />

          <TextInputComponent
            title="Nomor Telepon"
            placeholder="Contoh: 08513456789"
            isRequired
          />

          <TextInputComponent
            title="Keterangan Hubungan Keluarga"
            placeholder="Pilih Hubungan"
            isRequired
            isDropdown
            dropdownItemData={familyRelationshipData}
          />
        </View>

        <Button
          mode="contained"
          onPress={() => {
            selectedDestinationCountryOption === 'destination_country_not_set'
              ? setStep(3)
              : setSubStep(11);
          }}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step2PassportApplicationQuestionnaireSubStep10;
