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
  billingCodeCardContainer: {
    marginTop: 4,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.secondary70.color,
    borderRadius: 8,
  },
  billingCodeIconContentWrapper: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  divider: {
    backgroundColor: Colors.secondary70.color,
    height: 1,
  },
  billingCodeContentWrapper: {
    padding: 16,
    gap: 8,
  },
  billingCodeTextTitle: {
    ...FontFamily.notoSansMedium,
    fontSize: 12,
    includeFontPadding: false,
    color: Colors.primary30.color,
  },
  billingCodeTextNumber: {
    ...FontFamily.notoSansExtraBold,
    fontSize: 16,
    includeFontPadding: false,
    color: Colors.primary30.color,
  },
  billingCodeTextDesc: {
    ...FontFamily.notoSansMedium,
    fontSize: 12,
    includeFontPadding: false,
    color: Colors.primary30.color,
  },
  billingCodeDataContentContainer: {
    marginHorizontal: 16,
    gap: 16,
    marginBottom: 16,
  },
  paymentMethodContainer: {
    gap: 12,
  },
  paymentMethodTitle: {
    includeFontPadding: false,
    fontSize: 18,
    ...FontFamily.notoSansExtraBold,
    color: Colors.primary30.color,
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
  paymentMethodOptionAccordionContainer: {
    marginStart: 24,
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
  paymentMethodOptionDataWrapper: {
    marginBottom: 8,
  },
});

export default styles;
