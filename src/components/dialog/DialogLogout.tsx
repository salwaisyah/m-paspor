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
          Apakah Anda ingin keluar dari akun?
        </Dialog.Title>
        <View style={styles.content}>
          <Text style={styles.desc}>
            Anda akan keluar dari akun M-Paspor yang sekarang dan akan diarahkan
            menuju halaman login.
          </Text>
          <Button
            style={styles.buttonContained}
            mode="contained"
            textColor={Colors.neutral100.color}
            onPress={() => {
              hideDialog();
              onNavigate();
            }}>
            Ya, Lanjut Keluar Akun
          </Button>
          <Button
            style={styles.buttonOutlined}
            mode="outlined"
            textColor={Colors.primary30.color}
            onPress={() => {
              hideDialog();
            }}>
            Tidak, Jangan Keluar
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
    color: Colors.secondary30.color,
  },
  desc: {
    fontSize: 14,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    lineHeight: 22,
    color: Colors.primary30.color,
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
    backgroundColor: Colors.primary30.color,
  },
  buttonOutlined: {
    borderColor: Colors.primary30.color,
  },
});
