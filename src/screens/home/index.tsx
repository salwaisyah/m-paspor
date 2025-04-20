import * as React from 'react';
import styles from './styles';
import {View, Text, StatusBar, FlatList} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import RegularPassportIcon from '../../../assets/icons/regular_passport.svg';
import ExpressPassportIcon from '../../../assets/icons/express_passport.svg';
import GuidebookIcon from '../../../assets/icons/guidebook.svg';
import EazyPassportIcon from '../../../assets/icons/eazy_passport.svg';
import passportAppointmentData from '../../data/History/PassportAppointmentData';
import PassportAppointmentCard from '../../components/PassportAppointmentCard';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const ItemSeparator = () => <View style={styles.flatllistGap} />;

const RenderContent = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <>
      <View style={styles.topContainer} />
      <View style={styles.serviceContainer}>
        <Text style={styles.serviceText}>Layanan</Text>
        <View style={styles.serviceOptionWrapper}>
          <View style={styles.serviceOptionContainer}>
            <View style={styles.serviceIcon}>
              <RegularPassportIcon />
            </View>
            <Text style={styles.serviceDesc}>Paspor Reguler</Text>
          </View>
          <View style={styles.serviceOptionContainer}>
            <View style={styles.serviceIcon}>
              <ExpressPassportIcon />
            </View>
            <Text style={styles.serviceDesc}>Paspor Percepatan</Text>
          </View>
          <View style={styles.serviceOptionContainer}>
            <View style={styles.serviceIcon}>
              <GuidebookIcon />
            </View>
            <Text style={styles.serviceDesc}>Buku Panduan</Text>
          </View>
          <View style={styles.serviceOptionContainer}>
            <View style={styles.serviceIcon}>
              <EazyPassportIcon />
            </View>
            <Text style={styles.serviceDesc}>EAZY Pasport</Text>
          </View>
        </View>
      </View>
      <View style={styles.applicationStatusContainer}>
        <View style={styles.applicationStatusTextWrapper}>
          <Text style={styles.applicationStatusTitle}>Status Permohonan</Text>
          <Text
            style={styles.applicationStatusSeeAll}
            onPress={() => navigation.navigate('History')}>
            Lihat semua
          </Text>
        </View>
        <View style={styles.cardWrapper}>
          <FlatList
            data={passportAppointmentData.slice(0, 2)}
            renderItem={({item}) => (
              <PassportAppointmentCard
                applicantName={item.applicantName}
                applicantCount={item.applicantCount}
                appointmentDate={item.appointmentDate}
                appointmentTime={item.appointmentTime}
                serviceUnit={item.serviceUnit}
                status={item.status}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}
          />
        </View>
      </View>
    </>
  );
};

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.secondary30.color}
        barStyle="light-content"
      />
      <View style={styles.appBarContainer}>
        <Text style={styles.appBarTitle}>Halo, Salwa!</Text>
        <Icon
          name="bell-outline"
          size={24}
          color={Colors.neutral100.color}
          onPress={() => navigation.navigate('Notification')}
        />
      </View>
      <FlatList data={[{}]} renderItem={() => <RenderContent />} />
    </View>
  );
}

export default HomeScreen;
