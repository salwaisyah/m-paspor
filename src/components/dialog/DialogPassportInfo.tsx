import {StyleSheet, Text, View} from 'react-native';
import {Dialog, Portal, Button} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const DialogPassportInfo = (props: Props) => {
  const {visible, onClose} = props;

  return (
    <Portal>
      <Dialog visible={visible} style={styles.dialogContainer}>
        <View style={styles.dialogContentContainer}>
          <Text style={styles.dialogDesc}>
            Keterangan di dalamnya menjadi tidak jelas atau memberi kesan yang
            tidak pantas lagi sebagai dokumen resmi (pasal 36 ayat (1) huruf
            (d.2) Permenkumham RI no 8 tahun 2014 ttg Paspor Biasa dan SPLP)
          </Text>
          <Text style={styles.dialogDesc}>Informasi Keadaan Paspor:</Text>
          <Text style={[styles.dialogDesc, {...FontFamily.notoSansBold}]}>
            1. Keadaan Baik
          </Text>
          <Text style={styles.dialogDesc}>
            Paspor masih dalam keadaan baik atau sangat baik, tanpa ada
            kerusakan apapun.
          </Text>
          <Text style={[styles.dialogDesc, {...FontFamily.notoSansBold}]}>
            2. Keadaan Rusak
          </Text>
          <Text style={styles.dialogDesc}>
            Paspor ada kerusakan (contoh: tersobek, terbakar, dll) dan bagian
            data diri tidak dapat terbaca.
          </Text>
          <Text style={[styles.dialogDesc, {...FontFamily.notoSansBold}]}>
            3. Hilang
          </Text>
          <Text style={styles.dialogDesc}>
            Paspor hilang dan tidak dapat ditemukan karena suatu keadaan
            (tertinggal, dicuri, dan lain-lain).
          </Text>
          <View>
            <Button
              style={styles.buttonContinue}
              mode="contained"
              textColor={Colors.neutral100.color}
              onPress={() => {
                onClose();
              }}>
              Lanjut
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
  dialogDescRed: {
    ...FontFamily.notoSansBold,
    color: Colors.indicatorRed.color,
    includeFontPadding: false,
  },
  buttonContinue: {
    backgroundColor: Colors.primary30.color,
    marginTop: 12,
  },
});

export default DialogPassportInfo;
