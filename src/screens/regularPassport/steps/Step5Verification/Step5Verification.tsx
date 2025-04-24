import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../../../assets/styles/Colors';
import styles from '../styles';

type Step5VerificationProps = {
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
  passportAppointmentData: any[];
};

const Step5Content = ({
  setStep,
  setSubStep,
  passportAppointmentData,
}: Step5VerificationProps) => {
  const lastAppointment =
    passportAppointmentData[passportAppointmentData.length - 1];

  return (
    <View style={styles.subStepContainer}>
      <Text style={styles.subStepDesc}>
        Data pemohon berikut tidak akan terhapus dan sudah tersimpan di beranda.
        Silakan lanjut untuk memilih jenis paspor, lokasi dan jadwal
        pengambilan, serta pembayaran.
      </Text>
      <View style={styles.applicantDetailContentContainer}>
        <View style={styles.applicantDetailTopContentWrapper}>
          <View style={{gap: 4}}>
            <Text style={[styles.applicantDetailTextTitle, {flex: 0}]}>
              Pemohon
            </Text>
            <Text
              style={[
                styles.applicantDetailTextDesc,
                {textTransform: 'uppercase', flex: 0},
              ]}>
              {lastAppointment.applicantName}
            </Text>
          </View>
          <View style={styles.applicantDetailIconContentWrapper}>
            <Icon
              name="trash-can-outline"
              size={24}
              color={Colors.indicatorRed.color}
            />
            <Icon
              name="square-edit-outline"
              size={24}
              color={Colors.primary30.color}
            />
          </View>
        </View>
        <View style={styles.applicantDetailContentChildContainer}>
          <DetailRow
            label="NIK"
            value={lastAppointment.applicationDetails.nationalIdNumber}
          />
          <DetailRow
            label="Jenis Kelamin"
            value={lastAppointment.applicationDetails.gender}
          />
          <DetailRow
            label="Jenis Permohonan"
            value={lastAppointment.applicationDetails.applicationType}
          />
          <DetailRow
            label="Alasan Penggantian"
            value={lastAppointment.applicationDetails.replacementReason}
          />
          <DetailRow
            label="Tujuan Permohonan"
            value={lastAppointment.applicationDetails.applicationPurpose}
          />
          <DetailRow
            label="Jenis Paspor"
            value={lastAppointment.applicationDetails.passportType}
          />
        </View>
      </View>
      <View style={[styles.subStepButtonContainer, {marginTop: 12}]}>
        <Button
          mode="contained"
          onPress={() => setStep(6)}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
        <Button
          mode="outlined"
          onPress={() => {
            setStep(4);
            setSubStep(2);
          }}
          style={styles.subStepButtonOutlined}
          textColor={Colors.primary30.color}>
          Kembali
        </Button>
      </View>
    </View>
  );
};

const DetailRow = ({label, value}: {label: string; value: string}) => (
  <View style={styles.applicantDetailTextContentWrapper}>
    <Text style={styles.applicantDetailTextTitle}>{label}</Text>
    <Text style={styles.applicantDetailTextDesc}>{value}</Text>
  </View>
);

export default Step5Content;
