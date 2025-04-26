import React, {useState} from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import styles from '../styles';
import Colors from '../../../../../assets/styles/Colors';
import FontFamily from '../../../../../assets/styles/FontFamily';
import genderData from '../../../../data/DropdownData/GenderData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import TextInputComponent from '../../../../components/TextInput';

interface BackButtonProps {
  onPress: () => void;
}

interface DocumentUploadSectionProps {
  title: string;
  isRequired?: boolean;
  isIcon?: boolean;
  showDialogCivilStatusDocumentsInfo?: () => void;
}

interface Step3UploadDocumentsProps {
  setStep: (step: number) => void;
  setSubStep: (subStep: number) => void;
  selectedPassportOption: string;
  showCivilStatusDocumentsInfoDialog: () => void;
}

const BackButton = (props: BackButtonProps) => {
  const {onPress} = props;
  return (
    <Pressable
      onPress={onPress}
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
  );
};

const DocumentUploadSection = (props: DocumentUploadSectionProps) => {
  const {title, isRequired, isIcon, showDialogCivilStatusDocumentsInfo} = props;
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const handleUpload = (p0: string) => {
    let fileName = `${title.toLowerCase().replace(/ /g, '')}.jpg`;

    if (
      title === 'Akta kelahiran/ijazah/akta perkawinan/buku nikah/surat baptis'
    ) {
      fileName = 'ijazah.jpg';
    }

    setUploadedFileName(fileName);
  };

  const handleDelete = () => {
    setUploadedFileName(null);
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
    setStep,
    setSubStep,
    selectedPassportOption,
    showCivilStatusDocumentsInfoDialog,
  } = props;
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <BackButton
          onPress={() => {
            setStep(2);
            setSubStep(11);
          }}
        />

        <View style={{marginBottom: 16, gap: 4}}>
          <Text style={styles.subStepDesc}>
            Layanan yang cocok untuk Anda adalah{' '}
            {selectedPassportOption !== 'already' ? (
              <Text style={{...FontFamily.notoSansBold}}>
                Paspor Penggantian
              </Text>
            ) : (
              <Text style={{...FontFamily.notoSansBold}}>Paspor Baru</Text>
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
          <DocumentUploadSection title="e-KTP" isRequired />
          <DocumentUploadSection title="Kartu Keluarga" />
          <DocumentUploadSection
            title="Akta kelahiran/ijazah/akta perkawinan/buku nikah/surat baptis"
            isIcon
            showDialogCivilStatusDocumentsInfo={
              showCivilStatusDocumentsInfoDialog
            }
          />
          {selectedPassportOption !== 'already' && (
            <DocumentUploadSection title="Paspor Lama" isRequired />
          )}
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
};

export default Step3UploadDocuments;
