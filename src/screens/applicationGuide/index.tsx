import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from '../../navigation/type';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ApplicationGuideScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ApplicationGuide'
>;

function ApplicationGuideScreen() {
  const navigation = useNavigation<ApplicationGuideScreenNavigationProp>();
  
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
        <Text style={styles.appBarTitle}>Panduan Aplikasi</Text>
      </View>
    </View>
  );
}

export default ApplicationGuideScreen;
