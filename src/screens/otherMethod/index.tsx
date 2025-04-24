import {StatusBar, View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../assets/styles/Colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';

type OtherMethodScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OtherMethod'
>;

function OtherMethodScreen() {
  const navigation = useNavigation<OtherMethodScreenNavigationProp>();
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
        <Text style={styles.appBarTitle}>Metode Lain</Text>
      </View>
    </View>
  );
}

export default OtherMethodScreen;
