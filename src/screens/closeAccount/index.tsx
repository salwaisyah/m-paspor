import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function CloseAccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Close Screen</Text>
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

export default CloseAccountScreen;
