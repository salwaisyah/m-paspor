import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary70.color,
  },
  appBarContainer: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary30.color,
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
  topContainer: {
    backgroundColor: Colors.secondary30.color,
    height: 85,
  },
  statusContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  statusContentContainer: {
    marginTop: -64,
    marginHorizontal: 16,
    zIndex: 10,
  },
  textStatusContentWrapper: {
    gap: 4,
  },
  textStatusTitle: {
    ...FontFamily.notoSansExtraBold,
    fontSize: 13,
    color: Colors.neutral100.color,
  },
  textStatusDesc: {
    ...FontFamily.notoSansMedium,
    fontSize: 10,
    color: Colors.neutral100.color,
  },
  midContainer: {
    marginTop: -16,
    padding: 16,
    backgroundColor: Colors.neutral100.color,
  },
  midTextTitle: {
    ...FontFamily.notoSansExtraBold,
    fontSize: 18,
    marginVertical: 12,
    color: Colors.primary30.color,
  },
  midIconContainer: {
    gap: 8,
    marginVertical: 8,
  },
  midIconContentWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
  midIconContentTextStyle: {
    fontSize: 12,
    ...FontFamily.notoSansRegular,
    color: Colors.primary30.color,
    flex: 1,
  },
});

export default styles;
