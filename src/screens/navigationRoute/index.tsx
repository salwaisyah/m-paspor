import * as React from 'react';
import {
  BottomNavigation,
  Button,
  Dialog,
  PaperProvider,
  Portal,
  Text,
} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import ProfileScreen from '../profile';
import styles from './styles';
import HomeScreen from '../home';
import HistoryScreen from '../history';
import {StatusBar, View} from 'react-native';
import {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import FontFamily from '../../../assets/styles/FontFamily';

type NavigationRouteScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'NavigationRoute'
>;

function NavigationRouteScreen() {
  const navigation = useNavigation<NavigationRouteScreenNavigationProp>();
  const [visible, setVisible] = useState(false);
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

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const renderScene = ({route}: {route: {key: string}}) => {
    switch (route.key) {
      case 'home':
        return <HomeScreen showDialog={showDialog} />;
      case 'history':
        return <HistoryScreen />;
      case 'profile':
        return <ProfileScreen />;
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
      <Portal>
        <Dialog visible={visible} style={styles.dialogContainer}>
          <Dialog.Title style={styles.dialogTitle}>Peringatan</Dialog.Title>
          <View style={styles.dialogContentContainer}>
            <Text style={styles.dialogDesc}>
              Silakan melakukan pengisian kuesioner.
            </Text>
            <Text style={[styles.dialogDesc, {...FontFamily.notoSansBold}]}>
              Pastikan data dan jawaban yang Anda berikan benar.
            </Text>
            <Text style={styles.dialogDesc}>
              Pemberian keterangan yang tidak benar merupakan pelanggaran
              keimigrasian sebagaimana ketentuan Pasal 126 huruf c UU No. 6
              tahun 2011 tentang Keimigrasian dan akan mengakibatkan permohonan
              paspor Anda ditolak dan pembayaran tidak dapat dikembalikan.
            </Text>
            <Button
              style={styles.buttonContinue}
              mode="contained"
              textColor={Colors.neutral100.color}
              onPress={() => {
                hideDialog();
                navigation.navigate('RegularPassport');
              }}>
              Lanjut
            </Button>
          </View>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
}

export default NavigationRouteScreen;
