import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import {Button} from 'react-native-paper';
import Colors from '../../../../../assets/styles/Colors';
import jobData from '../../../../data/DropdownData/JobData';
import nationalityData from '../../../../data/DropdownData/NationalityData';
import {PassportAppointment} from '../../../../navigation/type';
import {
  addData,
  getData,
  storeData,
} from '../../../../helper/asyncStorageHelper';

const Step4DataConfirmationSubStep2 = ({
  setStep,
  setSubStep,
}: {
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
}) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          onPress={() => {
            setStep(4);
            setSubStep(1);
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
          />
          <TextInputComponent
            title="Nomor Telepon"
            placeholder="Contoh: 08513456789"
            isRequired
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
          />
          <TextInputComponent
            title="Kewarganegaraan Ibu"
            placeholder="Pilih kewarganegaraan ibu"
            isRequired
            isDropdown
            dropdownItemData={nationalityData}
          />
          <TextInputComponent
            title="Alamat Ibu"
            placeholder="Masukkan alamat ibu"
            isRequired
            supportText="0/100 karakter"
            containerHeight={90}
            isMultiline
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
          onPress={async () => {
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
            setStep(5);
          }}
          style={[styles.subStepButtonContained, {marginBottom: 8}]}
          textColor={Colors.neutral100.color}>
          Simpan Draft
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step4DataConfirmationSubStep2;
