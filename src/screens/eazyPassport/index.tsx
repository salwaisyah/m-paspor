import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type EazyPassportScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EazyPassport'
>;

function EazyPassportScreen() {
  const navigation = useNavigation<EazyPassportScreenNavigationProp>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.secondary30.color}
          barStyle="light-content"
        />
        <View style={styles.appBarContainer}>
          <Icon
            name="arrow-left"
            size={24}
            style={styles.appBarIcon}
            color={Colors.neutral100.color}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.appBarTitle}>Eazy Passport</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textDesc}>
            Layanan Eazy Passport yaitu pelayanan paspor yang dilaksanakan di
            luar kantor dan menuju lokasi pemohon dengan menggunakan mobil
            layanan paspor keliling dan/atau mobile unit Surat Perjalanan
            Republik Indonesia (SPRI).
          </Text>
          <Text style={styles.textDesc}>
            Ketentuan dan prosedur pemberian layanan paspor dalam pelaksanaan
            Layanan Eazy Passport adalah sebagai berikut:
          </Text>
          <View style={{gap: 4}}>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Text style={styles.textDesc}>1.</Text>
              <Text style={[styles.textDesc, {flex: 1}]}>
                Layanan Eazy Passport melayani minimal 50 (lima puluh)
                permohonan per hari;
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Text style={styles.textDesc}>2.</Text>
              <Text style={[styles.textDesc, {flex: 1}]}>
                Keluarga dari para pegawai di lingkungan Perkantoran Pemerintah/
                TNI /POLRI / BUMN/BUMD/Swasta dan institusi pendidikan dapat
                diberikan pelayanan paspor dalam pelaksanaan Layanan Eazy
                Passport;
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Text style={styles.textDesc}>3.</Text>
              <Text style={[styles.textDesc, {flex: 1}]}>
                Layanan Eazy Passport hanya melayani pembuatan paspor baru dan
                penggantian paspor karena habis masa berlaku dan halaman penuh,
                tidak melayani penggantian paspor karena hilang atau rusak;
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Text style={styles.textDesc}>4.</Text>
              <Text style={[styles.textDesc, {flex: 1}]}>
                Jadwal layanan ditentukan oleh Kantor Imigrasi setempat dan
                dilayani di hari kerja (pukul 08.00 s/d 16.00 waktu setempat)
                atau di luar jam/hari kerja;
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Text style={styles.textDesc}>5.</Text>
              <Text style={[styles.textDesc, {flex: 1}]}>
                Pelaksanaan input data dan pengambilan biometrik dilakukan
                dengan mobile unit SPRI baik secara online atau offline;
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Text style={styles.textDesc}>6.</Text>
              <Text style={[styles.textDesc, {flex: 1}]}>
                Proses penyelesaian paspor 4 (empat) hari kerja setelah pemohon
                melakukan pembayaran PNBP sesuai dengan jenis paspor yang
                dipilih;
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Text style={styles.textDesc}>7.</Text>
              <Text style={[styles.textDesc, {flex: 1}]}>
                Pemohon Layanan Eazy Passport dapat diberikan layanan percepatan
                paspor selesai pada hari yang sama dengan syarat pembayaran PNBP
                dilakukan sebelum pukul 13.00 waktu setempat;
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Text style={styles.textDesc}>8.</Text>
              <Text style={[styles.textDesc, {flex: 1}]}>
                Pengambilan paspor yang sudah dicetak pada Kantor Imigrasi dapat
                diambil langsung oleh pemohon paspor, diambil oleh perwakilan
                instansi/kantor/komunitas sebagaimana tersebut pada angka 1
                dengan melampirkan surat kuasa/ surat perintah dari
                pimpinan/para pemohon atau dikirim melalui jasa PT. Pos
                Indonesia.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default EazyPassportScreen;
