import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../../../assets/styles/Colors';
import styles from '../styles';
import passportAppointmentData from '../../../../data/History/PassportAppointmentData';
import Accordion from '../../../../components/Accordion';
import termsAndConditionsData from '../../../../data/Steps/TermsAndContionsData';

type Step7CompletionProps = {
  showSubmitSuccessDialog: () => void;
  setLastCompletedSteps: () => void;
};

const Step7Completion = (props: Step7CompletionProps) => {
  const {showSubmitSuccessDialog, setLastCompletedSteps} = props;
  const lastAppointment =
    passportAppointmentData[passportAppointmentData.length - 1];

  return (
    <ScrollView>
      <View style={[styles.subStepContainer, {paddingBottom: 0}]}>
        <View style={styles.midContainer}>
          <Text style={styles.midTextTitle}>Jadwal Kedatangan</Text>
          <View style={styles.midIconContainer}>
            <View style={styles.midIconContentWrapper}>
              <Icon
                name="calendar-today"
                size={24}
                color={Colors.secondary30.color}
              />
              <Text style={styles.midIconContentTextStyle}>
                {lastAppointment.appointmentDate}
              </Text>
            </View>
            <View style={styles.midIconContentWrapper}>
              <Icon
                name="clock-outline"
                size={24}
                color={Colors.secondary30.color}
              />
              <Text style={styles.midIconContentTextStyle}>
                {lastAppointment.appointmentTime}
              </Text>
            </View>
            <View style={styles.midIconContentWrapper}>
              <Icon
                name="map-marker-outline"
                size={24}
                color={Colors.secondary30.color}
              />
              <Text style={styles.midIconContentTextStyle}>
                {lastAppointment.serviceUnit}
              </Text>
            </View>
          </View>
          <Divider />
          <View style={styles.midTextContentContainer}>
            <View style={styles.midTextContentWrapper}>
              <Text style={styles.midTextContentTitle}>Tanggal Pengajuan</Text>
              <Text style={styles.midTextContentData}>
                {lastAppointment.submissionDate}
              </Text>
            </View>
            <View style={styles.midTextContentWrapper}>
              <Text style={styles.midTextContentTitle}>Kode Layanan</Text>
              <Text style={styles.midTextContentData}>
                {lastAppointment.serviceCode}
              </Text>
            </View>
          </View>
          <Divider />
        </View>
        <View style={styles.accordionContainer}>
          <Accordion title={'Persyaratan dan Ketentuan'}>
            <View style={styles.accordionOptionDataWrapper}>
              {termsAndConditionsData.map((item, index) => (
                <View key={index}>
                  <View style={styles.accordionTextContentWrapper}>
                    <Text
                      style={[
                        styles.accordionTextContentDesc,
                        styles.accordionListFlex,
                      ]}>
                      {item.id}.
                    </Text>
                    <Text style={styles.accordionTextContentDesc}>
                      {item.text}
                    </Text>
                  </View>
                  {item.subItems && (
                    <View style={styles.accordionTextContentAlphabetWrapper}>
                      {item.subItems.map((sub, subIndex) => (
                        <View
                          key={subIndex}
                          style={styles.accordionTextContentWrapper}>
                          <Text
                            style={[
                              styles.accordionTextContentDesc,
                              styles.accordionListFlex,
                            ]}>
                            {String.fromCharCode(97 + subIndex)}.
                          </Text>
                          <Text style={styles.accordionTextContentDesc}>
                            {sub}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
          </Accordion>
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.secondary70.color,
          padding: 16,
          borderRadius: 0,
          borderWidth: 0,
        }}>
        <View style={styles.applicantDetailContentContainer}>
          <View style={styles.applicantDetailTextContentWrapper}>
            <Text style={styles.applicantDetailTextTitle}>Pemohon</Text>
            <Text
              style={[
                styles.applicantDetailTextDesc,
                styles.applicantDetailTexDescName,
              ]}>
              {lastAppointment.applicantName}
            </Text>
          </View>
          <View style={styles.applicantDetailTextContentWrapper}>
            <Text style={styles.applicantDetailTextTitle}>Kode Permohonan</Text>
            <Text
              style={[
                styles.applicantDetailTextDesc,
                styles.applicantDetailTexDescCode,
              ]}>
              {lastAppointment.applicantCode}
            </Text>
          </View>
          <View style={styles.applicantDetailContentChildContainer}>
            <View style={styles.applicantDetailTextContentWrapper}>
              <Text style={styles.applicantDetailTextTitle}>NIK</Text>
              <Text style={styles.applicantDetailTextDesc}>
                {lastAppointment.applicationDetails.nationalIdNumber}
              </Text>
            </View>
            <View style={styles.applicantDetailTextContentWrapper}>
              <Text style={styles.applicantDetailTextTitle}>Jenis Kelamin</Text>
              <Text style={styles.applicantDetailTextDesc}>
                {lastAppointment.applicationDetails.gender}
              </Text>
            </View>
            <View style={styles.applicantDetailTextContentWrapper}>
              <Text style={styles.applicantDetailTextTitle}>
                Jenis Permohonan
              </Text>
              <Text style={styles.applicantDetailTextDesc}>
                {lastAppointment.applicationDetails.applicationType}
              </Text>
            </View>
            <View style={styles.applicantDetailTextContentWrapper}>
              <Text style={styles.applicantDetailTextTitle}>
                Alasan Penggantian
              </Text>
              <Text style={styles.applicantDetailTextDesc}>
                {lastAppointment.applicationDetails.replacementReason}
              </Text>
            </View>
            <View style={styles.applicantDetailTextContentWrapper}>
              <Text style={styles.applicantDetailTextTitle}>
                Tujuan Permohonan
              </Text>
              <Text style={styles.applicantDetailTextDesc}>
                {lastAppointment.applicationDetails.applicationPurpose}
              </Text>
            </View>
            <View style={styles.applicantDetailTextContentWrapper}>
              <Text style={styles.applicantDetailTextTitle}>Jenis Paspor</Text>
              <Text style={styles.applicantDetailTextDesc}>
                {lastAppointment.applicationDetails.passportType}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{margin: 16}}>
        <Button
          mode="contained"
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}
          onPress={() => {
            showSubmitSuccessDialog();
            setLastCompletedSteps();
          }}>
          Kembali ke Halaman Utama
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step7Completion;
