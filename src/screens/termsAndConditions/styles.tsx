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
  termsAndConditionsTextWrapper: {
    marginHorizontal: 16,
  },
  termsAndConditionsTitleText: {
    color: Colors.secondary30.color,
    ...FontFamily.notoSansExtraBold,
    fontSize: 18,
  },
  termsAndConditionsDescText: {
    ...FontFamily.notoSansRegular,
    fontSize: 12,
    textAlign: 'justify',
  },
  termsAndConditionsDetailWrapper: {
    marginHorizontal: 16,
    marginVertical: 32,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#222',
  },
  subheading: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
    color: '#444',
  },
  bullet: {
    fontSize: 14,
    marginLeft: 12,
    marginBottom: 4,
    color: '#333',
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
});

export default styles;
