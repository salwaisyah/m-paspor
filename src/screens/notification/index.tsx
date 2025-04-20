import React from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import notificationData from '../../data/Notification/NotificationData';

type NotificationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Notification'
>;

type NotificationCardProps = {
  title: string;
  message: string;
  details: string;
  timestamp: string;
};

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  message,
  details,
  timestamp,
}) => {
  dayjs.locale('id');
  const formattedTime = dayjs(timestamp).format('D MMMM YYYY');
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topCardContentWrapper}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationTime}>{formattedTime}</Text>
      </View>
      <Text style={styles.notificationMessage}>{message}</Text>
      <Text style={styles.notificationDetail}>{details}</Text>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.flatllistGap} />;

function NotificationScreen() {
  const navigation = useNavigation<NotificationScreenNavigationProp>();

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
        <Text style={styles.appBarTitle}>Notifikasi</Text>
      </View>
      <View style={styles.topBackground} />
      <View style={styles.cardWrapper}>
        <FlatList
          data={notificationData}
          renderItem={({item}) => (
            <NotificationCard
              title={item.title}
              message={item.message}
              details={item.details}
              timestamp={item.timestamp}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
    </View>
  );
}

export default NotificationScreen;
