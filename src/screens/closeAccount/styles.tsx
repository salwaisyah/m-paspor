import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appBarTitle: {
    color: Colors.secondary30.color,
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
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  closeAccountInfoContainer: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  closeAccountTitle: {
    fontSize: 16,
    ...FontFamily.notoSansExtraBold,
    color: Colors.secondary30.color,
    marginBottom: 16,
  },
  closeAccountDescContainer: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 16,
  },
  closeAccountNumber: {
    ...FontFamily.notoSansRegular,
    fontSize: 12,
  },
  closeAccountDesc: {
    flex: 1,
    ...FontFamily.notoSansRegular,
    textAlign: 'justify',
    fontSize: 12,
  },
  closeAccountReasonContainer: {
    borderWidth: 1,
    borderColor: Colors.secondary50.color,
    padding: 12,
    margin: 16,
    borderRadius: 8,
    height: 170,
  },
  closeAccountButtonContainer: {
    gap: 16,
    marginHorizontal: 16,
    marginBottom: 48,
  },
  butttonBack: {
    borderColor: Colors.primary30.color,
  },
  buttonContinue: {
    backgroundColor: Colors.primary30.color,
  },
  dialogContainer: {
    backgroundColor: 'white',
    elevation: 0,
    shadowColor: 'transparent',
    borderRadius: 20,
  },
  dialogTitle: {
    fontSize: 22,
    color: Colors.indicatorRed.color,
  },
  dialogButtonContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    marginTop: 16,
    gap: 16,
  },
  buttonApproveCloseAccount: {
    backgroundColor: Colors.indicatorRed.color,
  },
  buttonCancelCloseAccount: {
    borderColor: Colors.indicatorRed.color,
  },
});

export default styles;
