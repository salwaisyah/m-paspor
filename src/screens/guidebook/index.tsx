import React from 'react';
import {Pressable, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../assets/styles/Colors';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ApplicationGuideIcon from '../../../assets/icons/mobile_friendly.svg';
import PassportRequirementsIcon from '../../../assets/icons/list_box_outline.svg';

type GuidebookScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Guidebook'
>;

function GuidebookScreen() {
  const navigation = useNavigation<GuidebookScreenNavigationProp>();
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
        <Text style={styles.appBarTitle}>Buku Panduan</Text>
      </View>
      <View style={styles.contentContainer}>
        <Pressable
          style={({pressed}) => [
            styles.guidebookMenuWrapper,
            {
              transform: [{scale: pressed ? 0.975 : 1}],
            },
          ]}
          onPress={() => navigation.navigate('ApplicationGuide')}>
          <View style={styles.guidebookMenuContentWrapper}>
            <ApplicationGuideIcon />
            <View style={styles.guidebookMenuTextWrapper}>
              <Text style={styles.guidebookMenuTextTitle}>
                Panduan Aplikasi
              </Text>
              <Text style={styles.guidebookMenuTextDesc}>
                Panduan penggunaan aplikasi M-Paspor
              </Text>
            </View>
          </View>
          <Icon name="menu-right" size={24} />
        </Pressable>
        <Pressable
          style={({pressed}) => [
            styles.guidebookMenuWrapper,
            {
              transform: [{scale: pressed ? 0.975 : 1}],
            },
          ]}
          onPress={() => navigation.navigate('PassportRequirements')}>
          <View style={styles.guidebookMenuContentWrapper}>
            <PassportRequirementsIcon />
            <View style={styles.guidebookMenuTextWrapper}>
              <Text style={styles.guidebookMenuTextTitle}>
                Persyaratan Paspor
              </Text>
              <Text style={styles.guidebookMenuTextDesc}>
                Persyaratan seputar pengajuan paspor
              </Text>
            </View>
          </View>
          <Icon name="menu-right" size={24} />
        </Pressable>
      </View>
    </View>
  );
}

export default GuidebookScreen;
