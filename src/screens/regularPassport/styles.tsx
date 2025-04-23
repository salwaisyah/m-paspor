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
    fontSize: 16,
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
  questionnaireTitle: {
    ...FontFamily.notoSansExtraBold,
    fontSize: 18,
    marginTop: 24,
    marginBottom: 8,
    marginHorizontal: 16,
    color: Colors.secondary30.color,
    includeFontPadding: false,
  },
  questionnaireOptionContainer: {
    borderWidth: 1,
    borderColor: Colors.secondary50.color,
    borderRadius: 8,
    padding: 16,
    margin: 16,
    gap: 16,
  },
  questionnaireData: {
    ...FontFamily.notoSansBold,
    fontSize: 14,
    color: Colors.primary30.color,
    includeFontPadding: false,
  },
  questionnaireDataSecondary: {
    ...FontFamily.notoSansBold,
    fontSize: 12,
    color: Colors.secondary30.color,
    includeFontPadding: false,
  },
  dialogContainer: {
    backgroundColor: 'white',
    elevation: 0,
    shadowColor: 'transparent',
    borderRadius: 20,
  },
  dialogTitle: {
    fontSize: 22,
    color: Colors.secondary30.color,
  },
  dialogContentContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    gap: 16,
  },
  dialogDesc: {
    fontSize: 14,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    color: Colors.primary30.color,
  },
  buttonAgree: {
    backgroundColor: Colors.primary30.color,
    marginTop: 12,
  },
  buttonDontAgree: {
    borderColor: Colors.primary30.color,
    marginTop: 12,
  },
  applicationStepsContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    ...FontFamily.notoSansBold,
    includeFontPadding: false,
    color: Colors.secondary30.color,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.secondary70.color,
  },
  subStepContainer: {
    backgroundColor: Colors.neutral100.color,
    padding: 16,
  },
  documentImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    height: 350,
    backgroundColor: Colors.primary70.color,
    borderRadius: 20,
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
  },
  documentImageContainer: {
    alignItems: 'center',
  },
  documentImageCropped: {
    marginBottom: 16,
    width: 225,
    height: 140,
    backgroundColor: Colors.primary70.color,
    borderRadius: 8,
  },
  subStepTextInputContainer: {
    gap: 16,
  },
  subStepTextInputRowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  subStepTextInputFlex: {
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
  subStepQuestionnaireOptionContainer: {
    borderWidth: 1,
    borderColor: Colors.secondary50.color,
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    gap: 16,
    backgroundColor: Colors.neutral100.color,
  },
  documentImageSupportText: {
    ...FontFamily.notoSansRegular,
    color: Colors.neutral100.color,
    includeFontPadding: false,
    fontSize: 14,
    marginBottom: 10,
  },
  textInputBulletTextWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
  textInputSupportText: {
    fontSize: 10,
    ...FontFamily.notoSansRegular,
    color: '#8F9098',
  },
  sectionButtonWrapper: {
    flexDirection: 'row',
    gap: 16,
  },
  buttonContainedSecondary: {
    flex: 1,
    backgroundColor: Colors.secondary30.color,
  },
  subStepSectionButtonContainer: {
    marginBottom: 24,
    gap: 16,
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
  subStepCheckWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
});

export default styles;
