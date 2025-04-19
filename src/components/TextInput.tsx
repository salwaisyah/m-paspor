import * as React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../assets/styles/Colors';
import FontFamily from '../../assets/styles/FontFamily';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

type DropdownItem = {
  label: string;
  value: string | number;
};

interface TextInputComponentProps {
  title?: string;
  placeholder?: string;
  isPassword?: boolean;
  isRequired?: boolean;
  isDate?: boolean;
  isDropdown?: boolean;
  dropdownItemData?: DropdownItem[];
  isDisabled?: boolean;
  supportText?: string;
  containerHeight?: any;
  isMultiline?: boolean;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  title,
  placeholder,
  isPassword = false,
  isRequired = false,
  isDate = false,
  isDropdown = false,
  dropdownItemData,
  isDisabled = false,
  supportText,
  containerHeight,
  isMultiline = false,
}) => {
  const [secureText, setSecureText] = useState(isPassword);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [showPicker, setShowPicker] = useState(false);
  const [genderValue, setGenderValue] = useState(null);

  const inputStyle = [
    styles.containerBackground,
    styles.placeholderText,
    containerHeight && {height: containerHeight},
  ];

  const handleDateChange = (event: any, date?: Date) => {
    if (event.type === 'dismissed') {
      setShowPicker(false);
      return;
    }

    if (date) {
      setShowPicker(Platform.OS === 'ios');
      setSelectedDate(date);
      const formatted = `${String(date.getDate()).padStart(2, '0')}/${String(
        date.getMonth() + 1,
      ).padStart(2, '0')}/${date.getFullYear()}`;
      setFormattedDate(formatted);
    }
  };

  const renderDropdownItem = (item: any) => {
    return (
      <View style={styles.dropdownItem}>
        <Text style={styles.dropdownTextItem}>{item.label}</Text>
      </View>
    );
  };

  const renderInput = () => {
    if (isDropdown) {
      return (
        <View>
          {title && (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              {isRequired && <Text style={styles.required}>*</Text>}
            </View>
          )}
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderDropdownStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={dropdownItemData ?? []}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            value={genderValue}
            onChange={item => {
              setGenderValue(item.value);
            }}
            renderRightIcon={() => <Icon name="arrow-drop-down" size={20} />}
            renderItem={renderDropdownItem}
          />
        </View>
      );
    }

    if (isDate) {
      return (
        <View>
          <View style={styles.titleContainer}>
            {title && <Text style={styles.title}>{title}</Text>}
            {isRequired && <Text style={styles.required}>*</Text>}
          </View>
          <Pressable onPress={() => setShowPicker(true)}>
            <TextInput
              mode="outlined"
              placeholder={placeholder}
              style={inputStyle}
              theme={{roundness: 12}}
              placeholderTextColor={Colors.primary60.color}
              editable={false}
              value={formattedDate}
              right={<TextInput.Icon icon="calendar" />}
              multiline={false}
            />
          </Pressable>
          {showPicker && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display="calendar"
              onChange={handleDateChange}
            />
          )}
        </View>
      );
    }

    return (
      <View>
        {title && (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            {isRequired && <Text style={styles.required}>*</Text>}
          </View>
        )}
        <TextInput
          mode="outlined"
          placeholder={placeholder}
          style={inputStyle}
          theme={{roundness: 12}}
          placeholderTextColor={Colors.primary60.color}
          activeOutlineColor={Colors.primary10.color}
          secureTextEntry={secureText}
          disabled={isDisabled}
          right={
            isPassword ? (
              <TextInput.Icon
                icon={secureText ? 'eye-off' : 'eye'}
                onPress={() => setSecureText(prev => !prev)}
                forceTextInputFocus={false}
              />
            ) : null
          }
          multiline={isMultiline}
        />
        {supportText && <Text style={[styles.supportText]}>{supportText}</Text>}
      </View>
    );
  };

  return <View>{renderInput()}</View>;
};

const styles = StyleSheet.create({
  containerBackground: {
    backgroundColor: Colors.neutral100.color,
    marginTop: 8,
  },
  title: {
    ...FontFamily.notoSansBold,
    fontSize: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  required: {
    ...FontFamily.notoSansBold,
    fontSize: 12,
    color: Colors.indicatorRed.color,
  },
  placeholderText: {
    fontSize: 13,
    ...FontFamily.notoSansRegular,
  },
  dropdown: {
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingStart: 16,
    paddingEnd: 8,
    borderWidth: 1,
    borderColor: Colors.primary40.color,
  },
  placeholderDropdownStyle: {
    fontSize: 13,
    ...FontFamily.notoSansRegular,
    color: Colors.primary60.color,
  },
  selectedTextStyle: {
    fontSize: 13,
    ...FontFamily.notoSansRegular,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  dropdownItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownTextItem: {
    flex: 1,
    fontSize: 13,
  },
  supportText: {
    marginTop: 8,
    ...FontFamily.notoSansRegular,
    fontSize: 10,
    textAlign: 'right',
    includeFontPadding: false,
    color: Colors.neutral70.color,
  },
});

export default TextInputComponent;
