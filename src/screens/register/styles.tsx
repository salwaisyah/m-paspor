import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

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
  registerTextWrapper: {
    marginHorizontal: 16,
  },
  accountRegistrationTitleText: {
    color: Colors.secondary30.color,
    ...FontFamily.notoSansExtraBold,
    fontSize: 18,
  },
  accountRegistrationDescText: {
    ...FontFamily.notoSansRegular,
    fontSize: 12,
  },
  textInputContainer: {
    marginTop: 30,
    marginHorizontal: 16,
    gap: 16,
  },
  textInputRowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  textInputFlex: {
    flex: 1,
  },
  acceptTermsAndConditionsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 20,
  },
  termsAndConditionsDesc: {
    marginLeft: 4,
    flex: 1,
    fontSize: 12,
    ...FontFamily.notoSansRegular,
    textAlign: 'justify',
  },
  termsHighlight: {
    color: Colors.secondary40.color,
    ...FontFamily.notoSansBold,
    fontSize: 12,
  },
  registerButton: {
    marginHorizontal: 16,
    marginTop: 24,
    backgroundColor: Colors.primary30.color,
  },
  loginDescContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 20,
    gap: 5,
  },
  loginDescText: {
    ...FontFamily.notoSansRegular,
    fontSize: 12,
  },
  loginHighlight: {
    color: Colors.secondary40.color,
    ...FontFamily.notoSansBold,
    fontSize: 12,
  },
});

export default styles;
