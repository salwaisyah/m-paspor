import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

const styles = StyleSheet.create({
  bottomNavLabel: {
    color: Colors.neutral100.color,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 12,
    position: 'absolute',
  },
  dialogContainer: {
    backgroundColor: 'white',
    elevation: 0,
    shadowColor: 'transparent',
    borderRadius: 20,
  },
  dialogTitle: {
    fontSize: 22,
    color: Colors.secondary30.color,
  },
  dialogContentContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    gap: 16,
  },
  dialogDesc: {
    fontSize: 14,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    lineHeight: 22,
    color: Colors.primary30.color,
  },
  buttonContinue: {
    backgroundColor: Colors.primary30.color,
    marginTop: 12,
  },
});

export default styles;
