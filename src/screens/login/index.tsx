import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {Button} from 'react-native-paper';
import TextInputComponent from '../../components/TextInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import Colors from '../../../assets/styles/Colors';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

function LoginScreen() {
  const welcomeImage = require('../../../assets/images/welcomeImage.png');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.secondary60.color}
        barStyle="light-content"
      />
      <Image source={welcomeImage} style={styles.welcomeImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>
          Selamat Datang di Aplikasi M-Paspor!
        </Text>
        <View style={styles.textInputContainer}>
          <TextInputComponent title="Email" placeholder="Masukkan Email" />
          <TextInputComponent
            title="Kata Sandi"
            placeholder="Masukkan Kata Sandi"
            isPassword
          />
        </View>
        <Text style={styles.forgotPasswordText}>Lupa kata sandi?</Text>
        <Button
          style={styles.loginButton}
          mode="contained"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'NavigationRoute'}],
            })
          }>
          Masuk
        </Button>
        <View style={styles.registerAccountContainer}>
          <Text style={styles.dontHaveAccountText}>Belum memiliki akun?</Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerAccountText}>Daftar akun</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate('TermsAndConditions')}
        style={({pressed}) => [{transform: [{scale: pressed ? 0.975 : 1}]}]}>
        <View style={styles.termsAndConditionsContainer}>
          <Icon
            name="person"
            size={20}
            color="#000"
            style={styles.personIcon}
          />
          <View style={styles.termsAndConditionsTextContainer}>
            <Text style={styles.termsAndConditionsTitle}>
              Syarat & Ketentuan
            </Text>
            <Text style={styles.termsAndConditionsDescription}>
              Panduan pendaftaran dan informasi untuk mengajukan permohonan
              paspor
            </Text>
          </View>
          <Icon
            name="arrow-right"
            size={20}
            color="#000"
            style={styles.arrowRightIcon}
          />
        </View>
      </Pressable>
    </ScrollView>
  );
}

export default LoginScreen;
