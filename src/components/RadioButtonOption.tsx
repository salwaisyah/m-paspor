import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Colors from '../../assets/styles/Colors';
import {RadioButton} from 'react-native-paper';
import FontFamily from '../../assets/styles/FontFamily';

interface RadioButtonOptionProps {
  label: string;
  description: string;
  value: string;
  selectedValue: string;
  onSelect: (value: string) => void;
}

const RadioButtonOptionComponent = ({
  label,
  description,
  value,
  selectedValue,
  onSelect,
}: RadioButtonOptionProps) => {
  const isSelected = selectedValue === value;

  return (
    <Pressable
      onPress={() => onSelect(value)}
      style={[
        styles.container,
        isSelected && {backgroundColor: Colors.secondary30.color},
      ]}>
      <RadioButton
        value={value}
        status={isSelected ? 'checked' : 'unchecked'}
        onPress={() => onSelect(value)}
        color={Colors.neutral100.color}
        uncheckedColor={Colors.secondary30.color}
      />
      <View style={styles.textContainer}>
        {description === 'null' ? (
          <Text
            style={[
              styles.textTitle,
              isSelected && {color: Colors.neutral100.color},
              {...FontFamily.notoSansRegular},
            ]}>
            {label}
          </Text>
        ) : (
          <Text
            style={[
              styles.textTitle,
              isSelected && {color: Colors.neutral100.color},
            ]}>
            {label}
          </Text>
        )}
        {description && description !== 'null' && (
          <Text
            style={[
              styles.textDesc,
              isSelected && {color: Colors.neutral100.color},
            ]}>
            {description}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingStart: 12,
    paddingEnd: 16,
    borderWidth: 1,
    gap: 8,
    borderRadius: 8,
    borderColor: Colors.primary70.color,
  },
  textContainer: {
    gap: 6,
    flex: 1,
  },
  textTitle: {
    ...FontFamily.notoSansBold,
    fontSize: 14,
    color: Colors.primary30.color,
    includeFontPadding: false,
  },
  textDesc: {
    ...FontFamily.notoSansMedium,
    color: Colors.primary30.color,
    fontSize: 10.5,
    includeFontPadding: false,
    textAlign: 'justify',
  },
});

export default RadioButtonOptionComponent;
