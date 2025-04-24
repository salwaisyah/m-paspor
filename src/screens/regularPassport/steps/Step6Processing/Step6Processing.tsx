import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import TextInputComponent from '../../../../components/TextInput';
import styles from '../styles';
import Colors from '../../../../../assets/styles/Colors';
import FontFamily from '../../../../../assets/styles/FontFamily';

type Step6ProcessingProps = {
  setStep: (step: number) => void;
  arrivalDateGuidelines: string[];
};

const Step6Processing = ({
  setStep,
  arrivalDateGuidelines,
}: Step6ProcessingProps) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <View style={styles.subStepTextWrapper}>
          <Text style={styles.subStepTitle}>
            Pilih Lokasi Pengambilan dan Jenis Paspor
          </Text>
          <Text style={styles.subStepDesc}>
            Anda dapat membuat paspor di kantor imigrasi manapun di seluruh
            Indonesia. Silakan pilih lokasi permohonan paspor.
          </Text>
        </View>

        <View style={[styles.subStepTextInputContainer, {marginVertical: 16}]}>
          <TextInputComponent
            title="Lokasi Kantor Imigrasi"
            placeholder="Pilih lokasi kantor imigrasi"
            isRequired
            isDropdown
          />
          {/* TODO: Add button information */}
          <TextInputComponent
            title="Jenis Paspor"
            placeholder="Pilih satu jenis paspor"
            isRequired
            isDropdown
          />
        </View>

        <Divider />

        <View style={[styles.subStepTextInputContainer, {marginVertical: 16}]}>
          <View style={styles.subStepTextWrapper}>
            <Text style={styles.subStepTitle}>
              Pilih Tanggal dan Waktu Kedatangan
            </Text>
            <Text style={styles.subStepDesc}>
              Setiap lokasi kantor imigrasi memiliki ketersediaan kuota yang
              berbeda. Silakan pilih tanggal dan waktu kedatangan.
            </Text>
          </View>

          <View>
            {arrivalDateGuidelines.map((item, index) => (
              <View key={index} style={styles.subStepListTextRowContainer}>
                <Text style={[styles.subStepDesc, FontFamily.notoSansBold]}>
                  •
                </Text>
                <Text
                  style={[
                    styles.subStepDesc,
                    styles.subStepListTextFlex,
                    FontFamily.notoSansBold,
                  ]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* TODO: Add calendar functionality here. */}
        <TextInputComponent
          title="Tanggal dan Waktu Kedatangan"
          placeholder="Pilih tanggal dan waktu kedatangan"
          isRequired
          isDate
        />

        <Button
          mode="contained"
          style={[styles.subStepButtonContained, {marginTop: 24}]}
          textColor={Colors.neutral100.color}
          onPress={() => setStep(7)}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step6Processing;
