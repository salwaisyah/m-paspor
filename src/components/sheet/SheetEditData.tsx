import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import {Portal, Button} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontFamily from '../../../assets/styles/FontFamily';
import TextInputComponent from '../TextInput';
import genderData from '../../data/DropdownData/GenderData';

type SheetEditDataProps = {
  visible: boolean;
  onClose: () => void;
  showCivilStatusDocumentsInfoDialog: () => void;
  selectedPassportOption: string;
};

interface DocumentUploadSectionProps {
  title: string;
  isRequired?: boolean;
  isIcon?: boolean;
  showDialogCivilStatusDocumentsInfo?: () => void;
}

const DocumentUploadSection = (props: DocumentUploadSectionProps) => {
  const {title, isRequired, isIcon, showDialogCivilStatusDocumentsInfo} = props;
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const handleUpload = () => {
    let fileName = `${title.toLowerCase().replace(/ /g, '')}.jpg`;

    if (
      title === 'Akta kelahiran/ijazah/akta perkawinan/buku nikah/surat baptis'
    ) {
      fileName = 'ijazah.jpg';
    }

    setUploadedFileName(fileName);
  };

  const handleDelete = () => setUploadedFileName(null);

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          {title} {isRequired && <Text style={styles.required}>*</Text>}
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
        <View style={styles.uploadButtonGroup}>
          <Button
            icon="camera-outline"
            mode="contained"
            style={styles.uploadButton}
            textColor={Colors.neutral100.color}
            labelStyle={{fontSize: 12}}
            onPress={handleUpload}>
            Foto Dokumen
          </Button>

          <Button
            icon="tray-arrow-up"
            mode="contained"
            style={styles.uploadButton}
            textColor={Colors.neutral100.color}
            labelStyle={{fontSize: 12}}
            onPress={handleUpload}>
            Unggah Dokumen
          </Button>
        </View>
      ) : (
        <View style={styles.uploadedContainer}>
          <View style={styles.uploadedTextWrapper}>
            <Text style={styles.uploadedTitle}>Berhasil dipilih</Text>
            <Text style={styles.uploadedFilename}>{uploadedFileName}</Text>
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

const SheetEditData = (props: SheetEditDataProps) => {
  const {
    visible,
    onClose,
    showCivilStatusDocumentsInfoDialog,
    selectedPassportOption,
  } = props;
  return (
    <Portal>
      <Modal visible={visible} transparent animationType="slide">
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.modalContainer}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 24}}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Ubah Data Pemohon</Text>
              <Pressable
                style={({pressed}) => ({
                  transform: [{scale: pressed ? 0.925 : 1}],
                })}
                onPress={onClose}>
                <Icon name="close" size={24} color={Colors.primary30.color} />
              </Pressable>
            </View>

            <View style={styles.infoList}>
              <View style={styles.infoItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.infoText}>
                  Unggah dokumen hanya bisa berbentuk JPG.
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.infoText}>
                  Data yang bertanda <Text style={styles.required}>*</Text>{' '}
                  wajib diisi.
                </Text>
              </View>
            </View>

            <View style={{gap: 16}}>
              <TextInputComponent
                title="Nama Pemohon"
                placeholder="Salwa Aisyah Adhani"
                isRequired
                isDisabled
              />
              <View style={styles.row}>
                <View style={styles.flex}>
                  <TextInputComponent
                    title="Tanggal Lahir"
                    placeholder="22/02/2002"
                    isRequired
                    isDate
                    isDisabled
                  />
                </View>
                <View style={styles.flex}>
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
              <TextInputComponent
                title="NIK"
                placeholder="3271234560009123456"
                isRequired
                isDisabled
              />
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

            <View style={styles.saveButtonWrapper}>
              <Button
                style={styles.saveButton}
                mode="contained"
                textColor={Colors.neutral100.color}
                onPress={onClose}>
                Simpan
              </Button>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 24,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 12,
    color: Colors.primary30.color,
    ...FontFamily.notoSansBold,
  },
  infoList: {
    marginVertical: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  bullet: {
    fontSize: 10,
    ...FontFamily.notoSansBold,
    color: Colors.primary10.color,
    lineHeight: 20,
  },
  infoText: {
    fontSize: 10,
    ...FontFamily.notoSansBold,
    color: Colors.primary10.color,
    lineHeight: 20,
    flex: 1,
    textAlign: 'justify',
  },
  required: {
    color: Colors.indicatorRed.color,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  flex: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    marginBottom: 8,
    fontSize: 12,
    color: Colors.primary30.color,
    ...FontFamily.notoSansBold,
    flex: 1,
  },
  uploadButtonGroup: {
    flexDirection: 'row',
    gap: 16,
  },
  uploadButton: {
    flex: 1,
    backgroundColor: Colors.secondary30.color,
  },
  uploadedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary50.color,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  uploadedTextWrapper: {
    gap: 4,
  },
  uploadedTitle: {
    color: Colors.primary30.color,
    fontSize: 12,
    ...FontFamily.notoSansMedium,
  },
  uploadedFilename: {
    color: Colors.primary40.color,
    fontSize: 10,
    ...FontFamily.notoSansRegular,
  },
  saveButtonWrapper: {
    marginTop: 24,
  },
  saveButton: {
    backgroundColor: Colors.primary30.color,
  },
});

export default SheetEditData;
