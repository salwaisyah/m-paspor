import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../assets/styles/Colors';
import TextInputComponent from '../../components/TextInput';
import {Button, Dialog, PaperProvider, Portal} from 'react-native-paper';

type CloseAccountScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CloseAccount'
>;

function CloseAccountScreen() {
  const navigation = useNavigation<CloseAccountScreenNavigationProp>();
  const closeAccountDescItems = [
    'Jika Anda membuat akun dengan email atau nomor telepon yang sama, Anda harus melakukan daftar akun ulang.',
    'Beberapa data terkait transaksi dapat disimpan oleh M-Paspor berdasarkan ketentuan peraturan perundang-undangan.',
  ];
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleCloseAccount = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={styles.container}>
      <PaperProvider>
        <View style={styles.contentContainer}>
          <StatusBar
            backgroundColor={visible ? '#ADADAF' : Colors.neutral100.color}
            barStyle={visible ? 'light-content' : 'dark-content'}
          />
          <View>
            <View style={styles.appBarContainer}>
              <Icon
                name="arrow-left"
                size={24}
                style={styles.appBarIcon}
                color={Colors.secondary30.color}
                onPress={() => navigation.goBack()}
              />
              <Text style={styles.appBarTitle}>Tutup Akun</Text>
            </View>

            <View style={styles.closeAccountInfoContainer}>
              <Text style={styles.closeAccountTitle}>
                Hal yang terjadi setelah tutup akun
              </Text>
              <View>
                {closeAccountDescItems.map((item, index) => (
                  <View key={index} style={styles.closeAccountDescContainer}>
                    <Text style={styles.closeAccountNumber}>{index + 1}.</Text>
                    <Text style={styles.closeAccountDesc}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.closeAccountReasonContainer}>
              <TextInputComponent
                title="Kenapa Anda ingin tutup akun?"
                placeholder="Tuliskan alasan Anda menutup akun"
                isRequired
                supportText="0/100 karakter"
                containerHeight={90}
                isMultiline
              />
            </View>
          </View>
          <View style={styles.closeAccountButtonContainer}>
            <Button
              mode="contained"
              style={styles.buttonContinue}
              textColor={Colors.neutral100.color}
              onPress={showDialog}>
              Lanjut
            </Button>
            <Button
              mode="outlined"
              textColor={Colors.primary30.color}
              style={styles.butttonBack}
              onPress={() => navigation.goBack()}>
              Kembali
            </Button>
          </View>
        </View>
        <Portal>
          <Dialog visible={visible} style={styles.dialogContainer}>
            <Dialog.Title style={styles.dialogTitle}>
              Apakah Anda yakin akan menutup akun?
            </Dialog.Title>
            <View style={styles.dialogButtonContainer}>
              <Button
                style={styles.buttonApproveCloseAccount}
                mode="contained"
                textColor={Colors.neutral100.color}
                onPress={handleCloseAccount}>
                Ya, lanjut tutup akun
              </Button>
              <Button
                style={styles.buttonCancelCloseAccount}
                mode="outlined"
                textColor={Colors.indicatorRed.color}
                onPress={hideDialog}>
                Tidak, jangan tutup akun
              </Button>
            </View>
          </Dialog>
        </Portal>
      </PaperProvider>
    </View>
  );
}

export default CloseAccountScreen;
