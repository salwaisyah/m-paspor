import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type PassportRequirementsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PassportRequirements'
>;

function PassportRequirementsScreen() {
  const navigation = useNavigation<PassportRequirementsScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.neutral100.color}
        barStyle="dark-content"
      />
      <View style={styles.appBarContainer}>
        <Icon
          name="arrow-left"
          size={24}
          style={styles.appBarIcon}
          color={Colors.secondary30.color}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.appBarTitle}>Persyaratan Paspor</Text>
      </View>
    </View>
  );
}

export default PassportRequirementsScreen;
