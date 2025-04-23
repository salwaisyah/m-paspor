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

const DialogApplicationPassport = (props: Props) => {
  const {visible, onClose, onContinue} = props;
  return (
    <Portal>
      <Dialog visible={visible} style={styles.dialogContainer}>
        <Dialog.Title style={styles.dialogTitle}>Pemberitahuan</Dialog.Title>
        <View style={styles.dialogContentContainer}>
          <Text style={styles.dialogDesc}>
            Permohonan paspor anak diwajibkan untuk didampingi oleh orang
            tua/wali yang sah pada saat datang ke Kantor Imigrasi untuk
            pelaksanaan wawancara dan pengambilan foto sidik jari.
          </Text>
          <View>
            <Button
              style={styles.buttonAgree}
              mode="contained"
              textColor={Colors.neutral100.color}
              onPress={onContinue}>
              Lanjut
            </Button>
            <Button
              style={styles.buttonDontAgree}
              mode="outlined"
              textColor={Colors.primary30.color}
              onPress={onClose}>
              Kembali
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
  dialogContentContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    gap: 16,
  },
  dialogDesc: {
    fontSize: 14,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    color: Colors.primary30.color,
  },
  buttonAgree: {
    backgroundColor: Colors.primary30.color,
    marginTop: 12,
  },
  buttonDontAgree: {
    borderColor: Colors.primary30.color,
    marginTop: 12,
  },
});

export default DialogApplicationPassport;
