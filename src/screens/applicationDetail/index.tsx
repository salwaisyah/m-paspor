import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {PassportAppointmentData} from '../../model/model';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import {Divider} from 'react-native-paper';

type ApplicationDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ApplicationDetail'
>;

const renderStatusContent = (status: string) => {
  const statusConfig: {
    [key: string]: {
      backgroundColor: string;
      iconName: string;
      title: string;
      desc: string;
    };
  } = {
    'Permohonan Kadaluarsa': {
      backgroundColor: Colors.indicatorRed.color,
      iconName: 'close-circle',
      title: 'Permohonan Anda telah kadaluarsa',
      desc: 'Silakan ajukan permohonan baru',
    },
    'Sudah Terbayar': {
      backgroundColor: Colors.indicatorGreen.color,
      iconName: 'check-circle',
      title: 'Pembayaran Anda telah selesai',
      desc: 'Cek dokumen yang diperlukan selama kunjungan',
    },
    'Menunggu Pembayaran': {
      backgroundColor: Colors.indicatorOrange.color,
      iconName: 'alert-circle',
      title: '16 April 2025 23:30',
      desc: 'Selesaikan pembayaran Anda sebelum',
    },
  };

  const {backgroundColor, iconName, title, desc} =
    statusConfig[status] || statusConfig['Menunggu Pembayaran'];

  return (
    <View style={[styles.statusContentWrapper, {backgroundColor}]}>
      <Icon name={iconName} size={24} color={Colors.neutral100.color} />
      <View style={styles.textStatusContentWrapper}>
        {status === 'Menunggu Pembayaran' ? (
          <>
            <Text style={styles.textStatusDesc}>{desc}</Text>
            <Text style={styles.textStatusTitle}>{title}</Text>
          </>
        ) : (
          <>
            <Text style={styles.textStatusTitle}>{title}</Text>
            <Text style={styles.textStatusDesc}>{desc}</Text>
          </>
        )}
      </View>
    </View>
  );
};

function ApplicationDetailScreen() {
  const route = useRoute();
  const {data} = route.params as {data: PassportAppointmentData};

  const navigation = useNavigation<ApplicationDetailScreenNavigationProp>();

  return (
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
        <Text style={styles.appBarTitle}>Detail Permohonan</Text>
      </View>
      <ScrollView>
        <View style={styles.topContainer} />
        <View style={styles.statusContentContainer}>
          {renderStatusContent(data.status)}
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.midTextTitle}>Jadwal Kedatangan</Text>
          <View style={styles.midIconContainer}>
            <View style={styles.midIconContentWrapper}>
              <Icon
                name="calendar-today"
                size={24}
                color={Colors.secondary30.color}
              />
              <Text style={styles.midIconContentTextStyle}>
                {data.appointmentDate}
              </Text>
            </View>
            <View style={styles.midIconContentWrapper}>
              <Icon
                name="clock-outline"
                size={24}
                color={Colors.secondary30.color}
              />
              <Text style={styles.midIconContentTextStyle}>
                {data.appointmentTime}
              </Text>
            </View>
            <View style={styles.midIconContentWrapper}>
              <Icon
                name="map-marker-outline"
                size={24}
                color={Colors.secondary30.color}
              />
              <Text style={styles.midIconContentTextStyle}>
                {data.serviceUnit}
              </Text>
            </View>
          </View>
          <Divider />
        </View>
      </ScrollView>
    </View>
  );
}

export default ApplicationDetailScreen;
