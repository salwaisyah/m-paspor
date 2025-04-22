import {StyleSheet} from 'react-native';
import FontFamily from '../../../assets/styles/FontFamily';
import Colors from '../../../assets/styles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appBarTitle: {
    color: Colors.neutral100.color,
    ...FontFamily.notoSansExtraBold,
    fontSize: 28,
    marginStart: 16,
    includeFontPadding: false,
  },
  appBarContainer: {
    height: 72,
    backgroundColor: Colors.secondary30.color,
    justifyContent: 'center',
  },
  appBarNavBackContainer: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary30.color,
  },
  appBarNavBackTitle: {
    color: Colors.neutral100.color,
    ...FontFamily.notoSansRegular,
    fontSize: 22,
    marginStart: 16,
  },
  appBarNavBackIcon: {
    marginLeft: 16,
  },
  topBackground: {
    backgroundColor: Colors.secondary30.color,
    height: 85,
    alignItems: 'center',
  },
  cardWrapper: {
    margin: 16,
    marginBottom: 172,
    marginTop: -85,
  },
  flatllistGap: {
    height: 8,
  },
});

export default styles;
