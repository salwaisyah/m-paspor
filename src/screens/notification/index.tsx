import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default NotificationScreen;
