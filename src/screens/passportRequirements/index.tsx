import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Accordion from '../../components/Accordion';

type PassportRequirementsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PassportRequirements'
>;

function PassportRequirementsScreen() {
  const navigation = useNavigation<PassportRequirementsScreenNavigationProp>();
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
        <Text style={styles.appBarTitle}>Persyaratan Paspor</Text>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Accordion title="Persyaratan Permohonan Paspor">
            <Text style={styles.textContentDesc}>
              Bagi WNI yang berdomisili atau berada di wilayah Indonesia,
              persyaratan paspor baru sebagai berikut:
            </Text>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>1.</Text>
              <Text style={styles.textContentDesc}>
                e-KTP atau Surat Keterangan Perekaman e-KTP dari Disdukcapil
                yang masih berlaku;
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>2.</Text>
              <Text style={styles.textContentDesc}>Kartu Keluarga;</Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>3.</Text>
              <Text style={styles.textContentDesc}>
                Akta kelahiran, akta perkawinan atau buku nikah, ijazah, atau
                surat baptis (cukup salah satu, wajib memuat data: nama, tanggal
                lahir, tempat lahir, dan nama orang tua).
              </Text>
            </View>
          </Accordion>
          <Accordion title="Persyaratan Penggantian Paspor">
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>1.</Text>
              <Text style={styles.textContentDesc}>
                Bagi yang memiliki paspor lama penerbitan di dalam negeri sejak
                tahun 2009, melampirkan:
              </Text>
            </View>
            <View style={styles.alphabetListWrapper}>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  a.
                </Text>
                <Text style={styles.textContentDesc}>
                  e-KTP atau Surat Keterangan Perekaman e-KTP dari Disdukcapil
                  yang masih berlaku;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  b.
                </Text>
                <Text style={styles.textContentDesc}>Paspor lama.</Text>
              </View>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>2.</Text>
              <Text style={styles.textContentDesc}>
                Bagi yang memiliki paspor lama penerbitan luar negeri atau
                penerbitan dalam negeri di bawah tahun 2009, melampirkan:
              </Text>
            </View>
            <View style={styles.alphabetListWrapper}>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  a.
                </Text>
                <Text style={styles.textContentDesc}>
                  e-KTP atau Surat Keterangan Perekaman e-KTP dari Disdukcapil
                  yang masih berlaku;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  b.
                </Text>
                <Text style={styles.textContentDesc}>Kartu Keluarga;</Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  c.
                </Text>
                <Text style={styles.textContentDesc}>
                  Akta kelahiran, akta perkawinan atau buku nikah, ijazah, atau
                  surat baptis (cukup salah satu, wajib memuat data: nama,
                  tanggal lahir, tempat lahir, dan nama orang tua);
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  d.
                </Text>
                <Text style={styles.textContentDesc}>Paspor lama.</Text>
              </View>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>3.</Text>
              <Text style={styles.textContentDesc}>
                Persyaratan penggantian paspor rusak sebagai berikut:
              </Text>
            </View>
            <View style={styles.alphabetListWrapper}>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  a.
                </Text>
                <Text style={styles.textContentDesc}>
                  e-KTP atau Surat Keterangan Perekaman e-KTP dari Disdukcapil
                  yang masih berlaku;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  b.
                </Text>
                <Text style={styles.textContentDesc}>Kartu Keluarga;</Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  c.
                </Text>
                <Text style={styles.textContentDesc}>
                  Akta kelahiran, akta perkawinan atau buku nikah, ijazah, atau
                  surat baptis (cukup salah satu, wajib memuat data: nama,
                  tanggal lahir, tempat lahir, dan nama orang tua);
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  d.
                </Text>
                <Text style={styles.textContentDesc}>Paspor yang rusak.</Text>
              </View>
            </View>
            <Text style={styles.textContentDesc}>
              Untuk pelayanan penggantian paspor rusak belum dapat dilayani
              melalui aplikasi M-Paspor. Silakan anda datang langsung ke Kantor
              Imigrasi terdekat untuk melaksanakan pemeriksaan terlebih dahulu
              pada Bidang/Seksi Intelijen dan Penindakan Keimigrasian.
            </Text>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>4.</Text>
              <Text style={styles.textContentDesc}>
                Persyaratan penggantian paspor hilang sebagai berikut:
              </Text>
            </View>
            <View style={styles.alphabetListWrapper}>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  a.
                </Text>
                <Text style={styles.textContentDesc}>
                  e-KTP atau Surat Keterangan Perekaman e-KTP dari Disdukcapil
                  yang masih berlaku;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  b.
                </Text>
                <Text style={styles.textContentDesc}>Kartu Keluarga;</Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  c.
                </Text>
                <Text style={styles.textContentDesc}>
                  Akta kelahiran, akta perkawinan atau buku nikah, ijazah, atau
                  surat baptis (cukup salah satu, wajib memuat data: nama,
                  tanggal lahir, tempat lahir, dan nama orang tua);
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  d.
                </Text>
                <Text style={styles.textContentDesc}>
                  Surat Lapor Kehilangan dari Kepolisian;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  e.
                </Text>
                <Text style={styles.textContentDesc}>
                  Fotokopi paspor lama yang hilang apabila ada.
                </Text>
              </View>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>5.</Text>
              <Text style={styles.textContentDesc}>
                Persyaratan penggantian paspor hilang atau rusak karena keadaan
                kahar (banjir, gempa bumi, kebakaran, huru hara, atau bencana
                lainnya yang ditetapkan instansi yang berwenang) sebagai
                berikut:
              </Text>
            </View>
            <View style={styles.alphabetListWrapper}>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  a.
                </Text>
                <Text style={styles.textContentDesc}>
                  e-KTP atau Surat Keterangan Perekaman e-KTP dari Disdukcapil
                  yang masih berlaku;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  b.
                </Text>
                <Text style={styles.textContentDesc}>Kartu Keluarga;</Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  c.
                </Text>
                <Text style={styles.textContentDesc}>
                  Akta kelahiran, akta perkawinan atau buku nikah, ijazah, atau
                  surat baptis (cukup salah satu, wajib memuat data: nama,
                  tanggal lahir, tempat lahir, dan nama orang tua);
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  d.
                </Text>
                <Text style={styles.textContentDesc}>
                  Surat Permohonan pengenaan tarif Rp0,00 (nol Rupiah) atas
                  Layanan Biaya Beban Paspor Hilang atau Rusak karena Keadaan
                  Kahar;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  e.
                </Text>
                <Text style={styles.textContentDesc}>
                  Surat Keterangan dari kelurahan/ otoritas yang berwenang
                  sesuai domisili yang menerangkan telah terjadinya keadaan
                  kahar;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  f.
                </Text>
                <Text style={styles.textContentDesc}>
                  Paspor lama yang rusak bagi penggantian paspor rusak;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  g.
                </Text>
                <Text style={styles.textContentDesc}>
                  Surat Lapor Kehilangan dari Kepolisian bagi penggantian paspor
                  hilang;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  h.
                </Text>
                <Text style={styles.textContentDesc}>
                  Fotokopi paspor lama yang hilang apabila ada bagi penggantian
                  paspor hilang.
                </Text>
              </View>
            </View>
            <Text style={styles.textContentDesc}>
              Untuk pelayanan penggantian paspor hilang atau rusak karena
              keadaan kahar belum dapat dilayani melalui Aplikasi M-Paspor.
              Silakan Anda datang langsung ke Kantor Imigrasi terdekat untuk
              melaksanakan pemeriksaan terlebih dahulu pada Bidang/ Seksi
              Intelijen dan Penindakan Keimigrasian.
            </Text>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>6.</Text>
              <Text style={styles.textContentDesc}>
                Bagi anak WNI yang berdomisili atau berada di wilayah Indonesia,
                persyaratan paspor sebagai berikut:
              </Text>
            </View>
            <View style={styles.alphabetListWrapper}>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  a.
                </Text>
                <Text style={styles.textContentDesc}>
                  e-KTP atau Surat Keterangan Perekaman e-KTP dari Disdukcapil
                  yang masih berlaku
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  b.
                </Text>
                <Text style={styles.textContentDesc}>Kartu Keluarga;</Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  c.
                </Text>
                <Text style={styles.textContentDesc}>
                  Akta kelahiran, akta perkawinan atau buku nikah, ijazah, atau
                  surat baptis (cukup salah satu, wajib memuat data: nama,
                  tanggal lahir, tempat lahir, dan nama orang tua);
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  d.
                </Text>
                <Text style={styles.textContentDesc}>
                  Akta perkawinan atau buku nikah orang tua;
                </Text>
              </View>
              <View style={styles.textContentWrapper}>
                <Text style={[styles.textContentDesc, styles.listFlex]}>
                  e.
                </Text>
                <Text style={styles.textContentDesc}>
                  Paspor lama bagi yang telah memiliki paspor.
                </Text>
              </View>
            </View>
          </Accordion>
          <Accordion title="Informasi Tambahan">
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>1.</Text>
              <Text style={styles.textContentDesc}>
                Bagi pemohon paspor untuk keperluan ibadah haji/umrah, wajib
                melampirkan Surat Rekomendasi dari Kementerian Agama.
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>2.</Text>
              <Text style={styles.textContentDesc}>
                Bagi pemohon paspor untuk keperluan bekerja di luar negeri,
                wajib melampirkan Surat Rekomendasi dari Dinas Tenaga Kerja
                Provinsi atau Kabupaten/ Kota.
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>3.</Text>
              <Text style={styles.textContentDesc}>
                Bagi pemohon paspor untuk keperluan magang dan program bursa
                kerja khusus, wajib melampirkan Surat Rekomendasi dari Direktur
                Jenderal Pembinaan Pelatihan dan Produktivitas Kementerian
                Tenaga Kerja.
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>4.</Text>
              <Text style={styles.textContentDesc}>
                Bagi WNI yang telah mengganti nama wajib melampirkan surat
                penetapan ganti nama dari pejabat yang berwenang.
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>5.</Text>
              <Text style={styles.textContentDesc}>
                Bagi WNA yang telah memperoleh kewarganegaraan Indonesia wajib
                melampirkan surat pewarganegaraan Indonesia bagi Orang Asing
                yang memperoleh kewarganegaraan Indonesia melalui
                pewarganegaraan atau penyampaian pernyataan untuk memilih
                kewarganegaraan sesuai dengan ketentuan peraturan
                perundang-undangan.
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>6.</Text>
              <Text style={styles.textContentDesc}>
                Persyaratan permohonan paspor dilampirkan pada Aplikasi M-Paspor
                dengan foto atau scan berkas asli.
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>7.</Text>
              <Text style={styles.textContentDesc}>
                Berkas asli persyaratan permohonan paspor wajib dibawa pada saat
                kedatangan di Kantor Imigrasi.
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>8.</Text>
              <Text style={styles.textContentDesc}>
                Petugas Imigrasi dapat meminta kelengkapan berkas lain apabila
                dipandang perlu.
              </Text>
            </View>
            <View style={styles.textContentWrapper}>
              <Text style={[styles.textContentDesc, styles.listFlex]}>9.</Text>
              <Text style={styles.textContentDesc}>
                Pemohon paspor bertanggung jawab atas kebenaran dan keabsahan
                berkas, data dan keterangan yang diberikan dalam permohonan
                paspor. Setiap orang yang memberikan data yang tidak sah atau
                keterangan yang tidak benar dalam permohonan paspor dipidana
                dengan pidana penjara paling lama 5 tahun dan pidana denda
                paling banyak Rp 500.000.000,- sesuai dengan ketentuan Pasal 126
                huruf c Undang-Undang Nomor 6 Tahun 2011 tentang Keimigrasian.
              </Text>
            </View>
          </Accordion>
        </View>
      </ScrollView>
    </View>
  );
}

export default PassportRequirementsScreen;
