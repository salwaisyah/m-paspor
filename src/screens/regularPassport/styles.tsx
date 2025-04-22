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
  nationalIdImage: {
    marginVertical: 16,
    height: 350,
    backgroundColor: Colors.primary70.color,
    borderRadius: 20,
  },
  subStepButtonContainer: {
    gap: 16,
  },
  subStepButtonActive: {
    backgroundColor: Colors.primary30.color,
  },
  subStepButtonInActive: {
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
  nationalIdImageContainer: {
    alignItems: 'center',
  },
  nationalIdImageCropped: {
    marginBottom: 16,
    width: 225,
    height: 140,
    backgroundColor: Colors.primary70.color,
    borderRadius: 20,
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
  },
});

export default styles;
