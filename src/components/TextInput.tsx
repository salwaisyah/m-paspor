import * as React from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../assets/styles/Colors';
import FontFamily from '../../assets/styles/FontFamily';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

type DropdownItem = {
  label: string;
  value: string | number;
};

type DropdownCountryItem = {
  value: string;
  label: string;
  image: {
    uri: string;
  };
};

interface TextInputComponentProps {
  title?: string;
  iconButton?: boolean;
  onIconButtonPress?: () => void;
  placeholder?: string;
  isPassword?: boolean;
  isRequired?: boolean;
  isDate?: boolean;
  isDropdown?: boolean;
  isDropdownCountry?: boolean;
  dropdownItemData?: DropdownItem[];
  dropdownCountryItemData?: DropdownCountryItem[];
  isDisabled?: boolean;
  supportText?: string;
  containerHeight?: any;
  isMultiline?: boolean;
  isDropdownPressedSheet?: boolean;
  handleDropdownPressed?: () => void;
  countryValue?: string | null;
  setCountryValue?: (country: string) => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const TextInputComponent = (props: TextInputComponentProps) => {
  const {
    title,
    iconButton = false,
    onIconButtonPress,
    placeholder,
    isPassword = false,
    isRequired = false,
    isDate = false,
    isDropdown = false,
    isDropdownCountry = false,
    dropdownItemData,
    dropdownCountryItemData,
    isDisabled = false,
    supportText,
    containerHeight,
    isMultiline = false,
    isDropdownPressedSheet = false,
    handleDropdownPressed,
    countryValue,
    setCountryValue,
    value,
    onChangeText,
  } = props;

  const [secureText, setSecureText] = useState(isPassword);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [showPicker, setShowPicker] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = dropdownCountryItemData?.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
      onChangeText?.(formatted);
    }
  };

  const renderDropdownItem = (item: any) => {
    return (
      <View style={styles.dropdownItem}>
        <Text style={styles.dropdownTextItem}>{item.label}</Text>
      </View>
    );
  };

  const renderDropdownCountryItem = (item: any) => {
    return (
      <View style={styles.dropdownCountryItem}>
        <Image
          source={{uri: item.image.uri}}
          style={styles.imageCountryStyle}
        />
        <Text style={styles.dropdownTextItem}>{item.label}</Text>
      </View>
    );
  };

  const renderLeftIcon = () => {
    const selectedItem = filteredItems?.find(
      item => item.value === countryValue,
    );
    if (!selectedItem?.image?.uri) return null;

    return (
      <Image
        source={{uri: selectedItem.image.uri}}
        style={[styles.imageCountryStyle, {marginRight: 12}]}
      />
    );
  };

  const renderInputSearch = (
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    return (
      <View style={styles.searchContainer}>
        <TextInput
          mode="outlined"
          style={[inputStyle, isDisabled && styles.outlineColorDisabled]}
          theme={{roundness: 12}}
          placeholderTextColor={Colors.primary60.color}
          activeOutlineColor={Colors.primary10.color}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Cari"
          textColor="#48454E"
          contentStyle={{marginLeft: 48}}
          left={
            <TextInput.Icon
              icon="magnify"
              color="#48454E"
              style={{marginLeft: 8}}
            />
          }
        />
      </View>
    );
  };

  const renderInput = () => {
    if (isDropdown) {
      return (
        <View>
          <View style={styles.headerContainer}>
            {title && (
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                {isRequired && <Text style={styles.required}>*</Text>}
              </View>
            )}
            {iconButton && (
              <Pressable
                style={({pressed}) => ({
                  transform: [{scale: pressed ? 0.925 : 1}],
                })}
                onPress={onIconButtonPress}>
                <IconMaterialCommunity
                  name="information"
                  color={Colors.primary30.color}
                  size={20}
                />
              </Pressable>
            )}
          </View>
          <Dropdown
            style={[
              styles.dropdown,
              isDisabled && styles.outlineColorDisabledDropdown,
            ]}
            placeholderStyle={styles.placeholderDropdownStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={dropdownItemData ?? []}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            value={dropdownValue}
            onChange={item => {
              setDropdownValue(item.value);
              onChangeText?.(item.value);
            }}
            disable={isDisabled}
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
          <Pressable
            onPress={() => !isDisabled && setShowPicker(true)}
            style={({pressed}) => ({
              transform: [{scale: pressed ? 0.99 : 1}],
            })}>
            <TextInput
              mode="outlined"
              placeholder={placeholder}
              style={[inputStyle, isDisabled && styles.outlineColorDisabled]}
              theme={{roundness: 12}}
              placeholderTextColor={Colors.primary60.color}
              editable={false}
              value={formattedDate}
              right={<TextInput.Icon icon="calendar" color="#48454E" />}
              multiline={false}
              textColor="#48454E"
              disabled={isDisabled}
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

    if (isDropdownCountry) {
      return (
        <View>
          {title && (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              {isRequired && <Text style={styles.required}>*</Text>}
            </View>
          )}
          <Dropdown
            style={[
              styles.dropdown,
              isDisabled && styles.outlineColorDisabledDropdown,
            ]}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderDropdownStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            maxHeight={300}
            renderInputSearch={() =>
              renderInputSearch(searchQuery, setSearchQuery)
            }
            value={countryValue}
            data={filteredItems ?? []}
            valueField="value"
            labelField="label"
            placeholder={placeholder}
            searchPlaceholder="Cari"
            onChange={item => {
              if (setCountryValue) {
                setCountryValue(item.value);
              }
            }}
            disable={isDisabled}
            renderRightIcon={() => <Icon name="arrow-drop-down" size={20} />}
            renderItem={renderDropdownCountryItem}
            renderLeftIcon={renderLeftIcon}
          />
        </View>
      );
    }

    if (isDropdownPressedSheet) {
      return (
        <View>
          {title && (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              {isRequired && <Text style={styles.required}>*</Text>}
            </View>
          )}
          <Pressable
            onPress={handleDropdownPressed}
            style={({pressed}) => ({
              transform: [{scale: pressed ? 0.99 : 1}],
            })}>
            <TextInput
              mode="outlined"
              placeholder={placeholder}
              style={[
                inputStyle,
                isDisabled && styles.outlineColorDisabledDropdown,
              ]}
              theme={{roundness: 12}}
              placeholderTextColor={Colors.primary60.color}
              editable={false}
              value={value}
              onChangeText={onChangeText}
              right={
                <TextInput.Icon
                  icon="menu-down"
                  color="#48454E"
                  size={20}
                  style={{marginLeft: 24}}
                />
              }
              multiline={false}
              textColor="#48454E"
              disabled={isDisabled}
            />
          </Pressable>
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
          style={[inputStyle, isDisabled && styles.outlineColorDisabled]}
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
          textColor="#48454E"
          value={value}
          onChangeText={onChangeText}
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    includeFontPadding: false,
  },
  dropdown: {
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingStart: 16,
    paddingEnd: 8,
    borderWidth: 1,
    borderColor: '#98989A',
  },
  placeholderDropdownStyle: {
    fontSize: 13,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    color: Colors.primary60.color,
  },
  selectedTextStyle: {
    fontSize: 13,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
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
  dropdownCountryItem: {
    padding: 16,
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownTextItem: {
    flex: 1,
    fontSize: 13,
    ...FontFamily.notoSansRegular,
    color: Colors.primary30.color,
  },
  supportText: {
    marginTop: 8,
    ...FontFamily.notoSansRegular,
    fontSize: 10,
    textAlign: 'right',
    includeFontPadding: false,
    color: Colors.neutral70.color,
  },
  outlineColorDisabled: {
    backgroundColor: '#F8F9FE',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#e3e3e5',
  },
  outlineColorDisabledDropdown: {
    height: 58,
    backgroundColor: '#F8F9FE',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#e3e3e5',
  },
  imageCountryStyle: {
    width: 32,
    height: 20,
    borderRadius: 4,
    borderWidth: 0.75,
    borderColor: Colors.neutral90.color,
  },
  inputSearchStyle: {
    fontSize: 14,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
  },
  searchContainer: {
    margin: 16,
  },
});

export default TextInputComponent;
