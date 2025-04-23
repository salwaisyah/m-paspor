import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SeeRequirementsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SeeRequirements'
>;

function SeeRequirementsScreen() {
  const navigation = useNavigation<SeeRequirementsScreenNavigationProp>();

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
        <Text style={styles.appBarTitle}>Persyaratan dan Ketentuan</Text>
      </View>
      <View style={styles.textContentContainer}>
        <View style={styles.textContentWrapper}>
          <Text style={styles.textContentStyle}>1.</Text>
          <Text style={[styles.textContentStyle, {flex: 1}]}>
            Pemohon wajib hadir 15 menit sebelum jam kedatangan dimulai;
          </Text>
        </View>
        <View style={styles.textContentWrapper}>
          <Text style={styles.textContentStyle}>2.</Text>
          <Text style={[styles.textContentStyle, {flex: 1}]}>
            Membawa dokumen persyaratan permohonan paspor asli sesuai tujuan
            permohonan paspor;
          </Text>
        </View>
        <View style={styles.textContentWrapper}>
          <Text style={styles.textContentStyle}>3.</Text>
          <Text style={[styles.textContentStyle, {flex: 1}]}>
            Permohonan penggantian paspor wajib membawa paspor lama;
          </Text>
        </View>
        <View style={styles.textContentWrapper}>
          <Text style={styles.textContentStyle}>4.</Text>
          <Text style={[styles.textContentStyle, {flex: 1}]}>
            Apabila anda tidak hadir sesuai jadwal kedatangan dan tidak
            melakukan ubah jadwal, maka permohonan paspor anda dibatalkan dan
            harus melakukan pendaftaran ulang;
          </Text>
        </View>
        <View style={styles.textContentWrapper}>
          <Text style={styles.textContentStyle}>5.</Text>
          <Text style={[styles.textContentStyle, {flex: 1}]}>
            Permohonan paspor dapat ditolak dalam hal:
          </Text>
        </View>
        <View style={styles.textContentAlphabetListContainer}>
          <View style={styles.textContentWrapper}>
            <Text style={styles.textContentStyle}>a.</Text>
            <Text style={[styles.textContentStyle, {flex: 1}]}>
              Termasuk dalam daftar pencegahan dan penangkalan;
            </Text>
          </View>
          <View style={styles.textContentWrapper}>
            <Text style={styles.textContentStyle}>b.</Text>
            <Text style={[styles.textContentStyle, {flex: 1}]}>
              Terindikasi Pekerja Migran Indonesia (PMI) Non Prosedural;
            </Text>
          </View>
          <View style={styles.textContentWrapper}>
            <Text style={styles.textContentStyle}>c.</Text>
            <Text style={[styles.textContentStyle, {flex: 1}]}>
              Memberikan data tidak sah dan/atau keterangan tidak benar;
            </Text>
          </View>
          <View style={styles.textContentWrapper}>
            <Text style={styles.textContentStyle}>d.</Text>
            <Text style={[styles.textContentStyle, {flex: 1}]}>
              Hal lain yang dianggap oleh petugas akan dipergunakan untuk tujuan
              melawan hukum;
            </Text>
          </View>
        </View>
        <View style={styles.textContentWrapper}>
          <Text style={styles.textContentStyle}>6.</Text>
          <Text style={[styles.textContentStyle, {flex: 1}]}>
            Apabila terdapat kesalahan dari pihak pemohon paspor sebagaimana
            ketentuan di atas, pembayaran yang telah disetorkan pada Kas Negara
            tidak dapat dikembalikan;
          </Text>
        </View>
        <View style={styles.textContentWrapper}>
          <Text style={styles.textContentStyle}>7.</Text>
          <Text style={[styles.textContentStyle, {flex: 1}]}>
            Dengan membaca dan menyetujui persyaratan dan ketentuan ini, pemohon
            telah siap dan mematuhi segala konsekuensi yang berakibat secara
            hukum.
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SeeRequirementsScreen;
