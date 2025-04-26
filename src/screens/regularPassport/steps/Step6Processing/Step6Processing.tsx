import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import TextInputComponent from '../../../../components/TextInput';
import styles from '../styles';
import Colors from '../../../../../assets/styles/Colors';
import FontFamily from '../../../../../assets/styles/FontFamily';
import arrivalDateGuidelinesData from '../../../../data/Steps/ArrivalDateGuidelinesData';
import passportTypeData from '../../../../data/DropdownData/PassportTypeData';

type Step6ProcessingProps = {
  showFinalizationConfirmationDialog: () => void;
  showPassportTypeInfoDialog: () => void;
  showSearchLocationSheet: () => void;
  showSelectDateSheet: () => void;
};

const Step6Processing = (props: Step6ProcessingProps) => {
  const {
    showFinalizationConfirmationDialog,
    showPassportTypeInfoDialog,
    showSearchLocationSheet,
    showSelectDateSheet,
  } = props;
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
            isDropdownPressedSheet
            handleDropdownPressed={showSearchLocationSheet}
          />
          <TextInputComponent
            title="Jenis Paspor"
            iconButton
            placeholder="Pilih satu jenis paspor"
            isRequired
            isDropdown
            dropdownItemData={passportTypeData}
            onIconButtonPress={showPassportTypeInfoDialog}
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
            {arrivalDateGuidelinesData.map((item, index) => (
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

        <TextInputComponent
          title="Tanggal dan Waktu Kedatangan"
          placeholder="Pilih tanggal dan waktu kedatangan"
          isRequired
          isDropdownPressedSheet
          handleDropdownPressed={showSelectDateSheet}
        />

        <Button
          mode="contained"
          style={[styles.subStepButtonContained, {marginTop: 24}]}
          textColor={Colors.neutral100.color}
          onPress={showFinalizationConfirmationDialog}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step6Processing;
