import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../assets/styles/Colors';
import RadioButtonOptionComponent from '../../components/RadioButtonOption';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Checkbox, PaperProvider} from 'react-native-paper';
import StepIndicator from '../../components/StepIndicator';
import TextInputComponent from '../../components/TextInput';
import genderData from '../../data/DropdownData/GenderData';
import civilStatusData from '../../data/DropdownData/CivilStatus';
import DialogApplicationPassport from '../../components/dialog/DialogApplicationPassport';
import DialogDontHaveYetPassport from '../../components/dialog/DialogDontHaveYetPassport';
import DialogPassportInfo from '../../components/dialog/DialogPassportInfo';
import DialogLostOrDamagedPassport from '../../components/dialog/DialogLostOrDamagedPassport';
import destinationCountryData from '../../data/DropdownData/DestinationCountryData';
import familyRelationshipData from '../../data/DropdownData/FamilyRelationshipData';
import FontFamily from '../../../assets/styles/FontFamily';
import provinceData from '../../data/DropdownData/ProvinceData';
import cityData from '../../data/DropdownData/CityData';
import districtData from '../../data/DropdownData/DistrictData';
import postalCodeData from '../../data/DropdownData/PostalCodeData';
import passportAppointmentData from '../../data/History/PassportAppointmentData';

type RegularPassportScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RegularPassport'
>;

const options = [
  {
    label: 'Dewasa',
    description: 'WNI berusia di atas 17 tahun atau sudah menikah',
    value: 'adult',
  },
  {
    label: 'Anak',
    description: 'WNI berusia di bawah 17 tahun dan belum menikah',
    value: 'child',
  },
];

const hasHadPassportBeforeOptions = [
  {
    label: 'Belum',
    description:
      'Belum pernah memiliki paspor atau belum pernah mengajukan permohonan paspor',
    value: 'not_yet',
  },
  {
    label: 'Sudah',
    description: '',
    value: 'already',
  },
];

const previousPassportConditionOptions = [
  {
    label: 'Habis masa berlaku',
    description: 'null',
    value: 'expired',
  },
  {
    label: 'Penuh/Halaman Penuh',
    description: 'null',
    value: 'full_pages',
  },
  {
    label: 'Hilang',
    description: 'null',
    value: 'lost',
  },
  {
    label: 'Rusak',
    description: 'null',
    value: 'damaged',
  },
  {
    label: 'Hilang karena keadaan kahar',
    description: 'null',
    value: 'lost_due_to_force_majeure',
  },
  {
    label: 'Rusak karena keadaan kahar',
    description: 'null',
    value: 'damaged_due_to_force_majeure',
  },
];

const passportApplicationPurposeOptions = [
  {
    label: 'Wisata',
    description: 'null',
    value: 'tourism',
  },
  {
    label: 'Umroh',
    description: 'null',
    value: 'umrah',
  },
  {
    label: 'Haji',
    description: 'null',
    value: 'hajj',
  },
  {
    label: 'Bekerja Formal',
    description: 'null',
    value: 'formal_work',
  },
  {
    label: 'Pekerja Imigran Indonesia (PMI)',
    description: 'null',
    value: 'indonesian_migrant_worker',
  },
  {
    label: 'Belajar',
    description: 'null',
    value: 'study',
  },
  {
    label: 'Berobat',
    description: 'null',
    value: 'medical',
  },
];

const destinationCountryOptions = [
  {
    label: 'Saya belum memiliki negara tujuan',
    description: 'null',
    value: 'destination_country_not_set',
  },
];

const durationAbroadOptions = [
  {
    label: '< 1 Bulan',
    description: 'null',
    value: 'less_than_1_month',
  },
  {
    label: '< 6 Bulan',
    description: 'null',
    value: 'less_than_6_months',
  },
  {
    label: '< 1 Tahun',
    description: 'null',
    value: 'less_than_1_year',
  },
  {
    label: '< 5 Tahun',
    description: 'null',
    value: 'less_than_5_years',
  },
  {
    label: '> 5 Tahun',
    description: 'null',
    value: 'more_than_5_years',
  },
];

const familyContactNumberInDestinationCountryOptions = [
  {
    label: 'Saya tidak memiliki keluarga/kerabat di negara tujuan',
    description: 'null',
    value: 'no_family_in_destination_country',
  },
];

