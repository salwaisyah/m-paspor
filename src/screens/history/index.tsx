import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Pressable, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Colors from '../../../assets/styles/Colors';
import passportAppointmentData from '../../data/History/PassportAppointmentData';
import PassportAppointmentCard from '../../components/PassportAppointmentCard';
import {
  useFocusEffect,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PassportAppointment, RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getData} from '../../helper/asyncStorageHelper';
import {ActivityIndicator} from 'react-native-paper';

type HistoryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'History'
>;

const ItemSeparator = () => <View style={styles.flatllistGap} />;

function HistoryScreen() {
  const navigation = useNavigation<HistoryScreenNavigationProp>();
  const previousRoute = useNavigationState(state => {
    const index = state.index;
    return index > 0 ? state.routes[index - 1].name : null;
  });

  const showNavBackAppBar = previousRoute === 'NavigationRoute';

  const [appointments, setAppointments] = useState<PassportAppointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // mulai loading
        const data = await getData('passportAppointments');
        if (Array.isArray(data) && data.length > 0) {
          setAppointments(data);
        } else {
          setAppointments([]); // kosongin kalau tidak ada
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setIsLoading(false); // selesai loading
      }
    };
    fetchData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor(Colors.secondary30.color);
      StatusBar.setBarStyle('light-content');

      return () => {
        StatusBar.setBackgroundColor(Colors.secondary30.color);
        StatusBar.setBarStyle('light-content');
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      {showNavBackAppBar ? ( 
        <View style={styles.appBarNavBackContainer}>
          <Icon
            name="arrow-left"
            size={24}
            style={styles.appBarNavBackIcon}
            color={Colors.neutral100.color}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.appBarNavBackTitle}>Riwayat</Text>
        </View>
      ) : (
        <View style={styles.appBarContainer}>
          <Text style={styles.appBarTitle}>Riwayat</Text>
        </View>
      )}
      <View style={styles.topBackground} />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={Colors.secondary30.color} />
        </View>
      ) : (
        <View style={styles.cardWrapper}>
          <FlatList
            data={appointments}
            renderItem={({item}: any) => (
              <Pressable
                onPress={() =>
                  navigation.navigate('ApplicationDetail', {data: item})
                }
                style={({pressed}) => ({
                  transform: [{scale: pressed ? 0.975 : 1}],
                })}>
                <PassportAppointmentCard
                  applicantName={item.applicantName}
                  applicantCode={item.applicantCode}
                  appointmentDate={item.appointmentDate}
                  appointmentTime={item.appointmentTime}
                  serviceUnit={item.serviceUnit}
                  status={item.status}
                />
              </Pressable>
            )}
            keyExtractor={item => item.id ?? ''}
            ItemSeparatorComponent={ItemSeparator}
          />
        </View>
      )}
    </View>
  );
}

export default HistoryScreen;
