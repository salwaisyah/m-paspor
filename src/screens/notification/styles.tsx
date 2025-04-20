import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  appBarContainer: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary30.color,
  },
  topBackground: {
    backgroundColor: Colors.secondary30.color,
    height: 85,
    alignItems: 'center',
  },
  cardWrapper: {
    margin: 16,
    marginBottom: 165,
    marginTop: -69,
  },
  cardContainer: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.neutral100.color,
    borderWidth: 1,
    borderColor: Colors.secondary50.color,
  },
  topCardContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatllistGap: {
    height: 8,
  },
  notificationTitle: {
    fontSize: 14,
    ...FontFamily.notoSansBold,
  },
  notificationMessage: {
    fontSize: 12,
    marginTop: 4,
    ...FontFamily.notoSansRegular,
  },
  notificationDetail: {
    fontSize: 12,
    marginTop: 4,
    ...FontFamily.notoSansRegular,
  },
  notificationTime: {
    fontSize: 10,
    ...FontFamily.notoSansRegular,
  },
});

export default styles;
