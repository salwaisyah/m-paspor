import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Portal, Dialog} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontFamily from '../../../assets/styles/FontFamily';
import ReceiptTextCheckOutlineIcon from '../../../assets/icons/receipt_text_check_outline.svg';

type Props = {
  visible: boolean;
  onBillingCodePress: () => void;
  onOtherMethodPress: () => void;
};

const DialogChoosePaymentMethod = (props: Props) => {
  const {visible, onBillingCodePress, onOtherMethodPress} = props;
  return (
    <Portal>
      <Dialog visible={visible} style={styles.dialogContainer}>
        <Dialog.Title style={styles.dialogTitle}>
          Pilih metode pembayaran
        </Dialog.Title>
        <View style={styles.dialogContentContainer}>
          <Pressable
            onPress={onBillingCodePress}
            style={({pressed}) => [
              styles.dialogButtonContainer,
              {
                transform: [{scale: pressed ? 0.975 : 1}],
              },
            ]}>
            <Icon
              name="credit-card-settings-outline"
              color={Colors.neutral100.color}
              size={24}
            />
            <Text style={styles.dialogTextButton}>Kode Biling</Text>
          </Pressable>
          <Pressable
            onPress={onOtherMethodPress}
            style={({pressed}) => [
              styles.dialogButtonContainer,
              {
                transform: [{scale: pressed ? 0.975 : 1}],
              },
            ]}>
            <ReceiptTextCheckOutlineIcon />
            <Text style={styles.dialogTextButton}>Metode Lain</Text>
          </Pressable>
        </View>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
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
    gap: 32,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dialogButtonContainer: {
    backgroundColor: Colors.primary30.color,
    padding: 16,
    borderRadius: 12,
    gap: 10,
    alignItems: 'center',
  },
  dialogTextButton: {
    width: 75,
    ...FontFamily.notoSansMedium,
    fontSize: 14,
    color: Colors.neutral100.color,
    includeFontPadding: false,
    textAlign: 'center',
  },
});

export default DialogChoosePaymentMethod;