const renderApplicationStepsContent = (
  step: number,
  subStep: number,
  setStep: (step: number) => void,
  setSubStep: (step: number) => void,
  selectedOption: string,
  setSelectedOption: (val: string) => void,
  checkedOption: boolean,
  setCheckedOption: React.Dispatch<React.SetStateAction<boolean>>,
  showDontHaveYetDialog: () => void,
  showPassportInfoDialog: () => void,
  showLostOrDamagedPassportDialog: () => void,
) => {
  const lastAppointment =
    passportAppointmentData[passportAppointmentData.length - 1];

  if (step === 1) {
    switch (subStep) {
      case 1:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <View style={styles.subStepTextWrapper}>
                <Text style={styles.subStepTitle}>
                  Ambil/Upload Foto KTP Anda
                </Text>
                <Text style={styles.subStepDesc}>
                  Pastikan pencahayaan cukup, tulisan pada identitas terlihat
                  jelas, dan jangan gunakan foto dari Live Mode sebelum
                  melanjutkan.
                </Text>
              </View>
              <View style={styles.documentImage}>
                <Text style={styles.documentImageSupportText}>Foto KTP</Text>
                <View
                  style={[
                    styles.documentImageCropped,
                    {backgroundColor: Colors.neutral100.color},
                  ]}
                />
              </View>
              <View style={styles.subStepButtonContainer}>
                <Button
                  mode="contained"
                  onPress={() => setSubStep(2)}
                  style={styles.subStepButtonContained}
                  textColor={Colors.neutral100.color}>
                  Ambil Foto
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => {}}
                  style={styles.subStepButtonOutlined}
                  textColor={Colors.primary30.color}>
                  Upload Galeri
                </Button>
              </View>
            </View>
          </ScrollView>
        );
      case 2:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <View style={styles.subStepTextWrapper}>
                <Text style={styles.subStepTitle}>
                  Ambil/Upload Foto KTP Anda
                </Text>
                <Text style={styles.subStepDesc}>
                  Pastikan pencahayaan cukup, tulisan pada identitas terlihat
                  jelas, dan jangan gunakan foto dari Live Mode sebelum
                  melanjutkan.
                </Text>
              </View>
              <View style={styles.documentImage} />
              <View style={styles.subStepButtonContainer}>
                <Button
                  mode="contained"
                  onPress={() => setSubStep(3)}
                  style={styles.subStepButtonContained}
                  textColor={Colors.neutral100.color}>
                  Pilih Foto
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => setSubStep(1)}
                  style={styles.subStepButtonOutlined}
                  textColor={Colors.primary30.color}>
                  Ulangi
                </Button>
              </View>
            </View>
          </ScrollView>
        );
      case 3:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <View style={styles.documentImageContainer}>
                <View style={styles.documentImageCropped} />
              </View>
              <View
                style={[styles.subStepTextInputContainer, {marginBottom: 24}]}>
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
      default:
        return null;
    }
  }

  if (step === 2) {
    switch (subStep) {
      case 1:
        return (
          <View style={styles.subStepContainer}>
            <Pressable
              onPress={() => {
                setStep(1);
                setSubStep(3);
              }}
              style={({pressed}) => [
                styles.subStepButtonBackWrapper,
                {
                  transform: [{scale: pressed ? 0.99 : 1}],
                },
              ]}>
              <Icon name="chevron-left" size={24} />
              <Text style={styles.subStepButtonBackText}>Kembali</Text>
            </Pressable>
            <View style={styles.subStepQuestionnaireOptionContainer}>
              <Text style={styles.questionnaireData}>
                Apakah Anda sudah pernah memiliki paspor?
              </Text>
              {hasHadPassportBeforeOptions.map(options => (
                <RadioButtonOptionComponent
                  key={options.value}
                  label={options.label}
                  description={options.description}
                  value={options.value}
                  selectedValue={selectedOption}
                  onSelect={value => {
                    setSelectedOption(value);
                    value === 'already'
                      ? setSubStep(2)
                      : showDontHaveYetDialog();
                  }}
                />
              ))}
            </View>
          </View>
        );
      case 2:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setSubStep(1);
                }}
                style={({pressed}) => [
                  styles.subStepButtonBackWrapper,
                  {
                    transform: [{scale: pressed ? 0.99 : 1}],
                  },
                ]}>
                <Icon name="chevron-left" size={24} />
                <Text style={styles.subStepButtonBackText}>Kembali</Text>
              </Pressable>
              <View style={styles.subStepQuestionnaireOptionContainer}>
                <Text style={styles.questionnaireData}>
                  Bagaimana kondisi paspor lama Anda?
                </Text>
                <Pressable
                  onPress={() => showPassportInfoDialog()}
                  style={({pressed}) => [
                    styles.subStepButtonBackWrapper,
                    {
                      transform: [{scale: pressed ? 0.99 : 1}],
                    },
                  ]}>
                  <Icon
                    name="alert-circle-outline"
                    size={18}
                    color={Colors.secondary30.color}
                  />
                  <Text
                    style={[
                      styles.subStepButtonBackText,
                      {color: Colors.secondary30.color},
                    ]}>
                    Klik di sini untuk melihat informasi kondisi paspor
                  </Text>
                </Pressable>
                {previousPassportConditionOptions.map(options => (
                  <RadioButtonOptionComponent
                    key={options.value}
                    label={options.label}
                    description={options.description}
                    value={options.value}
                    selectedValue={selectedOption}
                    onSelect={value => {
                      setSelectedOption(value);
                    }}
                  />
                ))}
              </View>
              <Button
                mode="contained"
                onPress={() => {
                  (selectedOption === 'expired' ||
                    selectedOption === 'full_pages') &&
                    setSubStep(3);
                  (selectedOption === 'lost' ||
                    selectedOption === 'damaged' ||
                    selectedOption === 'lost_due_to_force_majeure' ||
                    selectedOption === 'damaged_due_to_force_majeure') &&
                    showLostOrDamagedPassportDialog();
                }}
                style={styles.subStepButtonContained}
                textColor={Colors.neutral100.color}>
                Lanjut
              </Button>
            </View>
          </ScrollView>
        );
      case 3:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setSubStep(2);
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
              <View style={styles.subStepTextWrapper}>
                <Text style={styles.subStepTitle}>
                  Ambil/Upload Foto Paspor Lama Anda (Halaman 2 Paspor)
                </Text>
                <Text style={styles.subStepDesc}>
                  Pastikan pencahayaan cukup, tulisan pada identitas terlihat
                  jelas, dan jangan gunakan foto dari Live Mode sebelum
                  melanjutkan.
                </Text>
              </View>
              <View style={styles.documentImage}>
                <Text style={styles.documentImageSupportText}>
                  Foto Halaman 2 Paspor Lama
                </Text>
                <View
                  style={[
                    styles.documentImageCropped,
                    {backgroundColor: Colors.neutral100.color},
                  ]}
                />
              </View>
              <View style={styles.subStepButtonContainer}>
                <Button
                  mode="contained"
                  onPress={() => setSubStep(4)}
                  style={styles.subStepButtonContained}
                  textColor={Colors.neutral100.color}>
                  Ambil Foto
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => {}}
                  style={styles.subStepButtonOutlined}
                  textColor={Colors.primary30.color}>
                  Upload Galeri
                </Button>
              </View>
            </View>
          </ScrollView>
        );
      case 4:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setSubStep(3);
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
              <View style={styles.subStepTextWrapper}>
                <Text style={styles.subStepTitle}>
                  Ambil/Upload Foto Paspor Lama Anda (Halaman 2 Paspor)
                </Text>
                <Text style={styles.subStepDesc}>
                  Pastikan pencahayaan cukup, tulisan pada identitas terlihat
                  jelas, dan jangan gunakan foto dari Live Mode sebelum
                  melanjutkan.
                </Text>
              </View>
              <View style={styles.documentImage} />
              <View style={styles.subStepButtonContainer}>
                <Button
                  mode="contained"
                  onPress={() => setSubStep(5)}
                  style={styles.subStepButtonContained}
                  textColor={Colors.neutral100.color}>
                  Pilih Foto
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => setSubStep(3)}
                  style={styles.subStepButtonOutlined}
                  textColor={Colors.primary30.color}>
                  Ulangi
                </Button>
              </View>
            </View>
          </ScrollView>
        );
      case 5:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setSubStep(4);
                }}
                style={({pressed}) => [
                  styles.subStepButtonBackWrapper,
                  {
                    transform: [{scale: pressed ? 0.99 : 1}],
                  },
                ]}>
                <Icon name="chevron-left" size={24} />
                <Text style={styles.subStepButtonBackText}>Kembali</Text>
              </Pressable>
              <View style={styles.subStepQuestionnaireOptionContainer}>
                <TextInputComponent
                  title="Nomor paspor lama Anda"
                  placeholder="Masukkan nomor paspor lama Anda"
                />
                <View>
                  <View style={styles.textInputBulletTextWrapper}>
                    <Text style={styles.textInputSupportText}>•</Text>
                    <Text style={styles.textInputSupportText}>
                      Nomor paspor lama minimal 7 karakter
                    </Text>
                  </View>
                  <View style={styles.textInputBulletTextWrapper}>
                    <Text style={styles.textInputSupportText}>•</Text>
                    <Text style={styles.textInputSupportText}>
                      Tulis nomor paspor tanpa menggunakan spasi. Contoh:
                      B12345678
                    </Text>
                  </View>
                </View>
              </View>
              <Button
                mode="contained"
                onPress={() => setSubStep(6)}
                style={styles.subStepButtonContained}
                textColor={Colors.neutral100.color}>
                Lanjut
              </Button>
            </View>
          </ScrollView>
        );
      case 6:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setSubStep(5);
                }}
                style={({pressed}) => [
                  styles.subStepButtonBackWrapper,
                  {
                    transform: [{scale: pressed ? 0.99 : 1}],
                  },
                ]}>
                <Icon name="chevron-left" size={24} />
                <Text style={styles.subStepButtonBackText}>Kembali</Text>
              </Pressable>
              <View style={styles.subStepQuestionnaireOptionContainer}>
                <Text style={styles.questionnaireData}>
                  Apakah tujuan Anda membuat paspor?
                </Text>
                {passportApplicationPurposeOptions.map(options => (
                  <RadioButtonOptionComponent
                    key={options.value}
                    label={options.label}
                    description={options.description}
                    value={options.value}
                    selectedValue={selectedOption}
                    onSelect={value => {
                      setSelectedOption(value);
                    }}
                  />
                ))}
              </View>
              <Button
                mode="contained"
                onPress={() => setSubStep(7)}
                style={styles.subStepButtonContained}
                textColor={Colors.neutral100.color}>
                Lanjut
              </Button>
            </View>
          </ScrollView>
        );
      case 7:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setSubStep(6);
                }}
                style={({pressed}) => [
                  styles.subStepButtonBackWrapper,
                  {
                    transform: [{scale: pressed ? 0.99 : 1}],
                  },
                ]}>
                <Icon name="chevron-left" size={24} />
                <Text style={styles.subStepButtonBackText}>Kembali</Text>
              </Pressable>
              <View style={styles.subStepQuestionnaireOptionContainer}>
                <TextInputComponent
                  title="Negara mana yang akan Anda tuju?"
                  placeholder="Masukkan negara tujuan"
                  isDropdown
                  dropdownItemData={destinationCountryData}
                />
                {destinationCountryOptions.map(options => (
                  <RadioButtonOptionComponent
                    key={options.value}
                    label={options.label}
                    description={options.description}
                    value={options.value}
                    selectedValue={selectedOption}
                    onSelect={value => {
                      setSelectedOption(value);
                    }}
                  />
                ))}
              </View>
              <Button
                mode="contained"
                onPress={() => setSubStep(8)}
                style={styles.subStepButtonContained}
                textColor={Colors.neutral100.color}>
                Lanjut
              </Button>
            </View>
          </ScrollView>
        );
      case 8:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setSubStep(7);
                }}
                style={({pressed}) => [
                  styles.subStepButtonBackWrapper,
                  {
                    transform: [{scale: pressed ? 0.99 : 1}],
                  },
                ]}>
                <Icon name="chevron-left" size={24} />
                <Text style={styles.subStepButtonBackText}>Kembali</Text>
              </Pressable>
              <View style={styles.subStepQuestionnaireOptionContainer}>
                <TextInputComponent
                  title="Di mana tempat tinggal Anda di negara tujuan?"
                  placeholder="Masukkan alamat"
                  supportText="0/100 karakter"
                  containerHeight={90}
                  isMultiline
                />
              </View>
              <Button
                mode="contained"
                onPress={() => setSubStep(9)}
                style={styles.subStepButtonContained}
                textColor={Colors.neutral100.color}>
                Lanjut
              </Button>
            </View>
          </ScrollView>
        );
      case 9:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setSubStep(8);
                }}
                style={({pressed}) => [
                  styles.subStepButtonBackWrapper,
                  {
                    transform: [{scale: pressed ? 0.99 : 1}],
                  },
                ]}>
                <Icon name="chevron-left" size={24} />
                <Text style={styles.subStepButtonBackText}>Kembali</Text>
              </Pressable>
              <View style={styles.subStepQuestionnaireOptionContainer}>
                <Text style={styles.questionnaireData}>
                  Berapa lama Anda berencana berada di luar negeri?
                </Text>
                {durationAbroadOptions.map(options => (
                  <RadioButtonOptionComponent
                    key={options.value}
                    label={options.label}
                    description={options.description}
                    value={options.value}
                    selectedValue={selectedOption}
                    onSelect={value => setSelectedOption(value)}
                  />
                ))}
              </View>
              <Button
                mode="contained"
                onPress={() => setSubStep(10)}
                style={styles.subStepButtonContained}
                textColor={Colors.neutral100.color}>
                Lanjut
              </Button>
            </View>
          </ScrollView>
        );
      case 10:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setSubStep(9);
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
                  Nomor telepon keluarga/kerabat terdekat Anda di Indonesia yang
                  dapat dihubungi
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
                onPress={() => setSubStep(11)}
                style={styles.subStepButtonContained}
                textColor={Colors.neutral100.color}>
                Lanjut
              </Button>
            </View>
          </ScrollView>
        );
      case 11:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setSubStep(10);
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
                <View style={{gap: 4}}>
                  <Text style={styles.questionnaireData}>
                    Nomor telepon keluarga/kerabat di negara tujuan
                  </Text>
                  <Text
                    style={[
                      styles.questionnaireData,
                      {...FontFamily.notoSansRegular},
                    ]}>
                    (Opsional)
                  </Text>
                </View>
                <TextInputComponent
                  title="Nama Kerabat"
                  placeholder="Masukkan Nama Kerabat Anda"
                />
                <TextInputComponent
                  title="Nomor Telepon"
                  placeholder="Contoh: 08513456789"
                />
                <TextInputComponent
                  title="Keterangan Hubungan Keluarga"
                  placeholder="Pilih Hubungan"
                  isDropdown
                  dropdownItemData={familyRelationshipData}
                />
                {familyContactNumberInDestinationCountryOptions.map(options => (
                  <RadioButtonOptionComponent
                    key={options.value}
                    label={options.label}
                    description={options.description}
                    value={options.value}
                    selectedValue={selectedOption}
                    onSelect={value => {
                      setSelectedOption(value);
                    }}
                  />
                ))}
              </View>
              <Button
                mode="contained"
                onPress={() => {
                  setStep(3), setSubStep(1);
                }}
                style={styles.subStepButtonContained}
                textColor={Colors.neutral100.color}>
                Lanjut
              </Button>
            </View>
          </ScrollView>
        );
      default:
        return null;
    }
  }

  if (step === 4) {
    switch (subStep) {
      case 1:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <Pressable
                onPress={() => {
                  setStep(3);
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
                Data di bawah ini harus sesuai dengan keterangan pada KTP
                pemohon. Data yang bertanda (
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
                  <Text style={styles.subStepDesc}>
                    Alamat sekarang sesuai KTP
                  </Text>
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
                  setStep(4), setSubStep(2);
                }}
                style={[styles.subStepButtonContained, {marginBottom: 8}]}
                textColor={Colors.neutral100.color}>
                Lanjut
              </Button>
            </View>
          </ScrollView>
        );
      case 2:
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
                Data di bawah ini harus sesuai dengan keterangan pada KTP
                pemohon. Data yang bertanda (
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
                onPress={() => setStep(5)}
                style={[styles.subStepButtonContained, {marginBottom: 8}]}
                textColor={Colors.neutral100.color}>
                Simpan Draft
              </Button>
            </View>
          </ScrollView>
        );
    }
  }
  switch (step) {
    case 3:
      return (
        <ScrollView>
          <View style={styles.subStepContainer}>
            <Pressable
              onPress={() => {
                setStep(2);
                setSubStep(11);
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
            <View style={{marginBottom: 16, gap: 4}}>
              <Text style={styles.subStepDesc}>
                Layanan yang cocok untuk Anda adalah{' '}
                <Text style={{...FontFamily.notoSansBold}}>
                  Paspor Penggantian
                </Text>
                . Silakan unggah kelengkapan dokumen berikut.
              </Text>
              <View>
                <View style={styles.textInputBulletTextWrapper}>
                  <Text
                    style={[
                      styles.subStepDesc,
                      {fontSize: 10, ...FontFamily.notoSansBold},
                    ]}>
                    •
                  </Text>
                  <Text
                    style={[
                      styles.subStepDesc,
                      {fontSize: 10, ...FontFamily.notoSansBold},
                    ]}>
                    Unggah dokumen hanya bisa berbentuk JPG.{' '}
                  </Text>
                </View>
                <View style={styles.textInputBulletTextWrapper}>
                  <Text
                    style={[
                      styles.subStepDesc,
                      {fontSize: 10, ...FontFamily.notoSansBold},
                    ]}>
                    •
                  </Text>
                  <Text
                    style={[
                      styles.subStepDesc,
                      {fontSize: 10, ...FontFamily.notoSansBold},
                    ]}>
                    Data yang bertanda (
                    <Text style={{color: Colors.indicatorRed.color}}>*</Text>)
                    wajib diisi.
                  </Text>
                </View>
              </View>
            </View>
            <View style={{marginBottom: 16, gap: 16}}>
              <TextInputComponent
                title="Nama Pemohon"
                placeholder="Salwa Aisyah Adhani"
                isRequired
                isDisabled
              />
              <TextInputComponent
                title="Tempat Lahir"
                placeholder="Masukkan tempat lahir Anda"
                isRequired
              />
              <View style={styles.subStepTextInputRowContainer}>
                <View style={styles.subStepTextInputFlex}>
                  <TextInputComponent
                    title="Tanggal Lahir"
                    placeholder="22/02/2002"
                    isRequired
                    isDate
                    isDisabled
                  />
                </View>
                <View style={styles.subStepTextInputFlex}>
                  <TextInputComponent
                    title="Jenis Kelamin"
                    placeholder="Wanita"
                    isRequired
                    isDropdown
                    isDisabled
                    dropdownItemData={genderData}
                  />
                </View>
              </View>
            </View>
            <View style={styles.subStepSectionButtonContainer}>
              <View>
                <Text style={styles.subStepSectionButtonTextTitle}>
                  e-KTP{' '}
                  <Text style={{color: Colors.indicatorRed.color}}>*</Text>
                </Text>
                <View style={styles.sectionButtonWrapper}>
                  <Button
                    icon="camera-outline"
                    mode="contained"
                    style={styles.buttonContainedSecondary}
                    textColor={Colors.neutral100.color}
                    labelStyle={{fontSize: 12}}>
                    Foto Dokumen
                  </Button>
                  <Button
                    icon="tray-arrow-up"
                    mode="contained"
                    style={styles.buttonContainedSecondary}
                    textColor={Colors.neutral100.color}
                    labelStyle={{fontSize: 12}}>
                    Unggah Dokumen
                  </Button>
                </View>
              </View>
              <View>
                <Text style={styles.subStepSectionButtonTextTitle}>
                  Kartu Keluarga
                </Text>
                <View style={styles.sectionButtonWrapper}>
                  <Button
                    icon="camera-outline"
                    mode="contained"
                    style={styles.buttonContainedSecondary}
                    textColor={Colors.neutral100.color}
                    labelStyle={{fontSize: 12}}>
                    Foto Dokumen
                  </Button>
                  <Button
                    icon="tray-arrow-up"
                    mode="contained"
                    style={styles.buttonContainedSecondary}
                    textColor={Colors.neutral100.color}
                    labelStyle={{fontSize: 12}}>
                    Unggah Dokumen
                  </Button>
                </View>
              </View>
              <View>
                <View style={styles.subStepSectionButtonTextWrapper}>
                  <Text style={styles.subStepSectionButtonTextTitle}>
                    Akta kelahiran/ijazah/akta perkawinan/buku nikah/surat
                    baptis
                  </Text>
                  <Icon
                    name="information"
                    size={24}
                    color={Colors.primary30.color}
                  />
                </View>
                <View style={styles.sectionButtonWrapper}>
                  <Button
                    icon="camera-outline"
                    mode="contained"
                    style={styles.buttonContainedSecondary}
                    textColor={Colors.neutral100.color}
                    labelStyle={{fontSize: 12}}>
                    Foto Dokumen
                  </Button>
                  <Button
                    icon="tray-arrow-up"
                    mode="contained"
                    style={styles.buttonContainedSecondary}
                    textColor={Colors.neutral100.color}
                    labelStyle={{fontSize: 12}}>
                    Unggah Dokumen
                  </Button>
                </View>
              </View>
              <View>
                <Text style={styles.subStepSectionButtonTextTitle}>
                  Paspor Lama{' '}
                  <Text style={{color: Colors.indicatorRed.color}}>*</Text>
                </Text>
                <View style={styles.sectionButtonWrapper}>
                  <Button
                    icon="camera-outline"
                    mode="contained"
                    style={styles.buttonContainedSecondary}
                    textColor={Colors.neutral100.color}
                    labelStyle={{fontSize: 12}}>
                    Foto Dokumen
                  </Button>
                  <Button
                    icon="tray-arrow-up"
                    mode="contained"
                    style={styles.buttonContainedSecondary}
                    textColor={Colors.neutral100.color}
                    labelStyle={{fontSize: 12}}>
                    Unggah Dokumen
                  </Button>
                </View>
              </View>
            </View>
            <Button
              mode="contained"
              onPress={() => {
                setStep(4), setSubStep(1);
              }}
              style={styles.subStepButtonContained}
              textColor={Colors.neutral100.color}>
              Lanjut
            </Button>
          </View>
        </ScrollView>
      );
    case 5:
      return (
        <View style={styles.subStepContainer}>
          <Text style={styles.subStepDesc}>
            Data pemohon berikut tidak akan terhapus dan sudah tersimpan di
            beranda. Silakan lanjut untuk memilih jenis paspor, lokasi dan
            jadwal pengambilan, serta pembayaran.
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
              <View style={styles.applicantDetailTextContentWrapper}>
                <Text style={styles.applicantDetailTextTitle}>NIK</Text>
                <Text style={styles.applicantDetailTextDesc}>
                  {lastAppointment.applicationDetails.nationalIdNumber}
                </Text>
              </View>
              <View style={styles.applicantDetailTextContentWrapper}>
                <Text style={styles.applicantDetailTextTitle}>
                  Jenis Kelamin
                </Text>
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
                <Text style={styles.applicantDetailTextTitle}>
                  Jenis Paspor
                </Text>
                <Text style={styles.applicantDetailTextDesc}>
                  {lastAppointment.applicationDetails.passportType}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.subStepButtonContainer, {marginTop: 12}]}>
            <Button
              mode="contained"
              onPress={() => {
                setStep(6);
              }}
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
    case 6:
      return (
        <View>
          <Button mode="contained" onPress={() => setStep(7)}>
            Next
          </Button>
          <Button onPress={() => setStep(5)}>Back</Button>
        </View>
      );
    case 7:
      return (
        <View>
          <Button onPress={() => setStep(6)}>Back</Button>
        </View>
      );
    default:
      return null;
  }
};

