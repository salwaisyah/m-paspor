import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dialog, Portal, Button} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

interface DialogWarningApplicationProps {
  visible: boolean;
  hideDialog: () => void;
  onNavigate: () => void;
}

const DialogWarningApplication = (props: DialogWarningApplicationProps) => {
  const {visible, hideDialog, onNavigate} = props;

  return (
    <Portal>
      <Dialog visible={visible} style={styles.container}>
        <Dialog.Title style={styles.title}>Peringatan</Dialog.Title>
        <View style={styles.content}>
          <Text style={styles.message}>
            Silakan melakukan pengisian kuesioner.
          </Text>
          <Text style={[styles.message, {...FontFamily.notoSansBold}]}>
            Pastikan data dan jawaban yang Anda berikan benar.
          </Text>
          <Text style={styles.message}>
            Pemberian keterangan yang tidak benar merupakan pelanggaran
            keimigrasian sebagaimana ketentuan Pasal 126 huruf c UU No. 6 tahun
            2011 tentang Keimigrasian dan akan mengakibatkan permohonan paspor
            Anda ditolak dan pembayaran tidak dapat dikembalikan.
          </Text>
          <Button
            style={styles.button}
            mode="contained"
            textColor={Colors.neutral100.color}
            onPress={() => {
              hideDialog();
              onNavigate();
            }}>
            Lanjut
          </Button>
        </View>
      </Dialog>
    </Portal>
  );
};

export default DialogWarningApplication;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 0,
    shadowColor: 'transparent',
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    color: Colors.secondary30.color,
  },
  content: {
    marginHorizontal: 24,
    marginBottom: 24,
    gap: 16,
  },
  message: {
    fontSize: 14,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    lineHeight: 22,
    color: Colors.primary30.color,
  },
  button: {
    backgroundColor: Colors.primary30.color,
    marginTop: 12,
  },
});
