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
    fontSize: 22,
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
  contentContainer: {
    marginTop: 4,
    marginHorizontal: 16,
    marginBottom: 24,
    gap: 12,
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
  alphabetListWrapper: {
    marginStart: 16,
  },
  textContentWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
});

export default styles;
