import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Portal, Dialog, Button} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

type Props = {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
};

const DialogFinalizationConfirmation = (props: Props) => {
  const {visible, onClose, onContinue} = props;
  return (
    <Portal>
      <Dialog visible={visible} style={styles.dialogContainer}>
        <Dialog.Title style={styles.dialogTitle}>
          Apakah data yang Anda input sudah benar?
        </Dialog.Title>
        <View style={styles.dialogContentContainer}>
          <Text style={styles.dialogDesc}>
            Permohonan Anda akan diajukan dan Anda tidak dapat mengubah kembali
            data Anda.{' '}
            <Text style={styles.dialogDescBold}>
              Biaya yang sudah dibayarkan tidak bisa kembali apabila Anda
              memberikan keterangan tidak benar.
            </Text>
          </Text>
          <View>
            <Button
              style={styles.buttonContained}
              mode="contained"
              textColor={Colors.neutral100.color}
              onPress={onContinue}>
              Ya, lanjutkan
            </Button>
            <Button
              style={styles.buttonOutlined}
              mode="outlined"
              textColor={Colors.primary30.color}
              onPress={onClose}>
              Tidak, saya ingin mengubah data
            </Button>
          </View>
        </View>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    backgroundColor: 'white',
    elevation: 0,
    shadowColor: 'transparent',
    borderRadius: 20,
  },
  dialogTitle: {
    fontSize: 22,
    color: Colors.secondary30.color,
  },
  dialogDescBold: {
    includeFontPadding: false,
    ...FontFamily.notoSansBold,
  },
  dialogContentContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    gap: 16,
  },
  dialogDesc: {
    fontSize: 14,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    lineHeight: 22,
    color: Colors.primary30.color,
  },
  buttonContained: {
    backgroundColor: Colors.primary30.color,
    marginTop: 12,
  },
  buttonOutlined: {
    borderColor: Colors.primary30.color,
    marginTop: 12,
  },
});

export default DialogFinalizationConfirmation;
