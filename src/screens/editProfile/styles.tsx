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
    ...FontFamily.notoSansRegular,
    fontSize: 22,
    includeFontPadding: false,
    marginStart: 16,
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
  profileImage: {
    height: 125,
    width: 100,
    borderRadius: 8,
    marginTop: 16,
    position: 'absolute',
  },
  editProfileImageIconContainer: {
    backgroundColor: Colors.primary30.color,
    padding: 10,
    borderRadius: 100,
    position: 'absolute',
    bottom: -50,
    right: 125,
  },
  editProfileSectionFieldContainer: {
    gap: 16,
    marginTop: 72,
    marginBottom: 32,
    marginHorizontal: 16,
  },
  textInputRowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  textInputFlex: {
    flex: 1,
  },
  editProfileButtonContainer: {
    gap: 16,
    marginHorizontal: 16,
    marginBottom: 48,
  },
  editProfileButton: {
    backgroundColor: Colors.primary30.color,
  },
  closeAccountButton: {
    borderColor: Colors.indicatorRed.color,
  },
});

export default styles;
