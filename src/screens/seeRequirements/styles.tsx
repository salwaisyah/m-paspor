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
  textContentContainer: {
    marginTop: 4,
    marginHorizontal: 16,
    marginBottom: 16,
    gap: 4,
  },
  textContentWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
  textContentStyle: {
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    color: Colors.primary30.color,
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'justify',
  },
  textContentAlphabetListContainer: {
    marginStart: 16,
    gap: 4,
  },
});

export default styles;
