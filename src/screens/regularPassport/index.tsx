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
import Step7ApplicationFeeDetails from './steps/Step7ApplicationFeeDetails/Step7ApplicationFeeDetails';
import Step6ApplicationTypeAndApplicantData from './steps/Step6ApplicationTypeAndApplicantData/Step6ApplicationTypeAndApplicantData';
import Step5ApplicationTypeAndApplicantData from './steps/Step5ApplicationTypeAndApplicantData/Step5ApplicationTypeAndApplicantData';
import Step3UploadDocuments from './steps/Step3UploadDocuments/Step3UploadDocuments';

// Options Data
import passportForOptions from '../../data/Options/PassportForOptions';
import Step4ApplicantAdditionalDataSubStep2 from './steps/Step4ApplicantAdditionalData/Step4ApplicantAdditionalDataSubStep2';
import Step4ApplicantAdditionalDataSubStep1 from './steps/Step4ApplicantAdditionalData/Step4ApplicantAdditionalDataSubStep1';
import Step1VerifyNikSubStep1 from './steps/Step1VerifyNik/Step1VerifyNikSubStep1';
import Step1VerifyNikSubStep2 from './steps/Step1VerifyNik/Step1VerifyNikSubStep2';
import Step1VerifyNikSubStep3 from './steps/Step1VerifyNik/Step1VerifyNikSubStep3';
import Step2PassportApplicationQuestionnaireSubStep1 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep1';
import Step2PassportApplicationQuestionnaireSubStep2 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep2';
import Step2PassportApplicationQuestionnaireSubStep3 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep3';
import Step2PassportApplicationQuestionnaireSubStep4 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep4';
import Step2PassportApplicationQuestionnaireSubStep5 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep5';
import Step2PassportApplicationQuestionnaireSubStep6 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep6';
import Step2PassportApplicationQuestionnaireSubStep7 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep7';
import Step2PassportApplicationQuestionnaireSubStep8 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep8';
import Step2PassportApplicationQuestionnaireSubStep9 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep9';
import Step2PassportApplicationQuestionnaireSubStep10 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep10';
import Step2PassportApplicationQuestionnaireSubStep11 from './steps/Step2PassportApplicationQuestionnaire/Step2PassportApplicationQuestionnaireSubStep11';
import DialogCivilStatusDocumentsInfo from '../../components/dialog/DialogCivilStatusDocumentsInfo';
import DialogSubmitSuccess from '../../components/dialog/DialogSubmitSuccess';
import DialogFinalizationConfirmation from '../../components/dialog/DialogFinalizationConfirmation';
import DialogPassportConditionInfo from '../../components/dialog/DialogPassportConditionInfo';
import DialogPassportTypeInfo from '../../components/dialog/DialogPassportTypeInfo';
import SheetEditData from '../../components/sheet/SheetEditData';
import SheetSearchLocation from '../../components/sheet/SheetSearchLocation';
import SheetSelectDate from '../../components/sheet/SheetSelectDate';

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
  showSelectDateSheet: () => void;
  selectedDestinationCountryOption: string;
  setSelectedDestinationCountryOption: (val: string) => void;
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
    selectedDestinationCountryOption,
    setSelectedDestinationCountryOption,
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
    showSelectDateSheet,
  } = props;

  if (step === 1) {
    switch (subStep) {
      case 1:
        return <Step1VerifyNikSubStep1 setSubStep={setSubStep} />;
      case 2:
        return <Step1VerifyNikSubStep2 setSubStep={setSubStep} />;
      case 3:
        return (
          <Step1VerifyNikSubStep3 setStep={setStep} setSubStep={setSubStep} />
        );
      default:
        return null;
    }
  }

  if (step === 2) {
    switch (subStep) {
      case 1:
        return (
          <Step2PassportApplicationQuestionnaireSubStep1
            setStep={setStep}
            setSubStep={setSubStep}
            selectedPassportOption={selectedPassportOption}
            setSelectedPassportOption={setSelectedPassportOption}
            showDontHaveYetDialog={showDontHaveYetDialog}
          />
        );
      case 2:
        return (
          <Step2PassportApplicationQuestionnaireSubStep2
            setSubStep={setSubStep}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            showPassportInfoDialog={showPassportInfoDialog}
            showLostOrDamagedPassportDialog={showLostOrDamagedPassportDialog}
          />
        );
      case 3:
        return (
          <Step2PassportApplicationQuestionnaireSubStep3
            setSubStep={setSubStep}
          />
        );
      case 4:
        return (
          <Step2PassportApplicationQuestionnaireSubStep4
            setSubStep={setSubStep}
          />
        );
      case 5:
        return (
          <Step2PassportApplicationQuestionnaireSubStep5
            setSubStep={setSubStep}
          />
        );
      case 6:
        return (
          <Step2PassportApplicationQuestionnaireSubStep6
            setSubStep={setSubStep}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            selectedPassportOption={selectedPassportOption}
          />
        );
      case 7:
        return (
          <Step2PassportApplicationQuestionnaireSubStep7
            setSubStep={setSubStep}
            selectedDestinationCountryOption={selectedDestinationCountryOption}
            setSelectedDestinationCountryOption={
              setSelectedDestinationCountryOption
            }
          />
        );
      case 8:
        return (
          <Step2PassportApplicationQuestionnaireSubStep8
            setSubStep={setSubStep}
          />
        );
      case 9:
        return (
          <Step2PassportApplicationQuestionnaireSubStep9
            setSubStep={setSubStep}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      case 10:
        return (
          <Step2PassportApplicationQuestionnaireSubStep10
            setStep={setStep}
            setSubStep={setSubStep}
            selectedDestinationCountryOption={selectedDestinationCountryOption}
          />
        );
      case 11:
        return (
          <Step2PassportApplicationQuestionnaireSubStep11
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
          <Step4ApplicantAdditionalDataSubStep1
            setStep={setStep}
            setSubStep={setSubStep}
            checkedOption={checkedOption}
            setCheckedOption={setCheckedOption}
          />
        );
      case 2:
        return (
          <Step4ApplicantAdditionalDataSubStep2
            setStep={setStep}
            setSubStep={setSubStep}
          />
        );
    }
  }
  switch (step) {
    case 3:
      return (
        <Step3UploadDocuments
          setStep={setStep}
          setSubStep={setSubStep}
          selectedPassportOption={selectedPassportOption}
          showCivilStatusDocumentsInfoDialog={
            showCivilStatusDocumentsInfoDialog
          }
          selectedDestinationCountryOption={selectedDestinationCountryOption}
        />
      );
    case 5:
      return (
        <Step5ApplicationTypeAndApplicantData
          setStep={setStep}
          setSubStep={setSubStep}
          passportAppointmentData={passportAppointmentData}
          showEditDataSheet={showEditDataSheet}
        />
      );
    case 6:
      return (
        <Step6ApplicationTypeAndApplicantData
          showFinalizationConfirmationDialog={
            showFinalizationConfirmationDialog
          }
          showPassportTypeInfoDialog={showPassportTypeInfoDialog}
          showSearchLocationSheet={showSearchLocationSheet}
          showSelectDateSheet={showSelectDateSheet}
        />
      );
    case 7:
      return (
        <Step7ApplicationFeeDetails
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
  const [
    selectedDestinationCountryOption,
    setSelectedDestinationCountryOption,
  ] = useState('');
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
  const [visibleSelectDateSheet, setVisibleSelectDateSheet] = useState(false);

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

  const showSelectDateSheet = () => setVisibleSelectDateSheet(true);
  const hideSelectDateSheet = () => setVisibleSelectDateSheet(false);

  const stepTitles: {[key: number]: string} = {
    1: 'Verifikasi NIK',
    2: 'Kuesioner Permohonan Paspor (PERDIM)',
    3: 'Unggah Dokumen',
    4: 'Data Tambahan Pemohon',
    5: 'Jenis Permohonan dan Data Pemohon',
    6: 'Jenis Permohonan dan Data Pemohon',
    7: 'Rincian Biaya Permohonan',
  };

  const getStepTitle = (step: number, subStep: number) => {
    if (step === 4) {
      if (subStep === 1) {
        return 'Data Tambahan Pemohon (1/2)';
      } else if (subStep === 2) {
        return 'Data Tambahan Pemohon (2/2)';
      }
    }
    return stepTitles[step];
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
        <Text style={styles.stepTitle}>{getStepTitle(step, subStep)}</Text>
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
          selectedDestinationCountryOption={selectedDestinationCountryOption}
          setSelectedDestinationCountryOption={
            setSelectedDestinationCountryOption
          }
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
          showSelectDateSheet={showSelectDateSheet}
        />
      </View>

      {visibleDontHaveYetDialog && (
        <DialogDontHaveYetPassport
          visible={visibleDontHaveYetDialog}
          onClose={hideDontHaveYetDialog}
          onContinue={() => setSubStep(6)}
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
            navigation.reset({
              index: 0,
              routes: [{name: 'NavigationRoute'}],
            });
            hideSubmitSuccessDialog();
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

      {visibleSelectDateSheet && (
        <SheetSelectDate
          visible={visibleSelectDateSheet}
          onClose={hideSelectDateSheet}
          onContinue={hideSelectDateSheet}
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
              : visibleEditDataSheet ||
                visibleSearchLocationSheet ||
                visibleSelectDateSheet
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
