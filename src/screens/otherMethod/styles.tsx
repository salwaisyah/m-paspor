import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral100.color,
  },
  appBarTitle: {
    color: Colors.secondary30.color,
    ...FontFamily.notoSansRegular,
    fontSize: 20,
    marginStart: 16,
    includeFontPadding: false,
  },
  appBarIcon: {
    marginLeft: 16,
  },
  appBarContainer: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.neutral100.color,
  },
  otherMethodContentContainer: {
    marginHorizontal: 16,
    gap: 16,
    marginBottom: 16,
  },
  paymentMethodTitle: {
    includeFontPadding: false,
    fontSize: 18,
    ...FontFamily.notoSansExtraBold,
    color: Colors.primary30.color,
  },
  paymentMethodContainer: {
    gap: 12,
  },
  paymentMethodOptionTitleWrapper: {
    gap: 6,
    flexDirection: 'row',
  },
  paymentMethodOptionTitle: {
    color: Colors.primary30.color,
    includeFontPadding: false,
    fontSize: 16,
    ...FontFamily.notoSansExtraBold,
  },
  paymentMethodOptionTitleFlex: {
    flex: 1,
  },
  textContentWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
  textContentDesc: {
    flex: 1,
    color: Colors.primary30.color,
    ...FontFamily.notoSansRegular,
    fontSize: 12,
    textAlign: 'justify',
    includeFontPadding: false,
    lineHeight: 24,
  },
  listFlex: {
    flex: 0,
  },
  paymentMethodOptionDataContainer: {
    marginStart: 24,
  },
  paymentMethodOptionDataWrapper: {
    marginBottom: 4,
  },
});

export default styles;
