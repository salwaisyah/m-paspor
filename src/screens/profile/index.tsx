import React, {useCallback} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../assets/styles/Colors';
import {Button} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

type ProfileScreenProps = {
  readonly showDialog: () => void;
  readonly visible: boolean;
};

function ProfileScreen(props: ProfileScreenProps) {
  const {showDialog, visible} = props;

  const placeholderProfileImage = require('../../../assets/images/placeholderProfileImage.png');
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor(
        visible ? '#295E70' : Colors.secondary30.color,
      );
      StatusBar.setBarStyle('light-content');

      return () => {
        StatusBar.setBackgroundColor(Colors.secondary30.color);
        StatusBar.setBarStyle('light-content');
      };
    }, [visible]),
  );
  return (
    <View style={styles.container}>
      <View style={styles.appBarContainer}>
        <Text style={styles.appBarTitle}>Profil</Text>
      </View>
      <View style={styles.topContainer}>
        <Image source={placeholderProfileImage} style={styles.profileImage} />
        <Text style={styles.accountName}>Salwa Aisyah Adhani</Text>
        <Text style={styles.accountNumber}>3271234560009123456</Text>
      </View>
      <View style={styles.sectionProfileField}>
        <Icon name="email-outline" size={20} color={Colors.secondary30.color} />
        <Text style={styles.sectionProfileText}>salwaadhani@gmail.com</Text>
      </View>
      <View style={styles.sectionProfileField}>
        <Icon name="phone-outline" size={20} color={Colors.secondary30.color} />
        <Text style={styles.sectionProfileText}>085123456789</Text>
      </View>
      <View style={styles.sectionProfileField}>
        <Icon
          name="calendar-month"
          size={20}
          color={Colors.secondary30.color}
        />
        <Text style={styles.sectionProfileText}>22 Februari 2002</Text>
      </View>
      <View style={styles.sectionProfileField}>
        <Icon name="home-outline" size={20} color={Colors.secondary30.color} />
        <Text style={styles.sectionProfileText}>Jl. Raya Muchtar</Text>
      </View>
      <View style={styles.sectionButtonContainer}>
        <Button
          icon="pencil-outline"
          mode="contained"
          style={styles.sectionButtonStyle}
          textColor={Colors.neutral100.color}
          onPress={() => navigation.navigate('EditProfile')}>
          Edit Profil
        </Button>
        <Button
          icon="lock-outline"
          mode="contained"
          style={styles.sectionButtonStyle}
          textColor={Colors.neutral100.color}
          onPress={() => navigation.navigate('SetPassword')}>
          Atur Kata Sandi
        </Button>
      </View>
      <Button
        mode="outlined"
        textColor={Colors.indicatorRed.color}
        style={styles.logoutButton}
        onPress={showDialog}>
        Keluar
      </Button>
    </View>
  );
}

export default ProfileScreen;
