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
import {Button, Dialog, PaperProvider, Portal} from 'react-native-paper';
import StepIndicator from '../../components/StepIndicator';
import TextInputComponent from '../../components/TextInput';
import genderData from '../../data/DropdownData/GenderData';
import civilStatusData from '../../data/DropdownData/CivilStatus';

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

const renderApplicationStepsContent = (
  step: number,
  subStep: number,
  setStep: (step: number) => void,
  setSubStep: (step: number) => void,
  selectedOption: string,
  setSelectedOption: (val: string) => void,
) => {
  if (step === 1) {
    switch (subStep) {
      case 1:
        return (
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
            <View style={styles.nationalIdImage} />
            <View style={styles.subStepButtonContainer}>
              <Button
                mode="contained"
                onPress={() => setSubStep(2)}
                style={styles.subStepButtonActive}
                textColor={Colors.neutral100.color}>
                Pilih Foto
              </Button>
              <Button
                mode="outlined"
                onPress={() => {}}
                style={styles.subStepButtonInActive}
                textColor={Colors.primary30.color}>
                Ulangi
              </Button>
            </View>
          </View>
        );
      case 2:
        return (
          <ScrollView>
            <View style={styles.subStepContainer}>
              <View style={styles.nationalIdImageContainer}>
                <View style={styles.nationalIdImageCropped} />
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
                  style={styles.subStepButtonActive}
                  textColor={Colors.neutral100.color}>
                  Lanjut
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => setSubStep(1)}
                  style={styles.subStepButtonInActive}
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
                setSubStep(2);
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
                    value === 'already' && setSubStep(2);
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
                  Apakah Anda sudah pernah memiliki paspor?
                </Text>
                {previousPassportConditionOptions.map(options => (
                  <RadioButtonOptionComponent
                    key={options.value}
                    label={options.label}
                    description={options.description}
                    value={options.value}
                    selectedValue={selectedOption}
                    onSelect={value => {
                      setSelectedOption(value);
                      value === 'already' && setSubStep(2);
                    }}
                  />
                ))}
              </View>
              <Button
                mode="contained"
                onPress={() => {
                  setSubStep(3);
                }}
                style={styles.subStepButtonActive}
                textColor={Colors.neutral100.color}>
                Lanjut
              </Button>
            </View>
          </ScrollView>
        );
      case 3:
        return (
          <View>
            <Text>Step 2.3</Text>
            <Button
              mode="contained"
              onPress={() => {
                setStep(3);
                setSubStep(1);
              }}>
              Next
            </Button>
            <Button onPress={() => setSubStep(2)}>Back</Button>
          </View>
        );
      default:
        return null;
    }
  }

  switch (step) {
    case 3:
      return (
        <View>
          <Button mode="contained" onPress={() => setStep(4)}>
            Next
          </Button>
          <Button onPress={() => setStep(2)}>Back</Button>
        </View>
      );
    case 4:
      return (
        <View>
          <Button mode="contained" onPress={() => setStep(5)}>
            Next
          </Button>
          <Button onPress={() => setStep(3)}>Back</Button>
        </View>
      );
    case 5:
      return (
        <View>
          <Button mode="contained" onPress={() => setStep(6)}>
            Next
          </Button>
          <Button onPress={() => setStep(4)}>Back</Button>
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
  const [visible, setVisible] = useState(false);
  const [showApplicationStepsContent, setShowApplicationStepsContent] =
    useState(false);
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
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
          backgroundColor={visible ? '#295E70' : Colors.secondary30.color}
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
            )}
          </View>
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
            <Portal>
              <Dialog visible={visible} style={styles.dialogContainer}>
                <Dialog.Title style={styles.dialogTitle}>
                  Pemberitahuan
                </Dialog.Title>
                <View style={styles.dialogContentContainer}>
                  <Text style={styles.dialogDesc}>
                    Permohonan paspor anak diwajibkan untuk didampingi oleh
                    orang tua/wali yang sah pada saat datang ke Kantor Imigrasi
                    untuk pelaksanaan wawancara dan pengambilan foto sidik jari.
                  </Text>
                  <View>
                    <Button
                      style={styles.buttonAgree}
                      mode="contained"
                      textColor={Colors.neutral100.color}
                      onPress={() => {
                        hideDialog();
                        setShowApplicationStepsContent(true);
                      }}>
                      Lanjut
                    </Button>
                    <Button
                      style={styles.buttonDontAgree}
                      mode="outlined"
                      textColor={Colors.primary30.color}
                      onPress={() => hideDialog()}>
                      Kembali
                    </Button>
                  </View>
                </View>
              </Dialog>
            </Portal>
          </>
        )}
      </PaperProvider>
    </View>
  );
}

export default RegularPassportScreen;
