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
    includeFontPadding: false,
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
    paddingHorizontal: 16,
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
    marginTop: 16,
    color: Colors.primary30.color,
  },
  midIconContainer: {
    gap: 8,
    marginVertical: 12,
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
  midTextContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  midTextContentContainer: {
    marginTop: 12,
    gap: 12,
  },
  midTextContentTitle: {
    fontSize: 12,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    color: Colors.primary30.color,
  },
  midTextContentData: {
    fontSize: 12,
    ...FontFamily.notoSansSemiBold,
    includeFontPadding: false,
    color: Colors.primary30.color,
  },
  applicantDetailContentContainer: {
    borderRadius: 16,
    backgroundColor: Colors.neutral100.color,
    borderWidth: 1,
    borderColor: Colors.primary70.color,
    margin: 12,
    padding: 16,
    gap: 8,
  },
  applicantDetailTextContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  applicantDetailTextTitle: {
    fontSize: 12,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    color: Colors.primary30.color,
    flex: 1,
  },
  applicantDetailTextDesc: {
    fontSize: 12,
    ...FontFamily.notoSansBold,
    includeFontPadding: false,
    color: Colors.primary30.color,
    flex: 1.2,
  },
  applicantDetailTexDescName: {
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  applicantDetailTexDescCode: {
    textAlign: 'right',
  },
  applicantDetailContentChildContainer: {
    padding: 16,
    borderWidth: 1,
    marginVertical: 8,
    borderColor: Colors.primary70.color,
    borderRadius: 8,
    gap: 12,
  },
  applicantDetailBottomContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  applicantDetailFeeContentWrapper: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  applicantDetailBottomText: {
    fontSize: 14,
    ...FontFamily.notoSansBold,
    color: Colors.primary30.color,
    includeFontPadding: false,
  },
  applicantDetailContentChildButton: {
    marginTop: 8,
    backgroundColor: Colors.primary30.color,
  },
  applicantDetailContentChildButtonOutlined: {
    marginTop: 8,
    borderColor: Colors.primary30.color,
  },
});

export default styles;
