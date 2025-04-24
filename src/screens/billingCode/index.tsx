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
              <Accordion title="BCA" titleRegular>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    1.
                  </Text>
                  <Text style={styles.textContentDesc}>Pembayaran</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    2.
                  </Text>
                  <Text style={styles.textContentDesc}>MPN/Pajak</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    3.
                  </Text>
                  <Text style={styles.textContentDesc}>Penerimaan Negara</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    4.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan Kode Billing
                  </Text>
                </View>
              </Accordion>
              <Accordion title="BNI" titleRegular>
                <View>
                  <View style={styles.textContentWrapper}>
                    <Text style={[styles.textContentDesc, styles.listFlex]}>
                      1.
                    </Text>
                    <Text style={styles.textContentDesc}>Menu Lainnya</Text>
                  </View>
                  <View style={styles.textContentWrapper}>
                    <Text style={[styles.textContentDesc, styles.listFlex]}>
                      2.
                    </Text>
                    <Text style={styles.textContentDesc}>Pembayaran</Text>
                  </View>
                  <View style={styles.textContentWrapper}>
                    <Text style={[styles.textContentDesc, styles.listFlex]}>
                      3.
                    </Text>
                    <Text style={styles.textContentDesc}>
                      Pajak/Penerimaan Negara
                    </Text>
                  </View>
                  <View style={styles.textContentWrapper}>
                    <Text style={[styles.textContentDesc, styles.listFlex]}>
                      4.
                    </Text>
                    <Text style={styles.textContentDesc}>
                      PajaK/PNBP/BEA & CUKAI
                    </Text>
                  </View>
                  <View style={styles.textContentWrapper}>
                    <Text style={[styles.textContentDesc, styles.listFlex]}>
                      5.
                    </Text>
                    <Text style={styles.textContentDesc}>
                      Masukkan Kode Billing
                    </Text>
                  </View>
                </View>
              </Accordion>
              <Accordion title="BRI" titleRegular>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    1.
                  </Text>
                  <Text style={styles.textContentDesc}>Transaksi Lainnya</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    2.
                  </Text>
                  <Text style={styles.textContentDesc}>Pembayaran</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    3.
                  </Text>
                  <Text style={styles.textContentDesc}>Lainnya</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    4.
                  </Text>
                  <Text style={styles.textContentDesc}>MPN</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    5.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan Kode Billing
                  </Text>
                </View>
              </Accordion>
              <Accordion title="Mandiri" titleRegular>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    1.
                  </Text>
                  <Text style={styles.textContentDesc}>Transaksi Lainnya</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    2.
                  </Text>
                  <Text style={styles.textContentDesc}>Penerimaan Negara</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    3.
                  </Text>
                  <Text style={styles.textContentDesc}>Pajak/PNBP/Cukai</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    4.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan Kode Billing
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    5.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Konfirmasi Pembayaran dan klik angka 1
                  </Text>
                </View>
              </Accordion>
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
              <Accordion title="BNI (Mobile Banking)" titleRegular>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    1.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan User ID dan M-Pin anda di aplikasi BNI Mobile
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    2.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Pilih menu Pembayaran
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    3.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Pilih menu Penerimaan Negara
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    4.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan Kode Billing ke kolom nomor tagihan
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    5.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Konfirmasi pembayaran dan masukkan password transaksi
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    6.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Print bukti transaksi untuk pengambilan paspor
                  </Text>
                </View>
              </Accordion>
              <Accordion title="BCA (Internet Banking)" titleRegular>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    1.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masuk ke https://ibank.klikbca.com
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    2.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan User ID dan Pin
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    3.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Pilih menu Pembayaran
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    4.
                  </Text>
                  <Text style={styles.textContentDesc}>Pilih menu Pajak</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    5.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Pilih Penerimaan Negara pada kolom jenis pajak
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    6.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan kode billing ke kolom kode billing
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    7.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Konfirmasi pembayaran dan masukkan Key BCA Anda
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    8.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Print bukti transaksi untuk pengambilan
                  </Text>
                </View>
              </Accordion>
              <Accordion title="BRI (Internet Banking)" titleRegular>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    1.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masuk ke https://ib.bri.co.id
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    2.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan User ID dan pin
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    3.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Pilih menu Pembayaran
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    4.
                  </Text>
                  <Text style={styles.textContentDesc}>Pilih menu MPN</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    5.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan nomor MPN G3
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    6.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Konfirmasi pembayaran dan masukkan Password serta M-Token
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    7.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Print bukti transaksi untuk pengambilan paspor
                  </Text>
                </View>
              </Accordion>
              <Accordion title="BRImo (Mobile Banking)" titleRegular>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    1.
                  </Text>
                  <Text style={styles.textContentDesc}>﻿Login</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    2.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masuk ke menu utama
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    3.
                  </Text>
                  <Text style={styles.textContentDesc}>Pilih menu Lainnya</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    4.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Pilih menu Penerimaan Negara
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    5.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan Kode Billing
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    6.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Konfirmasi pembayaran dan masukkan pin
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    7.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Print bukti transaksi untuk pengambilan paspor
                  </Text>
                </View>
              </Accordion>
              <Accordion
                title="Livin’ by Mandiri (Mobile Banking)"
                titleRegular>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    1.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan User ID dan Password Anda di aplikasi
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    2.
                  </Text>
                  <Text style={styles.textContentDesc}>Pilih menu Bayar</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    3.
                  </Text>
                  <Text style={styles.textContentDesc}>Pilih menu Pajak</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    4.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Pilih Pajak/PNBP/Cukai di kolom Penyedia Jasa
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    5.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan Kode Billing dan tekan lanjutkan
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    6.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Konfirmasi pembayaran dan masukkan pin transaksi
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    7.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Print bukti transaksi untuk pengambilan paspor
                  </Text>
                </View>
              </Accordion>
              <Accordion title="BSI Mobile (Mobile Banking)" titleRegular>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    1.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Buka Aplikasi BSI Mobile Banking, pilih menu Bayar
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    2.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Pilih Penerimaan Negara (MPN)
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    3.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Pilih Pajak/Cukai/SBSN/Paspor (menu Reinquiry MPN untuk cek
                    jumlah tagihan pajak yang telah dibuat melalui Web MPN)
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    4.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Masukkan No. Nasabah/No. Tagihan, klik Selanjutnya
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    5.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Input pin BSI Mobile
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    6.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Muncul layar konfirmasi, klik Selanjutnya
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    7.
                  </Text>
                  <Text style={styles.textContentDesc}>Transaksi berhasil</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    8.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Bukti transaksi akan dikirim ke email yang didaftarkan
                    notifikasi BSI Mobile
                  </Text>
                </View>
              </Accordion>
              <Accordion title="BSI Net" titleRegular>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    1.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Login ke https:// bankbsi.co.id
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    2.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Pilih menu Pembayaran
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    3.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Input Aplikasi Pembayaran: Rekening Sumber, Jenis Pembayaran
                    Penerimaan Negara/Pajak/Cukai/SBN, Nomor Pembayaran
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    4.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Klik Verifikasi Aplikasi Pembayaran
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    5.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Muncul layar konfirmasi, klik Selanjutnya
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    6.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Input token & pin otorisasi, klik Submit
                  </Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    7.
                  </Text>
                  <Text style={styles.textContentDesc}>Transaksi berhasil</Text>
                </View>
                <View style={styles.textContentWrapper}>
                  <Text style={[styles.textContentDesc, styles.listFlex]}>
                    8.
                  </Text>
                  <Text style={styles.textContentDesc}>
                    Bukti transaksi akan dikirim ke email yang didaftarkan
                    notifikasi BSI Net
                  </Text>
                </View>
              </Accordion>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default BillingCodeScreen;
