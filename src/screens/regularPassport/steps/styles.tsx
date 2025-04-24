import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/styles/Colors';
import FontFamily from '../../../../assets/styles/FontFamily';

const styles = StyleSheet.create({
  subStepContainer: {
    backgroundColor: Colors.neutral100.color,
    padding: 16,
  },
  subStepButtonContainer: {
    gap: 16,
  },
  subStepButtonContained: {
    backgroundColor: Colors.primary30.color,
  },
  subStepButtonOutlined: {
    borderColor: Colors.primary30.color,
  },
  subStepTextWrapper: {
    gap: 10,
  },
  subStepTitle: {
    fontSize: 16,
    ...FontFamily.notoSansExtraBold,
    color: Colors.secondary30.color,
    includeFontPadding: false,
  },
  subStepDesc: {
    includeFontPadding: false,
    fontSize: 12,
    color: Colors.primary10.color,
    ...FontFamily.notoSansRegular,
    lineHeight: 20,
    textAlign: 'justify',
  },
  subStepTextInputContainer: {
    gap: 16,
  },
  subStepListTextRowContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  subStepListTextFlex: {
    flex: 1,
  },
  subStepButtonBackWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  subStepButtonBackText: {
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    fontSize: 10,
  },
  subStepSectionButtonTextTitle: {
    marginBottom: 8,
    fontSize: 12,
    includeFontPadding: false,
    ...FontFamily.notoSansBold,
    color: Colors.primary30.color,
    flex: 1,
  },
  subStepSectionButtonTextWrapper: {
    flexDirection: 'row',
  },
  sectionButtonWrapper: {
    flexDirection: 'row',
    gap: 16,
  },
  buttonContainedSecondary: {
    flex: 1,
    backgroundColor: Colors.secondary30.color,
  },
  textInputBulletTextWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
  subStepTextInputRowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  subStepTextInputFlex: {
    flex: 1,
  },
  subStepSectionButtonContainer: {
    marginBottom: 24,
    gap: 16,
  },
  subStepQuestionnaireOptionContainer: {
    borderWidth: 1,
    borderColor: Colors.secondary50.color,
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    gap: 16,
    backgroundColor: Colors.neutral100.color,
  },
  subStepCheckWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  questionnaireDataSecondary: {
    ...FontFamily.notoSansBold,
    fontSize: 12,
    color: Colors.secondary30.color,
    includeFontPadding: false,
  },
  applicantDetailContentContainer: {
    borderRadius: 16,
    backgroundColor: Colors.neutral100.color,
    borderWidth: 1,
    borderColor: Colors.primary70.color,
    marginVertical: 12,
    padding: 16,
    gap: 8,
  },
  applicantDetailTextContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  applicantDetailTopContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applicantDetailIconContentWrapper: {
    flexDirection: 'row',
    gap: 16,
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
  applicantDetailTexDescName: {
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  applicantDetailTexDescCode: {
    textAlign: 'right',
  },
  midContainer: {
    backgroundColor: Colors.neutral100.color,
  },
  midTextTitle: {
    ...FontFamily.notoSansExtraBold,
    fontSize: 18,
    includeFontPadding: false,
    marginBottom: 6,
    color: Colors.primary30.color,
  },
  midIconContainer: {
    gap: 8,
    marginVertical: 12,
  },
  midIconContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginVertical: 12,
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
  accordionContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  accordionOptionDataWrapper: {
    marginBottom: 16,
  },
  accordionTextContentWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
  accordionTextContentDesc: {
    flex: 1,
    color: Colors.primary30.color,
    ...FontFamily.notoSansRegular,
    fontSize: 12,
    textAlign: 'justify',
    includeFontPadding: false,
    lineHeight: 24,
  },
  accordionListFlex: {
    flex: 0,
  },
  accordionTextContentAlphabetWrapper: {
    marginStart: 16,
  }
});

export default styles;
