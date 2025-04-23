import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral100.color,
  },
  appBarTitle: {
    color: Colors.neutral100.color,
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
    backgroundColor: Colors.secondary30.color,
  },
  topContainer: {
    backgroundColor: Colors.secondary30.color,
    height: 85,
    alignItems: 'center',
  },
  contentContainer: {
    margin: 16,
    gap: 16,
  },
  guidebookMenuContainer: {
    gap: 16,
  },
  guidebookMenuWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
    padding: 16,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.secondary70.color,
  },
  guidebookMenuContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  guidebookMenuTextWrapper: {
    gap: 6,
  },
  guidebookMenuTextTitle: {
    ...FontFamily.notoSansMedium,
    fontSize: 14,
    includeFontPadding: false,
    color: Colors.primary30.color,
  },
  guidebookMenuTextDesc: {
    ...FontFamily.notoSansRegular,
    fontSize: 11,
    includeFontPadding: false,
    color: Colors.primary40.color,
  },
});

export default styles;
