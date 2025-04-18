import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
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

export default HistoryScreen;
