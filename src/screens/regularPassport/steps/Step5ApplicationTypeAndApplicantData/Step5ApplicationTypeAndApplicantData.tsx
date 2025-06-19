import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../../../assets/styles/Colors';
import styles from '../styles';
import {getData} from '../../../../helper/asyncStorageHelper';
import {PassportAppointment} from '../../../../navigation/type';

type Step5ApplicationTypeAndApplicantDataProps = {
  setStep: (step: number) => void;
  showEditDataSheet: () => void;
  navigation: any;
  onSubStepValidation: (isValid: boolean) => void;
};

const Step5ApplicationTypeAndApplicantData = (
  props: Step5ApplicationTypeAndApplicantDataProps,
) => {
  const {setStep, showEditDataSheet, navigation, onSubStepValidation} = props;

  const [lastAppointment, setLastAppointment] = useState<PassportAppointment>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData('passportAppointments');
        if (Array.isArray(data) && data.length > 0) {
          setLastAppointment(data[data.length - 1]);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  const onNextPress = () => {
    onSubStepValidation(true);
    setStep(6);
  };

  const onBackHomePress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'NavigationRoute'}],
    });
  };

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
              {lastAppointment?.applicantName}
            </Text>
          </View>
          <View style={styles.applicantDetailIconContentWrapper}>
            <Icon
              name="trash-can-outline"
              size={24}
              color={Colors.indicatorRed.color}
            />
            <Pressable
              onPress={showEditDataSheet}
              style={({pressed}) => [
                {
                  transform: [{scale: pressed ? 0.925 : 1}],
                },
              ]}>
              <Icon
                name="square-edit-outline"
                size={24}
                color={Colors.primary30.color}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.applicantDetailContentChildContainer}>
          <DetailRow
            label="NIK"
            value={lastAppointment?.applicationDetails?.nationalIdNumber}
          />
          <DetailRow
            label="Jenis Kelamin"
            value={lastAppointment?.applicationDetails?.gender}
          />
          <DetailRow
            label="Jenis Permohonan"
            value={lastAppointment?.applicationDetails?.applicationType}
          />
          <DetailRow
            label="Alasan Penggantian"
            value={lastAppointment?.applicationDetails?.replacementReason}
          />
          <DetailRow
            label="Tujuan Permohonan"
            value={lastAppointment?.applicationDetails?.applicationPurpose}
          />
          <DetailRow
            label="Jenis Paspor"
            value={lastAppointment?.applicationDetails?.passportType}
          />
        </View>
      </View>
      <View style={[styles.subStepButtonContainer, {marginTop: 12}]}>
        <Button
          mode="contained"
          onPress={onNextPress}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
        <Button
          mode="outlined"
          onPress={onBackHomePress}
          style={styles.subStepButtonOutlined}
          textColor={Colors.primary30.color}>
          Beranda
        </Button>
      </View>
    </View>
  );
};

const DetailRow = ({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) => (
  <View style={styles.applicantDetailTextContentWrapper}>
    <Text style={styles.applicantDetailTextTitle}>{label}</Text>
    <Text style={styles.applicantDetailTextDesc}>{value}</Text>
  </View>
);

export default Step5ApplicationTypeAndApplicantData;
