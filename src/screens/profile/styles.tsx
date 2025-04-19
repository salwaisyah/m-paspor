import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    width: '100%',
    backgroundColor: Colors.secondary30.color,
    alignItems: 'center',
    marginBottom: 16,
  },
  appBarTitle: {
    color: Colors.neutral100.color,
    ...FontFamily.notoSansExtraBold,
    fontSize: 28,
    marginStart: 16,
    marginVertical: 14,
  },
  appBarContainer: {
    height: 64,
    backgroundColor: Colors.secondary30.color,
    justifyContent: 'center',
  },
  profileImage: {
    height: 125,
    width: 100,
    borderRadius: 8,
    marginTop: 16,
  },
  accountName: {
    marginTop: 16,
    ...FontFamily.notoSansBold,
    fontSize: 18,
    color: Colors.neutral100.color,
  },
  accountNumber: {
    ...FontFamily.notoSansRegular,
    fontSize: 14,
    color: Colors.neutral100.color,
    marginBottom: 16,
  },
  sectionProfileField: {
    flexDirection: 'row',
    gap: 16,
    marginHorizontal: 16,
    paddingVertical: 12,
  },
  sectionProfileText: {
    ...FontFamily.notoSansRegular,
    fontSize: 12,
  },
  sectionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginHorizontal: 16,
    marginTop: 32,
  },
  sectionButtonStyle: {
    flex: 1,
    backgroundColor: Colors.primary30.color,
  },
  logoutButton: {
    marginTop: 16,
    marginHorizontal: 16,
    borderColor: Colors.indicatorRed.color,
  },
});

export default styles;
