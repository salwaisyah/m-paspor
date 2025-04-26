import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;

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
    includeFontPadding: false,
    flex: 1,
    marginEnd: 16,
  },
  appBarContainer: {
    height: 72,
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
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 20,
    backgroundColor: Colors.secondary70.color,
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
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
  indicatorInactive: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.neutral100.color,
    marginHorizontal: 4,
  },
});

export default styles;
