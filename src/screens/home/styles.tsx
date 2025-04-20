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
    ...FontFamily.notoSansExtraBold,
    fontSize: 28,
    marginVertical: 14,
  },
  appBarContainer: {
    height: 64,
    backgroundColor: Colors.secondary30.color,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  topContainer: {
    backgroundColor: Colors.secondary30.color,
    height: 245,
    alignItems: 'center',
  },
  serviceContainer: {
    marginVertical: 12,
    marginHorizontal: 16,
    gap: 12,
  },
  serviceText: {
    color: Colors.primary30.color,
    ...FontFamily.notoSansExtraBold,
    fontSize: 18,
  },
  serviceOptionWrapper: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  serviceOptionContainer: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  serviceIcon: {
    padding: 8,
    backgroundColor: Colors.secondary70.color,
    borderRadius: 4,
  },
  serviceDesc: {
    width: 60,
    textAlign: 'center',
    fontSize: 10,
    marginTop: 8,
    color: Colors.primary30.color,
    ...FontFamily.notoSansRegular,
  },
  applicationStatusContainer: {
    marginHorizontal: 16,
  },
  applicationStatusTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    alignItems: 'center',
  },
  applicationStatusTitle: {
    color: Colors.primary30.color,
    ...FontFamily.notoSansExtraBold,
    fontSize: 18,
  },
  applicationStatusSeeAll: {
    color: Colors.secondary30.color,
    fontSize: 12,
    ...FontFamily.notoSansSemiBold,
  },
  cardWrapper: {
    marginBottom: 16,
  },
  flatllistGap: {
    height: 8,
  },
});

export default styles;
