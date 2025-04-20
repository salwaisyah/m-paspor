import React from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Colors from '../../../assets/styles/Colors';
import passportAppointmentData from '../../data/History/PassportAppointmentData';
import PassportAppointmentCard from '../../components/PassportAppointmentCard';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.secondary30.color}
        barStyle="light-content"
      />
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
      <View style={styles.cardWrapper}>
        <FlatList
          data={passportAppointmentData}
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
  );
}

export default HistoryScreen;
