import React, {forwardRef} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Colors from '../../assets/styles/Colors';
import FontFamily from '../../assets/styles/FontFamily';

const OTPTextInput = forwardRef((props: any, ref: any) => {
  const {value, onChangeText, onKeyPress} = props;

  const handleChange = (text: string) => {
    if (/^\d?$/.test(text)) {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.box}>
      <TextInput
        ref={ref}
        value={value}
        onChangeText={handleChange}
        onKeyPress={onKeyPress}
        style={styles.input}
        keyboardType="number-pad"
        maxLength={1}
        selectionColor={Colors.primary30.color}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  box: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primary60.color,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    ...FontFamily.notoSansBold,
    includeFontPadding: false,
  },
});

export default OTPTextInput;
