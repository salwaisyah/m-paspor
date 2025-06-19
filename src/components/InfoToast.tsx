import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../assets/styles/Colors';

type InfoToastProps = {
  visible: boolean;
  message: string;
  onDismiss: () => void;
  duration?: number;
};

const InfoToast = ({
  visible,
  message,
  onDismiss,
  duration = 2000,
}: InfoToastProps) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={duration}
      style={styles.snackbar}>
      <View style={styles.contentContainer}>
        <Icon name="information" size={20} color="white" style={styles.icon} />
        <Text style={styles.message}>{message}</Text>
      </View>
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    backgroundColor: Colors.secondary10.color,
    borderRadius: 100,
    margin: 16,
    alignSelf: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  message: {
    color: 'white',
  },
});

export default InfoToast;
