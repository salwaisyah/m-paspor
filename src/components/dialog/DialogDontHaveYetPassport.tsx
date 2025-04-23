import {StyleSheet, Text, View} from 'react-native';
import {Dialog, Portal, Button} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

type Props = {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
};

const DialogDontHaveYetPassport = (props: Props) => {
  const {visible, onClose, onContinue} = props;

  return (
    <Portal>
      <Dialog visible={visible} style={styles.dialogContainer}>
        <Dialog.Title style={styles.dialogTitle}>Peringatan</Dialog.Title>
        <View style={styles.dialogContentContainer}>
          <Text style={styles.dialogDesc}>
            Apabila Anda sudah memiliki paspor atau sudah pernah mengajukan
            permohonan paspor pada Kantor Imigrasi namun Anda memilih permohonan
            paspor baru, maka data anda akan{' '}
            <Text style={styles.dialogDescRed}>tertolak</Text> oleh sistem dan{' '}
            <Text style={styles.dialogDescRed}>
              pembayaran yang telah masuk kas negara tidak dapat dikembalikan.
            </Text>
          </Text>
          <Text style={styles.dialogDesc}>
            Silakan menghubungi hotline atau datang langsung ke Kantor Imigrasi
            terdekat untuk informasi dan arahan lebih lanjut.
          </Text>
          <View>
            <Button
              style={styles.buttonContinue}
              mode="contained"
              textColor={Colors.neutral100.color}
              onPress={() => {
                onClose();
                onContinue();
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

export default DialogDontHaveYetPassport;
