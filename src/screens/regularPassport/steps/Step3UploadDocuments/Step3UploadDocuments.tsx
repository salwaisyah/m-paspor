import React, {RefObject, useState} from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import styles from '../styles';
import Colors from '../../../../../assets/styles/Colors';
import FontFamily from '../../../../../assets/styles/FontFamily';
import genderData from '../../../../data/DropdownData/GenderData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import TextInputComponent from '../../../../components/TextInput';
import {changeStep} from '../../../../utils/stepNavigation';
import { StepValidationStatusSetter } from '../../../../../types/step';

interface BackButtonProps {
  onPress: () => void;
}

interface DocumentUploadSectionProps {
  title: string;
  isRequired?: boolean;
  isIcon?: boolean;
  showDialogCivilStatusDocumentsInfo?: () => void;
  onUploadSuccess?: () => void;
  onDelete?: () => void;
}

interface Step3UploadDocumentsProps {
  step: number;
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
  setStepValidationStatus: StepValidationStatusSetter;
  selectedPassportOption: string;
  selectedDestinationCountryOption: string;
  showCivilStatusDocumentsInfoDialog: () => void;
  onSubStepValidation: (isValid: boolean) => void;
  editedCompletedRef: RefObject<Set<number>>;
}

const BackButton = (props: BackButtonProps) => {
  const {onPress} = props;
  return (
    <Pressable
      style={({pressed}) => ({
        transform: [{scale: pressed ? 0.99 : 1}],
      })}
      onPress={onPress}>
      <Button
        mode="contained"
        icon="chevron-left"
        textColor={Colors.neutral100.color}
        style={styles.subStepButtonBackContainer}>
        Kembali
      </Button>
    </Pressable>
  );
};

const DocumentUploadSection = (props: DocumentUploadSectionProps) => {
  const {
    title,
    isRequired,
    isIcon,
    showDialogCivilStatusDocumentsInfo,
    onUploadSuccess,
    onDelete,
  } = props;

  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const handleUpload = (p0: string) => {
    let fileName = `${title.toLowerCase().replace(/ /g, '')}.jpg`;

    if (
      title === 'Akta kelahiran/ijazah/akta perkawinan/buku nikah/surat baptis'
    ) {
      fileName = 'ijazah.jpg';
    }

    setUploadedFileName(fileName);
    onUploadSuccess?.();
  };

  const handleDelete = () => {
    setUploadedFileName(null);
    onDelete?.();
  };

  return (
    <View>
      <View style={styles.subStepRowTextButton}>
        <Text style={styles.subStepSectionButtonTextTitle}>
          {title}{' '}
          {isRequired && (
            <Text style={{color: Colors.indicatorRed.color}}>*</Text>
          )}
        </Text>
        {isIcon && (
          <Pressable
            style={({pressed}) => ({
              transform: [{scale: pressed ? 0.925 : 1}],
            })}
            onPress={showDialogCivilStatusDocumentsInfo}>
            <Icon name="information" size={24} color={Colors.primary30.color} />
          </Pressable>
        )}
      </View>

      {!uploadedFileName ? (
        <View style={styles.sectionButtonWrapper}>
          <Button
            icon="camera-outline"
            mode="contained"
            style={styles.buttonContainedSecondary}
            textColor={Colors.neutral100.color}
            labelStyle={{fontSize: 12}}
            onPress={() =>
              handleUpload(`${title.toLowerCase().replace(/ /g, '')}.jpg`)
            }>
            Foto Dokumen
          </Button>

          <Button
            icon="tray-arrow-up"
            mode="contained"
            style={styles.buttonContainedSecondary}
            textColor={Colors.neutral100.color}
            labelStyle={{fontSize: 12}}
            onPress={() =>
              handleUpload(`${title.toLowerCase().replace(/ /g, '')}.jpg`)
            }>
            Unggah Dokumen
          </Button>
        </View>
      ) : (
        <View style={styles.subStepUploadedDocumentContainer}>
          <View style={styles.subStepUploadedDocumentTextWrapper}>
            <Text style={styles.subStepUploadedDocumentTitle}>
              Berhasil dipilih
            </Text>
            <Text style={styles.subStepUploadedDocumentDesc}>
              {uploadedFileName}
            </Text>
          </View>
          <Icon
            name="trash-can-outline"
            size={24}
            color={Colors.indicatorRed.color}
            onPress={handleDelete}
          />
        </View>
      )}
    </View>
  );
};

