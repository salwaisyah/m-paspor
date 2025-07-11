import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary70.color,
    flex: 1,
  },
  contentContainer: {
    alignSelf: 'stretch',
    backgroundColor: Colors.neutral100.color,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 20,
  },
  welcomeImage: {
    width: '100%',
    height: 275,
    resizeMode: 'stretch',
  },
  welcomeText: {
    color: Colors.secondary30.color,
    ...FontFamily.notoSansExtraBold,
    fontSize: 24,
    marginBottom: 24,
  },
  loginButton: {
    marginTop: 24,
    backgroundColor: Colors.primary30.color,
  },
  registerAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: 16,
  },
  forgotPasswordText: {
    marginTop: 16,
    fontSize: 12,
    ...FontFamily.notoSansSemiBold,
    color: Colors.secondary40.color,
  },
  textInputContainer: {
    gap: 16,
  },
  registerAccountText: {
    color: Colors.secondary40.color,
    fontSize: 12,
    ...FontFamily.notoSansSemiBold,
  },
  dontHaveAccountText: {
    color: Colors.primary30.color,
    fontSize: 12,
    ...FontFamily.notoSansRegular,
  },
  termsAndConditionsContainer: {
    alignSelf: 'stretch',
    backgroundColor: Colors.neutral100.color,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 20,
    marginTop: 16,
    marginBottom: 40,
  },
  termsAndConditionsTitle: {
    ...FontFamily.notoSansMedium,
    fontSize: 14,
    color: Colors.primary30.color,
  },
  termsAndConditionsDescription: {
    ...FontFamily.notoSansRegular,
    fontSize: 11,
    marginTop: 4,
    color: Colors.primary40.color,
  },
  termsAndConditionsTextContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  arrowRightIcon: {
    marginRight: 20,
  },
  informationIcon: {
    marginLeft: 20,
  },
});

export default styles;