function RegularPassportScreen() {
  const navigation = useNavigation<RegularPassportScreenNavigationProp>();
  const [selectedOption, setSelectedOption] = useState('');
  const [checkedOption, setCheckedOption] = useState(false);

  const [showApplicationStepsContent, setShowApplicationStepsContent] =
    useState(false);

  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);

  const [visible, setVisible] = useState(false);
  const [visibleDontHaveYetDialog, setVisibleDontHaveYetDialog] =
    useState(false);
  const [visiblePassportInfoDialog, setVisiblePassportInfoDialog] =
    useState(false);
  const [
    visibleLostOrDamagedPassportDialog,
    setVisibleLostOrDamagedPassportDialog,
  ] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const showDontHaveYetDialog = () => setVisibleDontHaveYetDialog(true);
  const hideDontHaveYetDialog = () => setVisibleDontHaveYetDialog(false);

  const showPassportInfoDialog = () => setVisiblePassportInfoDialog(true);
  const hidePassportInfoDialog = () => setVisiblePassportInfoDialog(false);

  const showVisibleLostOrDamagedPassportDialog = () =>
    setVisibleLostOrDamagedPassportDialog(true);
  const hideVisibleLostOrDamagedPassportDialog = () =>
    setVisibleLostOrDamagedPassportDialog(false);

  const completedSteps = [...Array(step - 1)].map((_, i) => i + 1);

  const stepTitles: {[key: number]: string} = {
    1: 'Informasi Pribadi',
    2: 'Dokumen Pendukung',
    3: 'Pembayaran',
    4: 'Konfirmasi Data',
    5: 'Verifikasi',
    6: 'Pemrosesan',
    7: 'Selesai',
  };

  useEffect(() => {
    if (showApplicationStepsContent) {
      const backAction = () => {
        setShowApplicationStepsContent(false);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }
  }, [showApplicationStepsContent]);

  return (
    <View style={styles.container}>
      <PaperProvider>
        <StatusBar
          backgroundColor={
            visible ||
            visibleDontHaveYetDialog ||
            visiblePassportInfoDialog ||
            visibleLostOrDamagedPassportDialog
              ? '#295E70'
              : Colors.secondary30.color
          }
          barStyle="light-content"
        />
        <View style={styles.appBarContainer}>
          <Icon
            name="arrow-left"
            size={24}
            style={styles.appBarIcon}
            color={Colors.neutral100.color}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.appBarTitle}>Pengajuan Paspor Regular</Text>
        </View>
        {showApplicationStepsContent ? (
          <>
            <View style={styles.applicationStepsContainer}>
              <Text style={styles.stepTitle}>{stepTitles[step]}</Text>
              <StepIndicator
                currentStep={step}
                totalSteps={7}
                completedSteps={completedSteps}
              />
              {renderApplicationStepsContent(
                step,
                subStep,
                setStep,
                setSubStep,
                selectedOption,
                setSelectedOption,
                checkedOption,
                setCheckedOption,
                showDontHaveYetDialog,
                showPassportInfoDialog,
                showVisibleLostOrDamagedPassportDialog,
              )}
            </View>
            {visibleDontHaveYetDialog && (
              <DialogDontHaveYetPassport
                visible={visibleDontHaveYetDialog}
                onClose={hideDontHaveYetDialog}
                onContinue={() => setSubStep(2)}
              />
            )}
            {visiblePassportInfoDialog && (
              <DialogPassportInfo
                visible={visiblePassportInfoDialog}
                onClose={hidePassportInfoDialog}
              />
            )}
            {visibleLostOrDamagedPassportDialog && (
              <DialogLostOrDamagedPassport
                visible={visibleLostOrDamagedPassportDialog}
                onBackToHome={() => {
                  navigation.goBack();
                }}
                onBackToFirstStep={() => {
                  setShowApplicationStepsContent(false);
                  setStep(1);
                  setSubStep(1);
                  hideVisibleLostOrDamagedPassportDialog();
                }}
              />
            )}
          </>
        ) : (
          <>
            <Text style={styles.questionnaireTitle}>
              Kuesioner Layanan Permohonan
            </Text>
            <View style={styles.questionnaireOptionContainer}>
              <Text style={styles.questionnaireData}>
                Untuk siapa paspor ini?
              </Text>
              {options.map(option => (
                <RadioButtonOptionComponent
                  key={option.value}
                  label={option.label}
                  description={option.description}
                  value={option.value}
                  selectedValue={selectedOption}
                  onSelect={value => {
                    setSelectedOption(value);
                    value === 'child'
                      ? showDialog()
                      : setShowApplicationStepsContent(true);
                  }}
                />
              ))}
            </View>
            <DialogApplicationPassport
              visible={visible}
              onClose={hideDialog}
              onContinue={() => {
                hideDialog();
                setShowApplicationStepsContent(true);
              }}
            />
          </>
        )}
      </PaperProvider>
    </View>
  );
}

export default RegularPassportScreen;
