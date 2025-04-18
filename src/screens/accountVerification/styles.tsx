import {StyleSheet} from 'react-native';
import FontFamily from '../../../assets/styles/FontFamily';
import Colors from '../../../assets/styles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appBarContainer: {
    height: 64,
    justifyContent: 'center',
  },
  arrowBackIcon: {
    marginLeft: 16,
    color: Colors.secondary30.color,
  },
  accountVerificationTextWrapper: {
    marginHorizontal: 16,
  },
  accountVerificationTitleText: {
    color: Colors.secondary30.color,
    ...FontFamily.notoSansExtraBold,
    fontSize: 18,
  },
  accountVerificationDescText: {
    ...FontFamily.notoSansRegular,
    fontSize: 12,
    textAlign: 'justify',
  },
  OTPTextInputContainer: {
    marginTop: 40,
    marginHorizontal: 16,
  },
  OTPTimeText: {
    marginTop: 16,
    textAlign: 'center',
    ...FontFamily.notoSansRegular,
    color: Colors.primary50.color,
  },
  sendOTPText: {
    marginTop: 40,
    marginHorizontal: 16,
    textAlign: 'center',
    color: Colors.primary30.color,
    ...FontFamily.notoSansSemiBold,
    fontSize: 12,
  },
  accountVerificationButton: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: Colors.primary30.color,
  },
  OTPTextInputRowContainer: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
  },
});

export default styles;