const Step3UploadDocuments = (props: Step3UploadDocumentsProps) => {
  const {
    step,
    setStep,
    setSubStep,
    setStepValidationStatus,
    selectedPassportOption,
    selectedDestinationCountryOption,
    showCivilStatusDocumentsInfoDialog,
    onSubStepValidation,
    editedCompletedRef,
  } = props;

  const [isKTPUploaded, setIsKTPUploaded] = useState(false);
  const [isFamilyCardUploaded, setIsFamilyCardUploaded] = useState(false);
  const [isCivilStatusUploaded, setIsCivilStatusUploaded] = useState(false);
  const [isOldPassportUploaded, setIsOldPassportUploaded] = useState(false);

  const onBackPress = () => {
    changeStep({
      currentStep: step,
      targetStep: 2,
      setStep,
      setSubStep: () =>
        setSubStep(
          selectedDestinationCountryOption === 'destination_country_not_set'
            ? 10
            : 11,
        ),
      setStepValidationStatus,
      editedCompletedRef,
    });
  };

  const onNextPress = () => {
    const isFormValid =
      isKTPUploaded &&
      isFamilyCardUploaded &&
      isCivilStatusUploaded &&
      (selectedPassportOption !== 'already' || isOldPassportUploaded);

    if (isFormValid) {
      onSubStepValidation(true);
    } else {
      onSubStepValidation(false);
    }

    changeStep({
      currentStep: step,
      targetStep: 4,
      setStep,
      setSubStep: () => setSubStep(1),
      setStepValidationStatus,
      editedCompletedRef,
    });
  };

  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <BackButton onPress={onBackPress} />

        <View style={{marginTop: 12, marginBottom: 16, gap: 4}}>
          <Text style={styles.subStepDesc}>
            Layanan yang cocok untuk Anda adalah{' '}
            {selectedPassportOption !== 'already' ? (
              <Text style={{...FontFamily.notoSansBold}}>Paspor Baru</Text>
            ) : (
              <Text style={{...FontFamily.notoSansBold}}>
                Paspor Penggantian
              </Text>
            )}
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
                Unggah dokumen hanya bisa berbentuk JPG.
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
                <Text style={{color: Colors.indicatorRed.color}}>*</Text>) wajib
                diisi.
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
          <DocumentUploadSection
            title="e-KTP"
            isRequired
            onUploadSuccess={() => setIsKTPUploaded(true)}
            onDelete={() => setIsKTPUploaded(false)}
          />
          <DocumentUploadSection
            title="Kartu Keluarga"
            onUploadSuccess={() => setIsFamilyCardUploaded(true)}
            onDelete={() => setIsFamilyCardUploaded(false)}
          />
          <DocumentUploadSection
            title="Akta kelahiran/ijazah/akta perkawinan/buku nikah/surat baptis"
            isIcon
            showDialogCivilStatusDocumentsInfo={
              showCivilStatusDocumentsInfoDialog
            }
            onUploadSuccess={() => setIsCivilStatusUploaded(true)}
            onDelete={() => setIsCivilStatusUploaded(false)}
          />
          {selectedPassportOption === 'already' && (
            <DocumentUploadSection
              title="Paspor Lama"
              isRequired
              onUploadSuccess={() => setIsOldPassportUploaded(true)}
              onDelete={() => setIsOldPassportUploaded(false)}
            />
          )}
        </View>

        <Button
          mode="contained"
          onPress={onNextPress}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step3UploadDocuments;
