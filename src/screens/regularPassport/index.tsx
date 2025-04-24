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
import {Button, PaperProvider} from 'react-native-paper';
import StepIndicator from '../../components/StepIndicator';
import TextInputComponent from '../../components/TextInput';
import genderData from '../../data/DropdownData/GenderData';
import DialogApplicationPassport from '../../components/dialog/DialogApplicationPassport';
import DialogDontHaveYetPassport from '../../components/dialog/DialogDontHaveYetPassport';
import DialogPassportInfo from '../../components/dialog/DialogPassportInfo';
import DialogLostOrDamagedPassport from '../../components/dialog/DialogLostOrDamagedPassport';
import destinationCountryData from '../../data/DropdownData/DestinationCountryData';
import familyRelationshipData from '../../data/DropdownData/FamilyRelationshipData';
import FontFamily from '../../../assets/styles/FontFamily';
import passportAppointmentData from '../../data/History/PassportAppointmentData';
import Step7Completion from './steps/Step7Completion/Step7Completion';
import Step6Processing from './steps/Step6Processing/Step6Processing';
import Step5Verification from './steps/Step5Verification/Step5Verification';
import Step3Payment from './steps/Step3Payment/Step3Payment';

// Data
import civilStatusData from '../../data/DropdownData/CivilStatusData';
import arrivalDateGuidelinesData from '../../data/Steps/ArrivalDateGuidelinesData';

// Options Data
import passportForOptions from '../../data/Options/PassportForOptions';
import hasHadPassportBeforeOptions from '../../data/Options/HasHadPassportBeforeOptions';
import previousPassportConditionOptions from '../../data/Options/PreviousPassportConditionOptions';
import passportApplicationPurposeOptions from '../../data/Options/PassportApplicationPurposeOptions';
import destinationCountryOptions from '../../data/Options/destinationCountryOptions';
import durationAbroadOptions from '../../data/Options/DurationAbroadOptions';
import destinationFamilyContactOptions from '../../data/Options/DestinationFamilyContactOptions';
import Step4DataConfirmationSubStep2 from './steps/Step4DataConfirmation/Step4DataConfirmationSubStep2';
import Step4DataConfirmationSubStep1 from './steps/Step4DataConfirmation/Step4DataConfirmationSubStep1';

type RegularPassportScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RegularPassport'
>;

type RenderApplicationStepsContentProps = {
  step: number;
  subStep: number;
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
  selectedOption: string;
  setSelectedOption: (val: string) => void;
  checkedOption: boolean;
  setCheckedOption: React.Dispatch<React.SetStateAction<boolean>>;
  showDontHaveYetDialog: () => void;
  showPassportInfoDialog: () => void;
  showLostOrDamagedPassportDialog: () => void;
};

const RenderApplicationStepsContent = (
  props: RenderApplicationStepsContentProps,
) => {
  const {
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
    showLostOrDamagedPassportDialog,
  } = props;

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
                {destinationFamilyContactOptions.map(options => (
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
          <Step4DataConfirmationSubStep1
            setStep={setStep}
            setSubStep={setSubStep}
            checkedOption={checkedOption}
            setCheckedOption={setCheckedOption}
          />
        );
      case 2:
        return (
          <Step4DataConfirmationSubStep2
            setStep={setStep}
            setSubStep={setSubStep}
          />
        );
    }
  }
  switch (step) {
    case 3:
      return <Step3Payment setStep={setStep} setSubStep={setSubStep} />;
    case 5:
      return (
        <Step5Verification
          setStep={setStep}
          setSubStep={setSubStep}
          passportAppointmentData={passportAppointmentData}
        />
      );
    case 6:
      return (
        <Step6Processing
          setStep={setStep}
          arrivalDateGuidelines={arrivalDateGuidelinesData}
        />
      );
    case 7:
      return <Step7Completion setStep={setStep} />;
    default:
      return null;
  }
};

const AppBar = ({onBackPress}: {onBackPress: () => void}) => (
  <View style={styles.appBarContainer}>
    <Icon
      name="arrow-left"
      size={24}
      style={styles.appBarIcon}
      color={Colors.neutral100.color}
      onPress={onBackPress}
    />
    <Text style={styles.appBarTitle}>Pengajuan Paspor Regular</Text>
  </View>
);

const Questionnaire = ({
  selectedOption,
  setSelectedOption,
  showDialog,
  toggleApplicationStepsContent,
}: {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  showDialog: () => void;
  toggleApplicationStepsContent: () => void;
}) => (
  <>
    <Text style={styles.questionnaireTitle}>Kuesioner Layanan Permohonan</Text>
    <View style={styles.questionnaireOptionContainer}>
      <Text style={styles.questionnaireData}>Untuk siapa paspor ini?</Text>
      {passportForOptions.map(option => (
        <RadioButtonOptionComponent
          key={option.value}
          label={option.label}
          description={option.description}
          value={option.value}
          selectedValue={selectedOption}
          onSelect={value => {
            setSelectedOption(value);
            value === 'child' ? showDialog() : toggleApplicationStepsContent();
          }}
        />
      ))}
    </View>
  </>
);

function RegularPassportScreen() {
  const navigation = useNavigation<RegularPassportScreenNavigationProp>();

  // State management
  const [selectedOption, setSelectedOption] = useState('');
  const [checkedOption, setCheckedOption] = useState(false);
  const [showApplicationStepsContent, setShowApplicationStepsContent] =
    useState(false);
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);

  // Dialog visibility states
  const [visible, setVisible] = useState(false);
  const [visibleDontHaveYetDialog, setVisibleDontHaveYetDialog] =
    useState(false);
  const [visiblePassportInfoDialog, setVisiblePassportInfoDialog] =
    useState(false);
  const [
    visibleLostOrDamagedPassportDialog,
    setVisibleLostOrDamagedPassportDialog,
  ] = useState(false);

  // Dialog visibility function
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

  // Back handler for showing/hiding steps content
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

  // Render steps or questionnaire
  const renderApplicationStepsContent = showApplicationStepsContent ? (
    <>
      <View style={styles.applicationStepsContainer}>
        <Text style={styles.stepTitle}>{stepTitles[step]}</Text>
        <StepIndicator
          currentStep={step}
          totalSteps={7}
          completedSteps={completedSteps}
        />
        <RenderApplicationStepsContent
          step={step}
          subStep={subStep}
          setStep={setStep}
          setSubStep={setSubStep}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          checkedOption={checkedOption}
          setCheckedOption={setCheckedOption}
          showDontHaveYetDialog={showDontHaveYetDialog}
          showPassportInfoDialog={showPassportInfoDialog}
          showLostOrDamagedPassportDialog={
            showVisibleLostOrDamagedPassportDialog
          }
        />
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
    <Questionnaire
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      showDialog={showDialog}
      toggleApplicationStepsContent={() => setShowApplicationStepsContent(true)}
    />
  );

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
        <AppBar onBackPress={() => navigation.goBack()} />
        {renderApplicationStepsContent}
        <DialogApplicationPassport
          visible={visible}
          onClose={hideDialog}
          onContinue={() => {
            hideDialog();
            setShowApplicationStepsContent(true);
          }}
        />
      </PaperProvider>
    </View>
  );
}

export default RegularPassportScreen;
