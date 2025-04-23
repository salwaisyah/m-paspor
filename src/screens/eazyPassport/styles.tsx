import {StyleSheet} from 'react-native';
import FontFamily from '../../../assets/styles/FontFamily';
import Colors from '../../../assets/styles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    gap: 8,
    margin: 16
  },
  textDesc: {
    ...FontFamily.notoSansRegular,
    fontSize: 12,
    includeFontPadding: false,
    textAlign: 'justify',
  },
  appBarTitle: {
    color: Colors.neutral100.color,
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
    backgroundColor: Colors.secondary30.color,
  },
});

export default styles;
