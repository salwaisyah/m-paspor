import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import TextInputComponent from '../../components/TextInput';
import genderData from '../../model/DropdownData/GenderData';
import provinceData from '../../model/DropdownData/ProvinceData';
import cityData from '../../model/DropdownData/CityData';
import districtData from '../../model/DropdownData/DistrictData';
import postalCodeData from '../../model/DropdownData/PostalCodeData';
import {Button} from 'react-native-paper';

type EditProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EditProfile'
>;

function EditProfileScreen() {
  const placeholderProfileImage = require('../../../assets/images/placeholderProfileImage.png');
  const navigation = useNavigation<EditProfileScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.secondary30.color}
        barStyle="light-content"
      />
      <View style={styles.appBarContainer}>
        <Icon
          name="arrow-left"
          size={24}
          style={styles.appBarIcon}
          color={Colors.neutral100.color}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.appBarTitle}>Edit Profil</Text>
      </View>
      <ScrollView>
        <View style={styles.topContainer}>
          <Image source={placeholderProfileImage} style={styles.profileImage} />
          <View style={styles.editProfileImageIconContainer}>
            <Icon
              name="pencil-outline"
              size={18}
              color={Colors.neutral100.color}
            />
          </View>
        </View>
        <View style={styles.editProfileSectionFieldContainer}>
          <TextInputComponent
            title="Nama Lengkap"
            placeholder="Masukkan Nama Lengkap Anda"
          />
          <TextInputComponent title="NIK" placeholder="Masukkan NIK Anda" />
          <View style={styles.textInputRowContainer}>
            <View style={styles.textInputFlex}>
              <TextInputComponent
                title="Tanggal Lahir"
                placeholder="DD/MM/YYYY"
                isDate
              />
            </View>
            <View style={styles.textInputFlex}>
              <TextInputComponent
                title="Jenis Kelamin"
                placeholder="Jenis Kelamin"
                isDropdown
                dropdownItemData={genderData}
              />
            </View>
          </View>
          <TextInputComponent
            title="Email"
            placeholder="salwaadhani@gmail.com"
            isDisabled
          />
          <TextInputComponent
            title="Alamat Rumah"
            placeholder="Masukkan Alamat Rumah Anda"
            supportText="0/100 karakter"
          />
          <TextInputComponent
            title="Provinsi Sesuai KTP"
            placeholder="Provinsi"
            isDropdown
            dropdownItemData={provinceData}
          />
          <TextInputComponent
            title="Kabupaten/Kota Sesuai KTP"
            placeholder="Kabupaten/Kota"
            isDropdown
            dropdownItemData={cityData}
          />
          <TextInputComponent
            title="Kecamatan Sesuai KTP"
            placeholder="Kecamatan"
            isDropdown
            dropdownItemData={districtData}
          />
          <TextInputComponent
            title="Kode Pos Sesuai KTP"
            placeholder="Kode Pos"
            isDropdown
            dropdownItemData={postalCodeData}
          />
        </View>
        <View style={styles.editProfileButtonContainer}>
          <Button
            mode="contained"
            style={styles.editProfileButton}
            onPress={() => navigation.goBack()}>
            Simpan Perubahan
          </Button>
          <Button
            mode="outlined"
            textColor={Colors.indicatorRed.color}
            style={styles.closeAccountButton}
            onPress={() => navigation.navigate('CloseAccount')}>
            Tutup Akun
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

export default EditProfileScreen;
