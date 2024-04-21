import React, { useContext, useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import ForgetPassword from "./Screens/ForgetPassword";
import VerifyOPT from './Screens/VerifyOPT';
import NewPasswordScreen from './Screens/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="VerifyOPT" component={VerifyOPT} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />




      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
