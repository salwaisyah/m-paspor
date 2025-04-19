import {StyleSheet} from 'react-native';
import FontFamily from '../../../assets/styles/FontFamily';
import Colors from '../../../assets/styles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appBarTitle: {
    color: Colors.secondary30.color,
    ...FontFamily.notoSansRegular,
    fontSize: 22,
    marginStart: 16,
  },
  appBarIcon: {
    marginLeft: 16,
  },
  appBarContainer: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  setPasswordSectionFieldContainer: {
    gap: 16,
    marginTop: 16,
    marginBottom: 32,
    marginHorizontal: 16,
  },
  buttonSetPassword: {
    marginHorizontal: 16,
    backgroundColor: Colors.primary30.color,
  },
});

export default styles;
