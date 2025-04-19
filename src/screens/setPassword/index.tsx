import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextInputComponent from '../../components/TextInput';
import Colors from '../../../assets/styles/Colors';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type SetPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SetPassword'
>;

function SetPasswordScreen() {
  const navigation = useNavigation<SetPasswordScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.neutral100.color}
        barStyle="dark-content"
      />
      <View style={styles.appBarContainer}>
        <Icon
          name="arrow-left"
          size={24}
          style={styles.appBarIcon}
          color={Colors.secondary30.color}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.appBarTitle}>Atur Kata Sandi</Text>
      </View>
      <View style={styles.setPasswordSectionFieldContainer}>
        <TextInputComponent
          title="Kata Sandi Lama"
          placeholder="Masukkan kata sandi lama"
          isPassword
          isRequired
        />
        <TextInputComponent
          title="Kata Sandi Baru"
          placeholder="Masukkan kata sandi baru"
          isPassword
          isRequired
        />
        <TextInputComponent
          title="Ulang Kata Sandi Baru"
          placeholder="Masukkan ulang kata sandi baru"
          isPassword
          isRequired
        />
      </View>
      <Button
        mode="contained"
        style={styles.buttonSetPassword}
        onPress={() => {}}>
        Simpan Perubahan
      </Button>
    </View>
  );
}

export default SetPasswordScreen;
