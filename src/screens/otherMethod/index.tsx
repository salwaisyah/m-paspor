import {ScrollView, StatusBar, View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../assets/styles/Colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import Accordion from '../../components/Accordion';

type OtherMethodScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OtherMethod'
>;

const bankPaymentSteps = [
  'Pilih menu Bayar/Beli/Pembayaran',
  'Pilih menu Bayar Telpon',
  'Pilih menu Telkom',
  'Masukkan 12 digit kode pembayaran (021xxxxxxxxx) yang diterima di kolom Kode Area + No. Telepon',
  'Pilih Ya untuk melanjutkan proses selanjutnya',
  'Muncul konfirmasi permintaan dan pastikan sudah benar',
  'Pilih Ya untuk melanjutkan pembayaran',
  'Transaksi selesai dan Anda menerima notifikasi transaksi berhasil',
];

const posPegadaianAlfamartYomartPaymentSteps = [
  'Customer menginformasikan kepada petugas Modern Retail Channel/ PT. POS/ PEGADAIAN/ALFAMART/YOMART untuk membayar menggunakan Kode Bayar Telkom/Finpay',
  'Petugas akan pilih menu Bayar/Beli/Pembayaran',
  'Petugas pilih menu bayar Telpon/Telkom/Finpay',
  'Customer menginformasikan 12 Digit Kode Pembayaran (021xxxxxxxxx) untuk diinput petugas',
  'Petugas Pilih Ya untuk melanjutkan proses selanjutnya',
  'Muncul konfirmasi permintaan dan pastikan sudah benar',
  'Petugas Pilih "Ya" untuk melanjutkan pembayaran',
  'Transaksi selesai dan Petugas menerima notifikasi transaksi berhasil',
];

const virtualAccountDataList = [
  {
    title: 'Mandiri',
    steps: ['ATM', 'Mobile Banking', 'Internet Banking'],
  },
  {
    title: 'BRI',
    steps: ['ATM', 'Mobile Banking', 'Internet Banking'],
  },
  {
    title: 'BNI',
    steps: [
      'ATM',
      'Mobile Banking',
      'Internet Banking',
      'Transfer dari Bank Lain',
    ],
  },
  {
    title: 'Permata',
    steps: ['ATM', 'Mobile Banking', 'Internet Banking'],
  },
  {
    title: 'BJB',
    steps: [
      'ATM',
      'Mobile Banking',
      'SMS Banking BJB',
      'Internet Banking BJB',
      'Teller',
    ],
  },
  {
    title: 'BCA',
    steps: [
      'ATM',
      'M-BCA',
      'Klik BCA Individual',
      'Klik BCA Bisnis',
      'M-BCA (Menu SIM card)',
    ],
  },
  {
    title: 'BNC',
    steps: ['Neobank Hematpay'],
  },
  {
    title: 'BSI',
    steps: [
      'BSI Mobile & BSI NET Banking',
      'ATM BSI',
      'Teller',
      'ATM/M-Banking Bank Lain',
    ],
  },
  {
    title: 'BTN',
    steps: ['ATM BTN', 'Internet Banking', 'Mobile Banking BTN'],
  },
  {
    title: 'Mega',
    steps: [
      'ATM Mega',
      'M-Smile Mega',
      'Internet Banking Mega',
      'ATM/Mobile Banking/Internet Banking Bank Lain (ATM Bersama/Prima/BI-FAST)',
    ],
  },
];

function OtherMethodScreen() {
  const navigation = useNavigation<OtherMethodScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.neutral100.color}
        barStyle="dark-content"
      />
      <View style={styles.appBarContainer}>
        <Icon
          name="arrow-left"
          size={24}
          style={styles.appBarIcon}
          color={Colors.secondary30.color}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.appBarTitle}>Metode Lain</Text>
      </View>
      <ScrollView>
        <View style={styles.otherMethodContentContainer}>
          <Text style={styles.paymentMethodTitle}>Cara Pembayaran</Text>
          <View style={styles.paymentMethodContainer}>
            <View style={styles.paymentMethodOptionTitleWrapper}>
              <Text style={styles.paymentMethodOptionTitle}>1.</Text>
              <Text
                style={[
                  styles.paymentMethodOptionTitle,
                  styles.paymentMethodOptionTitleFlex,
                ]}>
                Bank
              </Text>
            </View>
            <View style={styles.paymentMethodOptionDataContainer}>
              {bankPaymentSteps.map((step, index) => (
                <View key={index} style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    {index + 1}.
                  </Text>
                  <Text style={styles.textContentDesc}>{step}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.paymentMethodContainer}>
            <View style={styles.paymentMethodOptionTitleWrapper}>
              <Text style={styles.paymentMethodOptionTitle}>2.</Text>
              <Text
                style={[
                  styles.paymentMethodOptionTitle,
                  styles.paymentMethodOptionTitleFlex,
                ]}>
                Pos/Pegadaian/Alfamart/Yomart
              </Text>
            </View>
            <View style={styles.paymentMethodOptionDataContainer}>
              {posPegadaianAlfamartYomartPaymentSteps.map((step, index) => (
                <View key={index} style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    {index + 1}.
                  </Text>
                  <Text style={styles.textContentDesc}>{step}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.paymentMethodContainer}>
            <View style={styles.paymentMethodOptionTitleWrapper}>
              <Text style={styles.paymentMethodOptionTitle}>3.</Text>
              <Text
                style={[
                  styles.paymentMethodOptionTitle,
                  styles.paymentMethodOptionTitleFlex,
                ]}>
                Virtual Account
              </Text>
            </View>
            <View style={styles.paymentMethodOptionDataContainer}>
              {virtualAccountDataList.map((bank, bankIndex) => (
                <Accordion key={bankIndex} title={bank.title} titleRegular>
                  <View style={styles.paymentMethodOptionDataWrapper}>
                    {bank.steps.map((step, stepIndex) => (
                      <View key={stepIndex} style={styles.textContentWrapper}>
                        <Text style={[styles.textContentDesc, styles.listFlex]}>
                          {stepIndex + 1}.
                        </Text>
                        <Text style={styles.textContentDesc}>{step}</Text>
                      </View>
                    ))}
                  </View>
                </Accordion>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default OtherMethodScreen;
