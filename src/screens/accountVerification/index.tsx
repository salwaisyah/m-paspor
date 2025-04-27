import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {
  Pressable,
  Text,
  View,
  TextInput,
  Keyboard,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from '../../navigation/type';
import styles from './styles';
import {Button} from 'react-native-paper';
import OTPTextInput from '../../components/OTPTextInput';
import Colors from '../../../assets/styles/Colors';

type AccountVerificationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AccountVerification'
>;

function AccountVerificationScreen() {
  const navigation = useNavigation<AccountVerificationScreenNavigationProp>();

  const [otp, setOtp] = useState(Array(6).fill(''));
  const [counter, setCounter] = useState(10);
  const inputRefs = useRef<TextInput[]>([]);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [counter]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  useEffect(() => {
    Keyboard.dismiss();
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);
  }, []);

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
      <View style={styles.accountVerificationTextWrapper}>
        <Text style={styles.accountVerificationTitleText}>Verifikasi Akun</Text>
        <Text style={styles.accountVerificationDescText}>
          Kode OTP telah dikirim ke email Anda. Mohon masukkan kode tersebut
          untuk verifikasi akun.
        </Text>
      </View>
      <View style={styles.OTPTextInputContainer}>
        <View style={styles.OTPTextInputRowContainer}>
          {otp.map((digit: any, index: any) => (
            <OTPTextInput
              key={index}
              ref={(ref: any) => (inputRefs.current[index] = ref!)}
              value={digit}
              onChangeText={(text: string) => handleChange(text, index)}
              onKeyPress={(e: any) => handleKeyPress(e, index)}
            />
          ))}
        </View>
        <Text style={styles.OTPTimeText}>
          Kirim ulang kode OTP dalam <Text>{counter}</Text> detik
        </Text>
      </View>
      <Pressable
        disabled={counter !== 0 ? true : false}
        onPress={() => setCounter(10)}
        style={({pressed}) => ({
          transform: [{scale: pressed ? 0.95 : 1}],
        })}>
        <Text
          style={
            counter !== 0 ? styles.sendOTPTextDisabled : styles.sendOTPText
          }>
          Kirim Ulang Kode OTP
        </Text>
      </Pressable>
      <Button
        mode="contained"
        style={styles.accountVerificationButton}
        onPress={() => navigation.navigate('Home')}>
        Lanjut
      </Button>
    </View>
  );
}

export default AccountVerificationScreen;
