import React from 'react';
import {Pressable, ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

type TermsAndConditionsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

function TermsAndConnditionsScreen() {
  const navigation = useNavigation<TermsAndConditionsScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.neutral100.color}
        barStyle="dark-content"
      />
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
        <View style={styles.termsAndConditionsDetailInfoContainer}>
          <View>
            <View style={styles.titleListContainer}>
              <Text style={styles.titleListNumber}>1.</Text>
              <Text style={styles.titleListDesc}>
                Mohon persiapkan terlebih dahulu persyaratan permohonan paspor,
                yaitu:
              </Text>
            </View>
            <View style={styles.AlphabetListWrapper}>
              <View>
                <View style={styles.AlphabetListContainer}>
                  <Text style={styles.AlphabetList}>a.</Text>
                  <Text style={styles.AlphabetListDesc}>
                    Permohonan paspor baru:
                  </Text>
                </View>
                <View style={styles.bulletListWrapper}>
                  <View style={styles.firstBulletListContainer}>
                    <Text style={styles.bulletList}>•</Text>
                    <Text style={styles.bulletListDesc}>KTP</Text>
                  </View>
                  <View style={styles.firstBulletListContainer}>
                    <Text style={styles.bulletList}>•</Text>
                    <Text style={styles.bulletListDesc}>Kartu Keluarga</Text>
                  </View>
                  <View style={styles.firstBulletListContainer}>
                    <Text style={styles.bulletList}>•</Text>
                    <Text style={styles.bulletListDesc}>
                      Akta kelahiran/ijazah/buku nikah/akta perkawinan/surat
                      baptis yang memuat data nama, tempat dan tanggal lahir,
                      dan nama orang tua
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.AlphabetListContainer}>
                  <Text style={styles.AlphabetList}>b.</Text>
                  <Text style={styles.AlphabetListDesc}>
                    Permohonan penggantian paspor:
                  </Text>
                </View>
                <View style={styles.bulletListWrapper}>
                  <View style={styles.firstBulletListContainer}>
                    <Text style={styles.bulletList}>•</Text>
                    <Text style={styles.bulletListDesc}>KTP</Text>
                  </View>
                  <View style={styles.firstBulletListContainer}>
                    <Text style={styles.bulletList}>•</Text>
                    <Text style={styles.bulletListDesc}>Paspor Lama</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.AlphabetListContainer}>
                  <Text style={styles.AlphabetList}>c.</Text>
                  <Text style={styles.AlphabetListDesc}>
                    Dokumen tambahan persyaratan permohonan paspor sesuai tujuan
                    permohonan paspor, yaitu:
                  </Text>
                </View>
                <View style={styles.numberListWrapper}>
                  <View>
                    <View style={styles.numberListContainer}>
                      <Text style={styles.numberList}>1.</Text>
                      <Text style={styles.numberListDesc}>Haji/Umrah</Text>
                    </View>
                    <View style={styles.bulletListWrapper}>
                      <View style={styles.secondBulletListContainer}>
                        <Text style={styles.bulletList}>•</Text>
                        <Text style={styles.bulletListDesc}>
                          Surat Rekomendasi dari Kementerian Agama
                        </Text>
                      </View>
                      <View style={styles.secondBulletListContainer}>
                        <Text style={styles.bulletList}>•</Text>
                        <Text style={styles.bulletListDesc}>
                          Surat Rekomendasi dari Penyelenggara Ibadah Haji dan
                          Umrah
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View style={styles.numberListContainer}>
                      <Text style={styles.numberList}>2.</Text>
                      <Text style={styles.numberListDesc}>
                        Bekerja di luar negeri
                      </Text>
                    </View>
                    <View style={styles.bulletListWrapper}>
                      <View style={styles.secondBulletListContainer}>
                        <Text style={styles.bulletList}>•</Text>
                        <Text style={styles.bulletListDesc}>
                          Surat Rekomendasi dari Dinas Tenaga Kerja
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View style={styles.numberListContainer}>
                      <Text style={styles.numberList}>3.</Text>
                      <Text style={styles.numberListDesc}>
                        Magang dan Program Bursa Kerja Khusus
                      </Text>
                    </View>
                    <View style={styles.bulletListWrapper}>
                      <View style={styles.secondBulletListContainer}>
                        <Text style={styles.bulletList}>•</Text>
                        <Text style={styles.bulletListDesc}>
                          Surat Rekomendasi dari Direktur Jenderal Pembinaan dan
                          Pelatihan Produktivitas Kementerian Ketenagakerjaan
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.titleListContainer}>
              <Text style={styles.titleListNumber}>2.</Text>
              <Text style={styles.titleListDesc}>Pernyataan keaslian data</Text>
            </View>
            <View style={styles.bodyTextContainer}>
              <Text style={styles.bodyText}>
                Data yang ada pada seluruh dokumen{' '}
                <Text style={{...FontFamily.notoSansBold}}>
                  persyaratan paspor sebagaimana dimaksud angka 1 harus sesuai
                  dan dapat dipertanggungjawabkan kebenarannya.
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.titleListContainer}>
              <Text style={styles.titleListNumber}>3.</Text>
              <Text style={styles.titleListDesc}>
                Aplikasi ini hanya dapat melayani permohonan paspor baru dan
                penggantian
              </Text>
            </View>
            <View style={styles.bodyTextContainer}>
              <Text style={styles.bodyText}>
                Untuk pelayanan penggantian paspor rusak atau hilang, silakan
                langsung datang ke Kantor Imigrasi terdekat. {'\n\n'}Untuk
                penggantian paspor hilang dilengkapi dengan Surat Kehilangan
                dari Kepolisian, dan untuk penggantian paspor rusak dilengkapi
                dengan paspor lama yang mengalami kerusakan (asli dan fotokopi
                dalam kertas A4).
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.titleListContainer}>
              <Text style={styles.titleListNumber}>4.</Text>
              <Text style={styles.titleListDesc}>Ketentuan pembayaran</Text>
            </View>
            <View style={styles.bodyTextContainer}>
              <Text style={styles.bodyText}>
                Pembayaran biaya PNBP permohonan paspor dilakukan terlebih
                dahulu sebelum Anda datang ke Kantor Imigrasi sesuai pilihan dan
                jadwal kedatangan.
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.titleListContainer}>
              <Text style={styles.titleListNumber}>5.</Text>
              <Text style={styles.titleListDesc}>Perubahan jadwal</Text>
            </View>
            <View style={styles.bodyTextContainer}>
              <Text style={styles.bodyText}>
                Anda dapat melakukan ubah jadwal kedatangan sebanyak{' '}
                <Text style={{...FontFamily.notoSansBold}}>satu kali</Text>{' '}
                sesuai dengan kuota tersedia, namun tidak dapat mengubah Kantor
                Imigrasi yang sudah anda pilih.
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.titleListContainer}>
              <Text style={styles.titleListNumber}>6.</Text>
              <Text style={styles.titleListDesc}>
                Kehadiran dan pembatalan otomatis
              </Text>
            </View>
            <View style={styles.bodyTextContainer}>
              <Text style={styles.bodyText}>
                Apabila Anda tidak hadir sesuai jadwal kedatangan dan tidak
                melakukan ubah jadwal, maka permohonan paspor Anda dibatalkan
                dan pembayaran tidak dapat dibatalkan serta Anda harus melakukan
                pendaftaran ulang.
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.titleListContainer}>
              <Text style={styles.titleListNumber}>7.</Text>
              <Text style={styles.titleListDesc}>
                Permohonan paspor dapat ditolak dalam hal:
              </Text>
            </View>
            <View style={styles.AlphabetListWrapper}>
              <View style={styles.AlphabetListContainer}>
                <Text style={styles.AlphabetList}>a.</Text>
                <Text style={styles.AlphabetListDesc}>
                  Termasuk dalam daftar pencegahan dan penangkalan;
                </Text>
              </View>
              <View style={styles.AlphabetListContainer}>
                <Text style={styles.AlphabetList}>b.</Text>
                <Text style={styles.AlphabetListDesc}>
                  Terindikasi Pekerja Migran Indonesia (PMI) Non Prosedural;
                </Text>
              </View>
              <View style={styles.AlphabetListContainer}>
                <Text style={styles.AlphabetList}>c.</Text>
                <Text style={styles.AlphabetListDesc}>
                  Memberikan data tidak sah dan/atau keterangan tidak benar;
                </Text>
              </View>
              <View style={styles.AlphabetListContainer}>
                <Text style={styles.AlphabetList}>d.</Text>
                <Text style={styles.AlphabetListDesc}>
                  Hal lain yang dianggap oleh petugas akan dipergunakan untuk
                  tujuan melawan hukum.
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.titleListContainer}>
              <Text style={styles.titleListNumber}>8.</Text>
              <Text style={styles.titleListDesc}>Tanggung jawab pemohon</Text>
            </View>
            <View style={styles.bodyTextContainer}>
              <Text style={styles.bodyText}>
                Apabila terdapat kesalahan dari pihak pemohon paspor sebagaimana
                tersebut pada ketentuan di atas,{' '}
                <Text style={{...FontFamily.notoSansBold}}>
                  PEMBAYARAN YANG TELAH DISETORKAN PADA KAS NEGARA TIDAK DAPAT
                  DIKEMBALIKAN.
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default TermsAndConnditionsScreen;
