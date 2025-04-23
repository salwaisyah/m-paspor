import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Accordion from '../../components/Accordion';
import FontFamily from '../../../assets/styles/FontFamily';

type ApplicationGuideScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ApplicationGuide'
>;

function ApplicationGuideScreen() {
  const navigation = useNavigation<ApplicationGuideScreenNavigationProp>();

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
        <Text style={styles.appBarTitle}>Panduan Aplikasi</Text>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Accordion title="Registrasi Akun">
            <Text style={styles.textContentDesc}>
              Untuk dapat masuk ke M-Paspor, Anda diharuskan memiliki akun
              dengan cara mendaftar ke aplikasi dengan cara sebagai berikut:
            </Text>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>1.</Text>
              <Text style={styles.textContentDesc}>
                Buka M-Paspor menampilkan halaman login;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>2.</Text>
              <Text style={styles.textContentDesc}>Pilih Daftar Akun;</Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>3.</Text>
              <Text style={styles.textContentDesc}>
                Input data pendaftaran akun;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>4.</Text>
              <Text style={styles.textContentDesc}>
                Input kode OTP yang terkirim melalui email (pastikan email aktif
                yang digunakan), kemudian klik "Aktivasi" maka akun sudah dapat
                digunakan dan dapat untuk login ke aplikasi.
              </Text>
            </View>
          </Accordion>
          <Accordion title="Login">
            <Text style={styles.textContentDesc}>
              Setelah berhasil melakukan registrasi, anda sudah dapat masuk ke
              M-Paspor dengan cara sebagai berikut:
            </Text>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>1.</Text>
              <Text style={styles.textContentDesc}>
                Buka M-Paspor menampilkan halaman login;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>2.</Text>
              <Text style={styles.textContentDesc}>Masukkan Email;</Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>3.</Text>
              <Text style={styles.textContentDesc}>Masukkan Kata Sandi;</Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>4.</Text>
              <Text style={styles.textContentDesc}>Tekan tombol Masuk;</Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>5.</Text>
              <Text style={styles.textContentDesc}>
                <Text style={{...FontFamily.notoSansItalic}}>
                  Security check
                </Text>{' '}
                berbasis verifikasi CAPTCHA;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>6.</Text>
              <Text style={styles.textContentDesc}>
                Jika login berhasil, Anda akan langsung diarahkan ke halaman
                Beranda.
              </Text>
            </View>
          </Accordion>
          <Accordion title="Beranda">
            <Text style={styles.textContentDesc}>
              Jika login berhasil, akan muncul tampilan beranda aplikasi. Pada
              beranda, aplikasi M-Paspor menampilkan{' '}
              <Text style={{...FontFamily.notoSansItalic}}>banner</Text>, menu
              permohonan pengajuan paspor, buku panduan, informasi EAZY
              Passport, dan status permohonan.
            </Text>
          </Accordion>
          <Accordion title="Pengajuan Permohonan Paspor">
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>1.</Text>
              <Text style={styles.textContentDesc}>
                Pilih permohonan paspor reguler atau percepatan;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>2.</Text>
              <Text style={styles.textContentDesc}>
                Pengisian Kuesioner Layanan Permohonan Peruntukan Paspor;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>3.</Text>
              <Text style={styles.textContentDesc}>
                Pemohon mengambil atau mengunggah foto KTP sebagai persyaratan
                permohonan paspor;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>4.</Text>
              <Text style={styles.textContentDesc}>
                Klik Pilih Foto, lalu akan muncul form untuk mengisi Nama,
                Tanggal Lahir, dan NIK Pemohon;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>5.</Text>
              <Text style={styles.textContentDesc}>
                Selanjutnya yaitu pengisian kuesioner. Pada tahap ini akan
                terdapat beberapa pertanyaan, yang menentukan jenis paspor apa
                yang kita butuhkan seperti berikut:
              </Text>
            </View>
            <View style={styles.alphabetListWrapper}>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  a.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon mengisi data riwayat kepemilikan paspor (sudah atau
                  belum pernah memiliki paspor);
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  b.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon mengisi tujuan permohonan paspor. Untuk pengajuan
                  permohonan dengan tujuan Haji dan Umroh tidak memerlukan
                  upload surat rekomendasi dari Kementerian Agama (sebelumnya
                  diwajibkan mengisi nomor surat rekomendasi Kemenag di data
                  tambahan pemohon);
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  c.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon mengisi data negara tujuan;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  d.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon mengisi data tempat tinggal di negara tujuan;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  e.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon mengisi kuesioner rencana lama tinggal di luar negeri;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  f.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon mengisi data identitas keluarga atau kerabat di
                  Indonesia;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  g.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon mengisi data identitas keluarga atau kerabat di negara
                  tujuan (jika ada).
                </Text>
              </View>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>6.</Text>
              <Text style={styles.textContentDesc}>
                Tahap selanjutnya, pemohon mengunggah dokumen persyaratan yang
                diperlukan seperti berikut:
              </Text>
            </View>
            <View style={styles.alphabetListWrapper}>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  a.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon mengisi data tempat lahir, tanggal lahir, dan jenis
                  kelamin (wajib). Kemudian Pemohon juga mengunggah data Kartu
                  keluarga dan akta kelahiran/ ijazah/akta perkawinan/buku
                  nikah/surat baptis (wajib);
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  b.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon mengunggah data tanggal penerbitan KTP, data
                  kewarganegaraan, data alamat sesuai KTP, dan data alamat
                  sekarang;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  c.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon mengisi data identitas ibu (wajib), dan ayah (tidak
                  wajib) serta data pasangan (tidak wajib).
                </Text>
              </View>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>7.</Text>
              <Text style={styles.textContentDesc}>
                Terlihat jenis permohonan dan data pemohon yang sudah diinput,
                kemudian klik Lanjut;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>8.</Text>
              <Text style={styles.textContentDesc}>
                Pemohon memilih lokasi, jenis paspor, dan jadwal pengambilan
                paspor seperti berikut:
              </Text>
            </View>
            <View style={styles.alphabetListWrapper}>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  a.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon memilih lokasi kantor imigrasi yang dituju untuk
                  melakukan permohonan dan pengambilan paspor;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  b.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon memilih jenis paspor;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  c.
                </Text>
                <Text style={styles.textContentDesc}>
                  Pemohon memilih tanggal dan waktu kedatangan berdasarkan kuota
                  yang tersedia dari kantor imigrasi yang terpilih sebelumnya;
                </Text>
              </View>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>9.</Text>
              <Text style={styles.textContentDesc}>
                Selanjutnya, tahap finalisasi. Pemohon memastikan data yang
                diinput sudah benar. Jika sudah, klik "Ya, lanjutkan". Namun,
                jika belum yakin, bisa klik "Tidak, saya ingin mengubah data"
                untuk mengedit data;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>10.</Text>
              <Text style={styles.textContentDesc}>
                Pemohon akan melakukan pembayaran dan kemudian sistem akan
                melakukan pengecekan dan menampilkan status pembayaran;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>11.</Text>
              <Text style={styles.textContentDesc}>
                Pemohon melakukan pembayaran dengan payment gateway atau kode
                billing yang tercantum pada aplikasi dan dokumen PDF pembayaran;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>12.</Text>
              <Text style={styles.textContentDesc}>
                Jika sudah terbayar, maka permohonan akan berubah menjadi warna
                hijau (indikator permohonan terbayar). Kemudian, Pemohon dapat
                mendatangi kantor imigrasi sesuai tanggal kedatangan dengan
                membawa bukti terbayar pada aplikasi ini.
              </Text>
            </View>
          </Accordion>
          <Accordion title="Ubah Jadwal Permohonan">
            <Text style={styles.textContentDesc}>
              Pemohon dapat mengajukan perubahan jadwal (
              <Text style={{...FontFamily.notoSansItalic}}>reschedule</Text>)
              permohonan dengan ketentuan sebagai berikut:
            </Text>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>1.</Text>
              <Text style={styles.textContentDesc}>
                <Text style={{...FontFamily.notoSansItalic}}>Reschedule</Text>{' '}
                hanya untuk permohonan yang telah terbayar;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>2.</Text>
              <Text style={styles.textContentDesc}>
                Pemohon tidak dapat{' '}
                <Text style={{...FontFamily.notoSansItalic}}>reschedule</Text>{' '}
                dengan tanggal yang sama dengan pengajuan awal;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>3.</Text>
              <Text style={styles.textContentDesc}>
                Batas{' '}
                <Text style={{...FontFamily.notoSansItalic}}>reschedule</Text>{' '}
                hanya 1x dan hanya 30 hari dari tanggal pembayaran pertama.
              </Text>
            </View>
          </Accordion>
          <Accordion title="Riwayat Permohonan">
            <Text style={styles.textContentDesc}>
              Menu Riwayat menampilkan daftar riwayat permohonan dengan status
              yang sudah terbayar, menunggu pembayaran, draft, atau permohonan
              kadaluarsa.
            </Text>
          </Accordion>
        </View>
      </ScrollView>
    </View>
  );
}

export default ApplicationGuideScreen;
