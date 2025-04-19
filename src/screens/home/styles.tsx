import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  bottomNavLabel: {
    color: Colors.neutral100.color,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 12,
    position: 'absolute',
  },
});

export default styles;
