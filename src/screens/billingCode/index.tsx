import {ScrollView, StatusBar, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import styles from './styles';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../assets/styles/Colors';
import Accordion from '../../components/Accordion';

type BillingCodeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BillingCode'
>;

const atmDataList = [
  {
    title: 'BCA',
    steps: [
      'Pembayaran',
      'MPN / Pajak',
      'Penerimaan Negara',
      'Masukkan Kode Billing',
    ],
  },
  {
    title: 'BNI',
    steps: [
      'Menu Lainnya',
      'Pembayaran',
      'Pajak/Penerimaan Negara',
      'PajaK/PNBP/BEA & CUKAI',
      'Masukkan Kode Billing',
    ],
  },
  {
    title: 'BRI',
    steps: [
      'Transaksi Lainnya',
      'Pembayaran',
      'Lainnya',
      'MPN',
      'Masukkan Kode Kode Billing',
    ],
  },
  {
    title: 'Mandiri',
    steps: [
      'Bayar/Beli',
      'Penerimaan Negara',
      'Pajak / PNBP / Cukai',
      'Masukkan Kode Billing',
      'Konfirmasi Pembayaran dan klik angka 1',
    ],
  },
];

const mobileAndInternetBankingDataList = [
  {
    title: 'BNI (Mobile Banking)',
    steps: [
      'Masukkan User ID dan M-Pin anda di aplikasi BNI Mobile',
      'Pilih menu Pembayaran',
      'Pilih menu Penerimaan Negara',
      'Masukkan Kode Billing ke kolom nomor tagihan',
      'Konfirmasi pembayaran dan masukkan password transaksi',
      'Print bukti transaksi untuk pengambilan paspor',
    ],
  },
  {
    title: 'BCA (Internet Banking)',
    steps: [
      'Masuk ke https://ibank.klikbca.com',
      'Masukkan User ID dan Pin',
      'Pilih menu Pembayaran',
      'Pilih menu Pajak',
      'Pilih Penerimaan Negara pada kolom jenis pajak',
      'Masukkan kode billing ke kolom kode billing',
      'Konfirmasi pembayaran dan masukkan Key BCA Anda',
      'Print bukti transaksi untuk pengambilan',
    ],
  },
  {
    title: 'BRI (Internet Banking)',
    steps: [
      'Masuk ke https://ib.bri.co.id',
      'Masukkan User ID dan pin',
      'Pilih menu Pembayaran',
      'Pilih menu MPN',
      'Masukkan nomor MPN G3',
      'Konfirmasi pembayaran dan masukkan Password serta M-Token',
      'Print bukti transaksi untuk pengambilan paspor',
    ],
  },
  {
    title: 'BRImo (Mobile Banking)',
    steps: [
      'Login',
      'Masuk ke menu utama',
      'Pilih menu Lainnya',
      'Pilih menu Penerimaan Negara',
      'Masukkan Kode Billing',
      'Konfirmasi pembayaran dan masukkan pin',
      'Print bukti transaksi untuk pengambilan paspor',
    ],
  },
  {
    title: 'Livin’ by Mandiri (Mobile Banking)',
    steps: [
      'Masukkan User ID dan Password Anda di aplikasi',
      'Pilih menu Bayar',
      'Pilih menu Pajak',
      'Pilih Pajak/PNBP/Cukai di kolom Penyedia Jasa',
      'Masukkan Kode Billing dan tekan lanjutkan',
      'Konfirmasi pembayaran dan masukkan pin transaksi',
      'Print bukti transaksi untuk pengambilan paspor',
    ],
  },
  {
    title: 'BSI Mobile (Mobile Banking)',
    steps: [
      'Buka Aplikasi BSI Mobile Banking, pilih menu Bayar',
      'Pilih Penerimaan Negara (MPN)',
      'Pilih Pajak/Cukai/SBSN/Paspor (menu Reinquiry MPN untuk cek jumlah tagihan pajak yang telah dibuat melalui Web MPN)',
      'Masukkan No. Nasabah/No. Tagihan, klik Selanjutnya',
      'Input pin BSI Mobile',
      'Muncul layar konfirmasi, klik Selanjutnya',
      'Transaksi berhasil',
      'Bukti transaksi akan dikirim ke email yang didaftarkan notifikasi BSI Mobile',
    ],
  },
  {
    title: 'BSI Net',
    steps: [
      'Login ke https:// bankbsi.co.id',
      'Pilih menu Pembayaran',
      'Input Aplikasi Pembayaran: Rekening Sumber, Jenis Pembayaran Penerimaan Negara/Pajak/Cukai/SBN, Nomor Pembayaran',
      'Klik Verifikasi Aplikasi Pembayaran',
      'Muncul layar konfirmasi, klik Selanjutnya',
      'Input token & pin otorisasi, klik Submit',
      'Transaksi berhasil',
      'Bukti transaksi akan dikirim ke email yang didaftarkan notifikasi BSI Net',
    ],
  },
];

function BillingCodeScreen() {
  const navigation = useNavigation<BillingCodeScreenNavigationProp>();

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
        <Text style={styles.appBarTitle}>Kode Billing</Text>
      </View>
      <ScrollView>
        <View style={styles.billingCodeCardContainer}>
          <View style={styles.billingCodeContentWrapper}>
            <Text style={styles.billingCodeTextTitle}>Kode Billing</Text>
            <View style={styles.billingCodeIconContentWrapper}>
              <Text style={styles.billingCodeTextNumber}>12345678901234</Text>
              <Icon
                name="content-copy"
                size={16}
                color={Colors.secondary30.color}
              />
            </View>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.billingCodeContentWrapper}>
            <View style={styles.billingCodeIconContentWrapper}>
              <Icon name="tray-arrow-down" size={18} />
              <Text style={styles.billingCodeTextDesc}>
                Unduh PDF Kode Billing Pembayaran Paspor
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.billingCodeDataContentContainer}>
          <Text style={styles.paymentMethodTitle}>Cara Pembayaran</Text>
          <View style={styles.paymentMethodContainer}>
            <View style={styles.paymentMethodOptionTitleWrapper}>
              <Text style={styles.paymentMethodOptionTitle}>1.</Text>
              <Text
                style={[
                  styles.paymentMethodOptionTitle,
                  styles.paymentMethodOptionTitleFlex,
                ]}>
                ATM
              </Text>
            </View>
            <View style={styles.paymentMethodOptionAccordionContainer}>
              {atmDataList.map((atm, atmIndex) => (
                <Accordion key={atmIndex} title={atm.title} titleRegular>
                  <View style={styles.paymentMethodOptionDataWrapper}>
                    {atm.steps.map((step, stepIndex) => (
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
          <View style={styles.paymentMethodContainer}>
            <View style={styles.paymentMethodOptionTitleWrapper}>
              <Text style={styles.paymentMethodOptionTitle}>2.</Text>
              <Text
                style={[
                  styles.paymentMethodOptionTitle,
                  styles.paymentMethodOptionTitleFlex,
                ]}>
                Mobile Banking dan Internet Banking
              </Text>
            </View>
            <View style={styles.paymentMethodOptionAccordionContainer}>
              {mobileAndInternetBankingDataList.map((bank, bankIndex) => (
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

export default BillingCodeScreen;
