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
import NavigationRouteScreen from '../screens/navigationRoute';
import SetPasswordScreen from '../screens/setPassword';
import RegularPassportScreen from '../screens/regularPassport';
import GuidebookScreen from '../screens/guidebook';
import EazyPassportScreen from '../screens/eazyPassport';
import ApplicationDetailScreen from '../screens/applicationDetail';
import PassportRequirementsScreen from '../screens/passportRequirements';
import ApplicationGuideScreen from '../screens/applicationGuide';
import SeeRequirementsScreen from '../screens/seeRequirements';
import OtherMethodScreen from '../screens/otherMethod';
import BillingCodeScreen from '../screens/billingCode';

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
        name="NavigationRoute"
        component={NavigationRouteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" options={{headerShown: false}}>
        {() => (
          <HomeScreen showDialog={() => {}} visible />
        )}
      </Stack.Screen>
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
      <Stack.Screen name="Profile" options={{headerShown: false}}>
        {() => (
          <ProfileScreen showDialog={() => {}} visible />
        )}
      </Stack.Screen>
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
      <Stack.Screen
        name="SetPassword"
        component={SetPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegularPassport"
        component={RegularPassportScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Guidebook"
        component={GuidebookScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EazyPassport"
        component={EazyPassportScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ApplicationDetail"
        component={ApplicationDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ApplicationGuide"
        component={ApplicationGuideScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PassportRequirements"
        component={PassportRequirementsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SeeRequirements"
        component={SeeRequirementsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BillingCode"
        component={BillingCodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtherMethod"
        component={OtherMethodScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
