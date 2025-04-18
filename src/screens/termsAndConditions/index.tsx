import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type TermsAndConditionsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

function TermsAndConnditionsScreen() {
  const navigation = useNavigation<TermsAndConditionsScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.appBarContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} style={styles.arrowBackIcon} />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.termsAndConditionsTextWrapper}>
          <Text style={styles.termsAndConditionsTitleText}>
            Syarat & Ketentuan
          </Text>
          <Text style={styles.termsAndConditionsDescText}>
            Panduan pendaftaran dan informasi untuk mengajukan permohonan paspor
          </Text>
        </View>
        <View style={styles.termsAndConditionsDetailWrapper}>
          <Text style={styles.heading}>
            1. Mohon persiapkan terlebih dahulu persyaratan permohonan paspor
            berikut:
          </Text>

          <Text style={styles.subheading}>a. Permohonan paspor baru:</Text>
          <Text style={styles.bullet}>• KTP</Text>
          <Text style={styles.bullet}>• Kartu keluarga</Text>
          <Text style={styles.bullet}>
            • Akta kelahiran/ijazah/buku nikah/akte perkawinan/surat baptis
          </Text>
          <Text style={styles.bullet}>
            • Jika tidak ada, surat keterangan dari instansi
          </Text>

          <Text style={styles.subheading}>
            b. Permohonan penggantian paspor:
          </Text>
          <Text style={styles.bullet}>• KTP</Text>
          <Text style={styles.bullet}>• Paspor lama</Text>

          <Text style={styles.subheading}>
            c. Dokumen tambahan untuk paspor sesuai tujuan:
          </Text>
          <Text style={styles.bullet}>
            1. Haji/Umrah: Surat rekomendasi Kemenag
          </Text>
          <Text style={styles.bullet}>
            2. Belajar di luar negeri: Surat dari lembaga pendidikan
          </Text>
          <Text style={styles.bullet}>
            3. Magang/kerja: Surat rekomendasi Kemnaker
          </Text>

          <Text style={styles.heading}>2. Pernyataan kesesuaian data</Text>
          <Text style={styles.paragraph}>
            Data yang ada pada seluruh dokumen harus sesuai dan dapat
            dipertanggungjawabkan kebenarannya.
          </Text>

          <Text style={styles.heading}>
            3. Aplikasi ini hanya dapat melayani permohonan paspor baru dan
            penggantian
          </Text>
          <Text style={styles.paragraph}>
            Untuk penggantian karena rusak atau hilang, langsung datang ke
            Kantor Imigrasi.
          </Text>

          <Text style={styles.heading}>4. Ketentuan pembayaran</Text>
          <Text style={styles.paragraph}>
            Pembayaran dilakukan terlebih dahulu sesuai pilihan jadwal dan
            kantor.
          </Text>

          <Text style={styles.heading}>5. Perubahan jadwal</Text>
          <Text style={styles.paragraph}>
            Jadwal bisa diubah sebelum kedatangan, tapi tidak bisa dipastikan
            slot tersedia kembali.
          </Text>

          <Text style={styles.heading}>
            6. Kehadiran dan pembatalan otomatis
          </Text>
          <Text style={styles.paragraph}>
            Tidak hadir tanpa konfirmasi akan dibatalkan otomatis dan tidak
            dapat digunakan kembali.
          </Text>

          <Text style={styles.heading}>
            7. Permohonan paspor dapat ditolak dalam hal:
          </Text>
          <Text style={styles.bullet}>• Termasuk dalam daftar pencekalan</Text>
          <Text style={styles.bullet}>• Tersangkut kasus pidana</Text>
          <Text style={styles.bullet}>
            • Hal-hal lain yang dianggap oleh petugas
          </Text>

          <Text style={styles.heading}>8. Tanggung jawab pemohon</Text>
          <Text style={styles.paragraph}>
            Kesalahan data menjadi tanggung jawab pemohon. Biaya yang telah
            dibayarkan tidak dapat dikembalikan.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default TermsAndConnditionsScreen;
