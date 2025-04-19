import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import ProfileScreen from '../profile';
import styles from './styles';
import HomeScreen from '../home';
import HistoryScreen from '../history';

const HomeRoute = () => <HomeScreen />;
const HistoryRoute = () => <HistoryScreen />;
const ProfileRoute = () => <ProfileScreen />;

function NavigationRouteScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'history',
      title: 'History',
      focusedIcon: 'history',
    },
    {
      key: 'profile',
      title: 'Profile',
      focusedIcon: 'account-circle',
      unfocusedIcon: 'account-circle-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    history: HistoryRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={Colors.primary30.color}
      inactiveColor={Colors.neutral100.color}
      barStyle={{backgroundColor: Colors.primary30.color}}
      theme={{
        colors: {
          secondaryContainer: Colors.neutral100.color,
        },
      }}
      renderLabel={({route}) => (
        <Text style={styles.bottomNavLabel}>{route.title}</Text>
      )}
    />
  );
}

export default NavigationRouteScreen;
