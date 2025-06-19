import React, {RefObject, useState} from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import {Button} from 'react-native-paper';
import Colors from '../../../../../assets/styles/Colors';
import jobData from '../../../../data/DropdownData/JobData';
import nationalityData from '../../../../data/DropdownData/NationalityData';
import {PassportAppointment} from '../../../../navigation/type';
import {addData, getData} from '../../../../helper/asyncStorageHelper';
import {changeStep} from '../../../../utils/stepNavigation';
import { StepValidationStatusSetter } from '../../../../../types/step';

type Step4ApplicantAdditionalDataSubStep2Props = {
  step: number;
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
  setStepValidationStatus: StepValidationStatusSetter;
  onSubStepValidation: (isValid: boolean) => void;
  editedCompletedRef: RefObject<Set<number>>;
};

const Step4ApplicantAdditionalDataSubStep2 = ({
  step,
  setStep,
  setSubStep,
  setStepValidationStatus,
  onSubStepValidation,
  editedCompletedRef,
}: Step4ApplicantAdditionalDataSubStep2Props) => {
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherNation, setMotherNation] = useState('');
  const [motherAddress, setMotherAddress] = useState('');

  const isFormValid =
    job.trim() !== '' &&
    phone.trim() !== '' &&
    motherName.trim() !== '' &&
    motherNation.trim() !== '' &&
    motherAddress.trim() !== '';

  const handleSaveDraft = async () => {
    if (isFormValid) {
      onSubStepValidation(true);

      // Ambil data appointment yang sudah tersimpan
      const storedAppointments: PassportAppointment[] =
        (await getData('passportAppointments')) || [];

      // Ambil ID terakhir dan hitung ID baru
      const lastId = storedAppointments.length
        ? Math.max(...storedAppointments.map(item => Number(item.id)))
        : 0;
      const nextId = (lastId + 1).toString();

      // Buat appointment baru dengan ID yang sudah dihitung
      const newAppointment: PassportAppointment = {
        id: nextId,
        applicantName: 'Salwa Aisyah Adhani',
        applicantCode: '1038000008887777',
        appointmentDate: 'Selasa, 20 Mei 2025',
        appointmentTime: '10:00-11:00 WIB',
        serviceUnit: 'Kantor Imigrasi Depok',
        status: 'Menunggu Pembayaran',
        submissionDate: 'Kamis, 15 Mei 2025 21:30',
        serviceCode: 'EH-LP7RNC',
        applicationDetails: {
          nationalIdNumber: '3271234560009123456',
          gender: 'Wanita',
          applicationType: 'Penggantian Paspor',
          replacementReason: 'Penuh/Halaman Penuh',
          applicationPurpose: 'Wisata/Liburan',
          passportType: 'PASPOR ELEKTRONIK POLIKARBONAT 5 TAHUN',
          fee: '650.000',
        },
      };

      // Simpan appointment baru
      await addData<PassportAppointment>(
        'passportAppointments',
        newAppointment,
      );

      const updatedAppointments = await getData('passportAppointments');
      console.log('Data yang berhasil ditambahkan:', updatedAppointments);
    } else {
      onSubStepValidation(false);
    }

    changeStep({
      currentStep: step,
      targetStep: 5,
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
          onPress={() => {
            setStep(4);
            setSubStep(1);
          }}>
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
            Keterangan Pemohon
          </Text>
          <TextInputComponent
            title="Pekerjaan"
            placeholder="Pilih pekerjaan"
            isRequired
            isDropdown
            dropdownItemData={jobData}
            value={job}
            onChangeText={setJob}
          />
          <TextInputComponent
            title="Nomor Telepon"
            placeholder="Contoh: 08513456789"
            isRequired
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <View
          style={[
            styles.subStepQuestionnaireOptionContainer,
            {marginBottom: 0},
          ]}>
          <Text style={styles.questionnaireDataSecondary}>
            Keterangan Ibu Pemohon
          </Text>
          <TextInputComponent
            title="Nama Ibu"
            placeholder="Masukkan nama lengkap ibu"
            isRequired
            value={motherName}
            onChangeText={setMotherName}
          />
          <TextInputComponent
            title="Kewarganegaraan Ibu"
            placeholder="Pilih kewarganegaraan ibu"
            isRequired
            isDropdown
            dropdownItemData={nationalityData}
            value={motherNation}
            onChangeText={setMotherNation}
          />
          <TextInputComponent
            title="Alamat Ibu"
            placeholder="Masukkan alamat ibu"
            isRequired
            supportText="0/100 karakter"
            containerHeight={90}
            isMultiline
            value={motherAddress}
            onChangeText={setMotherAddress}
          />
        </View>

        <View
          style={[
            styles.subStepQuestionnaireOptionContainer,
            {marginBottom: 0},
          ]}>
          <Text style={styles.questionnaireDataSecondary}>
            Keterangan Ayah Pemohon (Opsional)
          </Text>
          <TextInputComponent
            title="Nama Ayah"
            placeholder="Masukkan nama lengkap ayah"
          />
          <TextInputComponent
            title="Kewarganegaraan Ayah"
            placeholder="Pilih kewarganegaraan ayah"
            isDropdown
            dropdownItemData={nationalityData}
          />
          <TextInputComponent
            title="Alamat Ayah"
            placeholder="Masukkan alamat ayah"
            supportText="0/100 karakter"
            containerHeight={90}
            isMultiline
          />
        </View>

        <View
          style={[
            styles.subStepQuestionnaireOptionContainer,
            {marginBottom: 32},
          ]}>
          <Text style={styles.questionnaireDataSecondary}>
            Keterangan Pasangan Pemohon (Opsional)
          </Text>
          <TextInputComponent
            title="Nama Pasangan"
            placeholder="Masukkan nama lengkap pasangan"
          />
          <TextInputComponent
            title="Kewarganegaraan Pasangan"
            placeholder="Pilih kewarganegaraan pasangan"
            isDropdown
            dropdownItemData={nationalityData}
          />
          <TextInputComponent
            title="Alamat Pasangan"
            placeholder="Masukkan alamat pasangan"
            supportText="0/100 karakter"
            containerHeight={90}
            isMultiline
          />
        </View>

        <Button
          mode="contained"
          onPress={handleSaveDraft}
          style={[styles.subStepButtonContained, {marginBottom: 8}]}
          textColor={Colors.neutral100.color}>
          Simpan Draft
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step4ApplicantAdditionalDataSubStep2;
