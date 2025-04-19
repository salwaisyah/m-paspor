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
  termsAndConditionsDetailInfoContainer: {
    marginTop: 24,
    marginBottom: 32,
    marginHorizontal: 16,
    gap: 24,
  },
  titleListContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  titleListNumber: {
    color: Colors.secondary30.color,
    ...FontFamily.notoSansSemiBold,
    fontSize: 12,
  },
  titleListDesc: {
    color: Colors.secondary30.color,
    ...FontFamily.notoSansSemiBold,
    flex: 1,
    fontSize: 12,
  },
  AlphabetListWrapper: {
    gap: 8,
  },
  AlphabetListContainer: {
    flexDirection: 'row',
    gap: 8,
    marginStart: 18,
  },
  AlphabetList: {
    ...FontFamily.notoSansRegular,
    fontSize: 12,
  },
  AlphabetListDesc: {
    flex: 1,
    ...FontFamily.notoSansRegular,
    fontSize: 12,
  },
  bodyTextContainer: {
    marginStart: 18,
  },
  bodyText: {
    fontSize: 12,
    ...FontFamily.notoSansRegular,
  },
  bulletListWrapper: {
    marginTop: 8,
    gap: 8,
  },
  firstBulletListContainer: {
    flexDirection: 'row',
    gap: 8,
    marginStart: 36,
  },
  bulletList: {
    ...FontFamily.notoSansRegular,
    fontSize: 12,
  },
  bulletListDesc: {
    ...FontFamily.notoSansRegular,
    fontSize: 12,
    flex: 1,
  },
  numberListWrapper: {
    marginTop: 8,
    gap: 8,
  },
  numberListContainer: {
    flexDirection: 'row',
    gap: 8,
    marginStart: 32,
  },
  numberList: {
    fontSize: 12,
    ...FontFamily.notoSansRegular,
  },
  numberListDesc: {
    fontSize: 12,
    ...FontFamily.notoSansRegular,
    flex: 1,
  },
  secondBulletListContainer: {
    flexDirection: 'row',
    gap: 8,
    marginStart: 48,
  },
});

export default styles;
