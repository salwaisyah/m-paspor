import {StyleSheet, Text, View} from 'react-native';
import {Dialog, Portal, Button} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

type Props = {
  visible: boolean;
  onSubmitSuccess: () => void;
};

const DialogSubmitSuccess = (props: Props) => {
  const {visible, onSubmitSuccess} = props;

  return (
    <Portal>
      <Dialog visible={visible} style={styles.dialogContainer}>
        <Dialog.Title style={styles.dialogTitle}>
          Pengajuan Permohonan Sukses!
        </Dialog.Title>
        <View style={styles.dialogContentContainer}>
          <Text style={styles.dialogDesc}>
            Permohonan telah diajukan, klik kartu pada beranda untuk melihat
            kode layanan, kode QR, kode billing, serta tata cara pembayarannya.
          </Text>
          <View>
            <Button
              style={styles.buttonContinue}
              mode="contained"
              textColor={Colors.neutral100.color}
              onPress={() => {
                onSubmitSuccess();
              }}>
              Oke
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
    ...FontFamily.notoSansBold,
    includeFontPadding: false,
  },
  dialogDesc: {
    fontSize: 14,
    ...FontFamily.notoSansRegular,
    lineHeight: 22,
    includeFontPadding: false,
    color: Colors.primary30.color,
  },
  buttonContinue: {
    backgroundColor: Colors.primary30.color,
    marginTop: 12,
  },
});

export default DialogSubmitSuccess;
