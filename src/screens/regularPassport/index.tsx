import React, {useEffect, useState} from 'react';
import {BackHandler, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../assets/styles/Colors';
import RadioButtonOptionComponent from '../../components/RadioButtonOption';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import StepIndicator from '../../components/StepIndicator';
import DialogApplicationPassport from '../../components/dialog/DialogApplicationPassport';
import DialogDontHaveYetPassport from '../../components/dialog/DialogDontHaveYetPassport';
import DialogLostOrDamagedPassport from '../../components/dialog/DialogLostOrDamagedPassport';
import passportAppointmentData from '../../data/History/PassportAppointmentData';
import Step7Completion from './steps/Step7Completion/Step7Completion';
import Step6Processing from './steps/Step6Processing/Step6Processing';
import Step5Verification from './steps/Step5Verification/Step5Verification';
import Step3Payment from './steps/Step3Payment/Step3Payment';

// Options Data
import passportForOptions from '../../data/Options/PassportForOptions';
import Step4DataConfirmationSubStep2 from './steps/Step4DataConfirmation/Step4DataConfirmationSubStep2';
import Step4DataConfirmationSubStep1 from './steps/Step4DataConfirmation/Step4DataConfirmationSubStep1';
import Step1PersonalInfoSubStep1 from './steps/Step1PersonalInfo/Step1PersonalInfoSubStep1';
import Step1PersonalInfoSubStep2 from './steps/Step1PersonalInfo/Step1PersonalInfoSubStep2';
import Step1PersonalInfoSubStep3 from './steps/Step1PersonalInfo/Step1PersonalInfoSubStep3';
import Step2SupportingDocsSubStep1 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep1';
import Step2SupportingDocsSubStep2 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep2';
import Step2SupportingDocsSubStep3 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep3';
import Step2SupportingDocsSubStep4 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep4';
import Step2SupportingDocsSubStep5 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep5';
import Step2SupportingDocsSubStep6 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep6';
import Step2SupportingDocsSubStep7 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep7';
import Step2SupportingDocsSubStep8 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep8';
import Step2SupportingDocsSubStep9 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep9';
import Step2SupportingDocsSubStep10 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep10';
import Step2SupportingDocsSubStep11 from './steps/Step2SupportingDocs/Step2SupportingDocsSubStep11';
import DialogCivilStatusDocumentsInfo from '../../components/dialog/DialogCivilStatusDocumentsInfo';
import DialogSubmitSuccess from '../../components/dialog/DialogSubmitSuccess';
import DialogFinalizationConfirmation from '../../components/dialog/DialogFinalizationConfirmation';
import DialogPassportConditionInfo from '../../components/dialog/DialogPassportConditionInfo';
import DialogPassportTypeInfo from '../../components/dialog/DialogPassportTypeInfo';
import SheetEditData from '../../components/sheet/SheetEditData';
import SheetSearchLocation from '../../components/sheet/SheetSearchLocation';

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
  selectedPassportOption: string;
  setSelectedPassportOption: (val: string) => void;
  checkedOption: boolean;
  setCheckedOption: React.Dispatch<React.SetStateAction<boolean>>;
  showDontHaveYetDialog: () => void;
  showPassportInfoDialog: () => void;
  showLostOrDamagedPassportDialog: () => void;
  showCivilStatusDocumentsInfoDialog: () => void;
  showSubmitSuccessDialog: () => void;
  setLastCompletedSteps: () => void;
  showFinalizationConfirmationDialog: () => void;
  showPassportTypeInfoDialog: () => void;
  showEditDataSheet: () => void;
  showSearchLocationSheet: () => void;
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
    selectedPassportOption,
    setSelectedPassportOption,
    checkedOption,
    setCheckedOption,
    showDontHaveYetDialog,
    showPassportInfoDialog,
    showLostOrDamagedPassportDialog,
    showCivilStatusDocumentsInfoDialog,
    showSubmitSuccessDialog,
    setLastCompletedSteps,
    showFinalizationConfirmationDialog,
    showPassportTypeInfoDialog,
    showEditDataSheet,
    showSearchLocationSheet,
  } = props;

  if (step === 1) {
    switch (subStep) {
      case 1:
        return <Step1PersonalInfoSubStep1 setSubStep={setSubStep} />;
      case 2:
        return <Step1PersonalInfoSubStep2 setSubStep={setSubStep} />;
      case 3:
        return (
          <Step1PersonalInfoSubStep3
            setStep={setStep}
            setSubStep={setSubStep}
          />
        );
      default:
        return null;
    }
  }

  if (step === 2) {
    switch (subStep) {
      case 1:
        return (
          <Step2SupportingDocsSubStep1
            setStep={setStep}
            setSubStep={setSubStep}
            selectedPassportOption={selectedPassportOption}
            setSelectedPassportOption={setSelectedPassportOption}
            showDontHaveYetDialog={showDontHaveYetDialog}
          />
        );
      case 2:
        return (
          <Step2SupportingDocsSubStep2
            setSubStep={setSubStep}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            showPassportInfoDialog={showPassportInfoDialog}
            showLostOrDamagedPassportDialog={showLostOrDamagedPassportDialog}
          />
        );
      case 3:
        return <Step2SupportingDocsSubStep3 setSubStep={setSubStep} />;
      case 4:
        return <Step2SupportingDocsSubStep4 setSubStep={setSubStep} />;
      case 5:
        return <Step2SupportingDocsSubStep5 setSubStep={setSubStep} />;
      case 6:
        return (
          <Step2SupportingDocsSubStep6
            setSubStep={setSubStep}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      case 7:
        return (
          <Step2SupportingDocsSubStep7
            setSubStep={setSubStep}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      case 8:
        return <Step2SupportingDocsSubStep8 setSubStep={setSubStep} />;
      case 9:
        return (
          <Step2SupportingDocsSubStep9
            setSubStep={setSubStep}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      case 10:
        return <Step2SupportingDocsSubStep10 setSubStep={setSubStep} />;
      case 11:
        return (
          <Step2SupportingDocsSubStep11
            setStep={setStep}
            setSubStep={setSubStep}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
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
      return (
        <Step3Payment
          setStep={setStep}
          setSubStep={setSubStep}
          selectedPassportOption={selectedPassportOption}
          showCivilStatusDocumentsInfoDialog={
            showCivilStatusDocumentsInfoDialog
          }
        />
      );
    case 5:
      return (
        <Step5Verification
          setStep={setStep}
          setSubStep={setSubStep}
          passportAppointmentData={passportAppointmentData}
          showEditDataSheet={showEditDataSheet}
        />
      );
    case 6:
      return (
        <Step6Processing
          showFinalizationConfirmationDialog={
            showFinalizationConfirmationDialog
          }
          showPassportTypeInfoDialog={showPassportTypeInfoDialog}
          showSearchLocationSheet={showSearchLocationSheet}
        />
      );
    case 7:
      return (
        <Step7Completion
          showSubmitSuccessDialog={showSubmitSuccessDialog}
          setLastCompletedSteps={setLastCompletedSteps}
        />
      );
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
  const [selectedPassportOption, setSelectedPassportOption] = useState('');
  const [checkedOption, setCheckedOption] = useState(false);
  const [showApplicationStepsContent, setShowApplicationStepsContent] =
    useState(false);
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>(
    [...Array(step - 1)].map((_, i) => i + 1),
  );

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
  const [
    visibleCivilStatusDocumentsInfoDialog,
    setVisibleCivilStatusDocumentsInfoDialog,
  ] = useState(false);
  const [visibleSubmitSuccessDialog, setVisibleSubmitSuccessDialog] =
    useState(false);
  const [
    visibleFinalizationConfirmationDialog,
    setVisibleFinalizationConfirmationDialog,
  ] = useState(false);
  const [visiblePassportTypeInfoDialog, setVisiblePassportTypeInfoDialog] =
    useState(false);

  // Sheet visibility states
  const [visibleEditDataSheet, setVisibleEditDataSheet] = useState(false);
  const [visibleSearchLocationSheet, setVisibleSearchLocationSheet] =
    useState(false);

  // Dialog visibility function
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const showDontHaveYetDialog = () => setVisibleDontHaveYetDialog(true);
  const hideDontHaveYetDialog = () => setVisibleDontHaveYetDialog(false);

  const showPassportInfoDialog = () => setVisiblePassportInfoDialog(true);
  const hidePassportInfoDialog = () => setVisiblePassportInfoDialog(false);

  const showLostOrDamagedPassportDialog = () =>
    setVisibleLostOrDamagedPassportDialog(true);
  const hideLostOrDamagedPassportDialog = () =>
    setVisibleLostOrDamagedPassportDialog(false);

  const showCivilStatusDocumentsInfoDialog = () =>
    setVisibleCivilStatusDocumentsInfoDialog(true);
  const hideCivilStatusDocumentsInfoDialog = () =>
    setVisibleCivilStatusDocumentsInfoDialog(false);

  const showSubmitSuccessDialog = () => setVisibleSubmitSuccessDialog(true);
  const hideSubmitSuccessDialog = () => setVisibleSubmitSuccessDialog(false);

  const showFinalizationConfirmationDialog = () =>
    setVisibleFinalizationConfirmationDialog(true);
  const hideFinalizationConfirmationDialog = () =>
    setVisibleFinalizationConfirmationDialog(false);

  const showPassportTypeInfoDialog = () =>
    setVisiblePassportTypeInfoDialog(true);
  const hidePassportTypeInfoDialog = () =>
    setVisiblePassportTypeInfoDialog(false);

  // Sheet visibility function
  const showEditDataSheet = () => setVisibleEditDataSheet(true);
  const hideEditDataSheet = () => setVisibleEditDataSheet(false);

  const showSearchLocationSheet = () => setVisibleSearchLocationSheet(true);
  const hideSearchLocationSheet = () => setVisibleSearchLocationSheet(false);

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

  useEffect(() => {
    if (step > 1) {
      const updatedCompletedSteps = [...Array(step - 1)].map((_, i) => i + 1);
      setCompletedSteps(updatedCompletedSteps);
    } else {
      setCompletedSteps([]);
    }
  }, [step]);

  const setLastCompletedSteps = () => {
    setCompletedSteps(prevCompletedSteps => {
      if (!prevCompletedSteps.includes(7)) {
        return [...prevCompletedSteps, 7];
      }
      return prevCompletedSteps;
    });
  };

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
          selectedPassportOption={selectedPassportOption}
          setSelectedPassportOption={setSelectedPassportOption}
          checkedOption={checkedOption}
          setCheckedOption={setCheckedOption}
          showDontHaveYetDialog={showDontHaveYetDialog}
          showPassportInfoDialog={showPassportInfoDialog}
          showLostOrDamagedPassportDialog={showLostOrDamagedPassportDialog}
          showCivilStatusDocumentsInfoDialog={
            showCivilStatusDocumentsInfoDialog
          }
          showSubmitSuccessDialog={showSubmitSuccessDialog}
          setLastCompletedSteps={setLastCompletedSteps}
          showFinalizationConfirmationDialog={
            showFinalizationConfirmationDialog
          }
          showPassportTypeInfoDialog={showPassportTypeInfoDialog}
          showEditDataSheet={showEditDataSheet}
          showSearchLocationSheet={showSearchLocationSheet}
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
        <DialogPassportConditionInfo
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
            hideLostOrDamagedPassportDialog();
          }}
        />
      )}

      {visibleCivilStatusDocumentsInfoDialog && (
        <DialogCivilStatusDocumentsInfo
          visible={visibleCivilStatusDocumentsInfoDialog}
          onClose={hideCivilStatusDocumentsInfoDialog}
        />
      )}

      {visibleSubmitSuccessDialog && (
        <DialogSubmitSuccess
          visible={visibleSubmitSuccessDialog}
          onSubmitSuccess={() => {
            navigation.goBack(), hideSubmitSuccessDialog();
          }}
        />
      )}

      {visibleFinalizationConfirmationDialog && (
        <DialogFinalizationConfirmation
          visible={visibleFinalizationConfirmationDialog}
          onClose={hideFinalizationConfirmationDialog}
          onContinue={() => {
            setStep(7);
            hideFinalizationConfirmationDialog();
          }}
        />
      )}

      {visiblePassportTypeInfoDialog && (
        <DialogPassportTypeInfo
          visible={visiblePassportTypeInfoDialog}
          onClose={hidePassportTypeInfoDialog}
        />
      )}

      {visibleEditDataSheet && (
        <SheetEditData
          visible={visibleEditDataSheet}
          onClose={hideEditDataSheet}
          showCivilStatusDocumentsInfoDialog={() => {
            hideEditDataSheet();
            showCivilStatusDocumentsInfoDialog();
          }}
          selectedPassportOption={selectedPassportOption}
        />
      )}

      {visibleSearchLocationSheet && (
        <SheetSearchLocation
          visible={visibleSearchLocationSheet}
          onClose={hideSearchLocationSheet}
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
            visibleLostOrDamagedPassportDialog ||
            visibleCivilStatusDocumentsInfoDialog ||
            visibleSubmitSuccessDialog ||
            visibleFinalizationConfirmationDialog ||
            visiblePassportTypeInfoDialog
              ? '#295E70'
              : visibleEditDataSheet || visibleSearchLocationSheet
              ? '#185769'
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
