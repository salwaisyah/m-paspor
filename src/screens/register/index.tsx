import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Pressable, ScrollView, StatusBar, Text, View} from 'react-native';
import {RootStackParamList} from '../../navigation/type';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import TextInputComponent from '../../components/TextInput';
import {Button, Checkbox} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import genderData from '../../model/DropdownData/GenderData';

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

function RegisterScreen() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.neutral100.color}
        barStyle="dark-content"
      />
      <View style={styles.appBarContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} style={styles.arrowBackIcon} />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.registerTextWrapper}>
          <Text style={styles.accountRegistrationTitleText}>
            Pendaftaran Akun
          </Text>
          <Text style={styles.accountRegistrationDescText}>
            Buat akun untuk dapat masuk ke aplikasi
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInputComponent
            title="Nama Lengkap"
            placeholder="Masukkan Nama Lengkap"
            isRequired
          />
          <View style={styles.textInputRowContainer}>
            <View style={styles.textInputFlex}>
              <TextInputComponent
                title="Tanggal Lahir"
                placeholder="DD/MM/YYYY"
                isRequired
                isDate
              />
            </View>
            <View style={styles.textInputFlex}>
              <TextInputComponent
                title="Jenis Kelamin"
                placeholder="Jenis Kelamin"
                isRequired
                isDropdown
                dropdownItemData={genderData}
              />
            </View>
          </View>
          <TextInputComponent
            title="Email"
            placeholder="Masukkan Email"
            isRequired
          />
          <TextInputComponent
            title="Nomor Telepon"
            placeholder="Masukkan Nomor Telepon"
            isRequired
          />
          <TextInputComponent
            title="Kata Sandi"
            placeholder="Masukkan Kata Sandi"
            isPassword
            isRequired
          />
          <TextInputComponent
            title="Ulang Kata Sandi"
            placeholder="Konfirmasi Kata Sandi"
            isPassword
            isRequired
          />
        </View>
        <View style={styles.acceptTermsAndConditionsContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
            color={Colors.primary30.color}
          />
          <Text style={styles.termsAndConditionsDesc}>
            Saya telah membaca dan menyetujui{' '}
            <Text
              style={styles.termsHighlight}
              onPress={() => navigation.navigate('TermsAndConditions')}>
              Syarat & Ketentuan
            </Text>{' '}
            yang berlaku
          </Text>
        </View>
        <Button
          style={styles.registerButton}
          mode="contained"
          onPress={() => navigation.navigate('AccountVerification')}>
          Daftar Akun
        </Button>
        <View style={styles.loginDescContainer}>
          <Text style={styles.loginDescText}>Sudah memiliki akun?</Text>
          <Text
            style={styles.loginHighlight}
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'Login'}],
                }),
              )
            }>
            Masuk
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default RegisterScreen;
