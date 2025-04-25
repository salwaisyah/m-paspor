import {StyleSheet, Text, View} from 'react-native';
import {Dialog, Portal, Button} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const DialogPassportTypeInfo = (props: Props) => {
  const {visible, onClose} = props;

  return (
    <Portal>
      <Dialog visible={visible} style={styles.dialogContainer}>
        <Dialog.Title style={styles.dialogTitle}>
          Jenis dan Manfaat Paspor
        </Dialog.Title>
        <View style={styles.dialogContentContainer}>
          <Text style={[styles.dialogDesc, {...FontFamily.notoSansBold}]}>
            1. Paspor Biasa
          </Text>
          <Text style={styles.dialogDesc}>
            Biaya pemrosesan lebih murah, tersedia di seluruh lokasi Kanim.
            {'\n'}Biaya pembuatan: Rp350.000
          </Text>
          <Text style={[styles.dialogDesc, {...FontFamily.notoSansBold}]}>
            2. Paspor Elektronik
          </Text>
          <Text style={styles.dialogDesc}>
            Terdapat chip pada cover paspor yang menyimpan data pemegang paspor
            sehingga meningkatkan fitur keamanan, tersedia di 35 Kanim.{'\n'}
            Biaya pembuatan: Rp650.000
          </Text>
          <Text style={[styles.dialogDesc, {...FontFamily.notoSansBold}]}>
            3. Paspor Elektronik Polikarbonat
          </Text>
          <Text style={styles.dialogDesc}>
            Berbahan polikarbonat (PC) pada halaman data pemegang paspor
            (halaman 2) yang memiliki fitur keamanan tinggi dan lebih kuat,
            tersedia di Kanim Jakarta Selatan, Kanim Jakarta Barat, dan Kanim
            Soekarno Hatta.{'\n'}Biaya pembuatan: Rp650.000
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
  dialogTitle: {
    fontSize: 22,
    color: Colors.secondary30.color,
  },
  dialogDesc: {
    fontSize: 14,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    color: Colors.primary30.color,
    lineHeight: 22,
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

export default DialogPassportTypeInfo;
