import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Edit Screen</Text>
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

export default EditProfileScreen;
