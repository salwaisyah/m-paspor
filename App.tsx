import React from 'react';
import RootStack from './src/navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from 'react-native';


function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
