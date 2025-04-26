import * as React from 'react';
import {BottomNavigation, PaperProvider, Text} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import ProfileScreen from '../profile';
import styles from './styles';
import HomeScreen from '../home';
import HistoryScreen from '../history';
import {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import DialogWarningApplication from '../../components/dialog/DialogWarningApplication';
import DialogLogout from '../../components/dialog/DialogLogout';
import {clearData, getData} from '../../helper/asyncStorageHelper';

type NavigationRouteScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'NavigationRoute'
>;

function NavigationRouteScreen() {
  const navigation = useNavigation<NavigationRouteScreenNavigationProp>();

  const [visibleWarningApplicationDialog, setVisibleWarningApplicationDialog] =
    useState(false);
  const [visibleLogoutDialog, setVisibleLogoutDialog] = useState(false);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
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

  const showWarningApplicationDialog = () =>
    setVisibleWarningApplicationDialog(true);
  const hideWarningApplicationDialog = () =>
    setVisibleWarningApplicationDialog(false);

  const showLogoutDialog = () => setVisibleLogoutDialog(true);
  const hideLogoutDialog = () => setVisibleLogoutDialog(false);

  const renderScene = ({route}: {route: {key: string}}) => {
    switch (route.key) {
      case 'home':
        return (
          <HomeScreen
            visible={visibleWarningApplicationDialog}
            showDialog={showWarningApplicationDialog}
          />
        );
      case 'history':
        return <HistoryScreen />;
      case 'profile':
        return (
          <ProfileScreen
            visible={visibleLogoutDialog}
            showDialog={showLogoutDialog}
          />
        );
      default:
        return null;
    }
  };

  return (
    <PaperProvider>
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
      {visibleWarningApplicationDialog && (
        <DialogWarningApplication
          visible={visibleWarningApplicationDialog}
          hideDialog={hideWarningApplicationDialog}
          onNavigate={() => navigation.navigate('RegularPassport')}
        />
      )}
      {visibleLogoutDialog && (
        <DialogLogout
          visible={visibleLogoutDialog}
          hideDialog={hideLogoutDialog}
          onNavigate={async () => {
            await clearData('passportAppointments');
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }}
        />
      )}
    </PaperProvider>
  );
}

export default NavigationRouteScreen;
