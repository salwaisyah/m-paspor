import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dialog, Portal, Button} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

interface DialogLogoutProps {
  visible: boolean;
  hideDialog: () => void;
  onNavigate: () => void;
}

const DialogLogout = (props: DialogLogoutProps) => {
  const {visible, hideDialog, onNavigate} = props;

  return (
    <Portal>
      <Dialog visible={visible} style={styles.container}>
        <Dialog.Title style={styles.title}>
          Apakah Anda yakin akan menutup akun?
        </Dialog.Title>
        <View style={styles.content}>
          <Button
            style={styles.buttonContained}
            mode="contained"
            textColor={Colors.neutral100.color}
            onPress={() => {
              hideDialog();
              onNavigate();
            }}>
            Ya, lanjut tutup akun
          </Button>
          <Button
            style={styles.buttonOutlined}
            mode="outlined"
            textColor={Colors.indicatorRed.color}
            onPress={() => {
              hideDialog();
            }}>
            Tidak, jangan tutup akun
          </Button>
        </View>
      </Dialog>
    </Portal>
  );
};

export default DialogLogout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 0,
    shadowColor: 'transparent',
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    color: Colors.indicatorRed.color,
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
  buttonContained: {
    backgroundColor: Colors.indicatorRed.color,
  },
  buttonOutlined: {
    borderColor: Colors.indicatorRed.color,
  },
});
