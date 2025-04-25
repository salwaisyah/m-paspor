import {StyleSheet, Text, View} from 'react-native';
import {Dialog, Portal, Button} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const DialogCivilStatusDocumentsInfo = (props: Props) => {
  const {visible, onClose} = props;

  return (
    <Portal>
      <Dialog visible={visible} style={styles.dialogContainer}>
        <View style={styles.dialogContentContainer}>
          <Text style={styles.dialogDesc}>
            Dokumen identitas diri harus memuat nama, tempat tanggal lahir, dan
            nama orang tua.
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
    lineHeight: 22,
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

export default DialogCivilStatusDocumentsInfo;
