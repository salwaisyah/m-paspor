import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import AccountVerificationScreen from '../screens/accountVerification';
import HomeScreen from '../screens/home';
import HistoryScreen from '../screens/history';
import NotificationScreen from '../screens/notification';
import ProfileScreen from '../screens/profile';
import EditProfileScreen from '../screens/editProfile';
import CloseAccountScreen from '../screens/closeAccount';
import {RootStackParamList} from './type';
import TermsAndConnditionsScreen from '../screens/termsAndConditions';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountVerification"
        component={AccountVerificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConnditionsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CloseAccount"
        component={CloseAccountScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
