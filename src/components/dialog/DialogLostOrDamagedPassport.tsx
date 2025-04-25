import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Portal, Dialog, Button} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

type Props = {
  visible: boolean;
  onBackToHome: () => void;
  onBackToFirstStep: () => void;
};

const DialogLostOrDamagedPassport = (props: Props) => {
  const {visible, onBackToHome, onBackToFirstStep} = props;
  return (
    <Portal>
      <Dialog visible={visible} style={styles.dialogContainer}>
        <Dialog.Title style={styles.dialogTitle}>Pemberitahuan</Dialog.Title>
        <View style={styles.dialogContentContainer}>
          <Text style={styles.dialogDesc}>
            Silakan langsung datang ke Kantor Imigrasi terdekat untuk melakukan
            permohonan penggantian paspor hilang atau rusak dengan membawa
            dokumen sebagai berikut:
          </Text>
          <View>
            <Text style={[styles.dialogDesc, {...FontFamily.notoSansBold}]}>
              1. Untuk Paspor Hilang
            </Text>
            <View style={styles.dialogBulletPointWrapper}>
              <Text style={styles.dialogDesc}>• e-КТР</Text>
              <Text style={styles.dialogDesc}>• Kartu Keluarga</Text>
              <View style={styles.dialogLongBulletPointWrapper}>
                <Text>•</Text>
                <Text style={styles.dialogDesc}>
                  Akta kelahiran/ijazah/akta perkawinan/buku nikah/surat baptis
                </Text>
              </View>
              <Text style={styles.dialogDesc}>
                • Surat kehilangan dari Kepolisian
              </Text>
            </View>
          </View>
          <View>
            <Text style={[styles.dialogDesc, {...FontFamily.notoSansBold}]}>
              2. Untuk Paspor Rusak
            </Text>
            <View style={styles.dialogBulletPointWrapper}>
              <Text style={styles.dialogDesc}>• e-КТР</Text>
              <Text style={styles.dialogDesc}>• Kartu Keluarga</Text>
              <View style={styles.dialogLongBulletPointWrapper}>
                <Text>•</Text>
                <Text style={styles.dialogDesc}>
                  Akta kelahiran/ijazah/akta perkawinan/buku nikah/surat baptis
                </Text>
              </View>
              <Text style={styles.dialogDesc}>• Paspor lama</Text>
            </View>
          </View>
          <Text style={[styles.dialogDesc, {...FontFamily.notoSansBold}]}>
            Harap membawa semua dokumen asli dan fotokopi dalam kertas A4.
          </Text>
          <View>
            <Button
              style={styles.buttonContained}
              mode="contained"
              textColor={Colors.neutral100.color}
              onPress={onBackToHome}>
              Kembali ke Beranda
            </Button>
            <Button
              style={styles.buttonOutlined}
              mode="outlined"
              textColor={Colors.primary30.color}
              onPress={onBackToFirstStep}>
              Kembali ke Tahap Awal
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
    lineHeight: 22,
    color: Colors.primary30.color,
  },
  dialogBulletPointWrapper: {
    marginStart: 8,
    gap: 6,
    marginTop: 8,
  },
  dialogLongBulletPointWrapper: {
    flexDirection: 'row',
    gap: 6,
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

export default DialogLostOrDamagedPassport;
