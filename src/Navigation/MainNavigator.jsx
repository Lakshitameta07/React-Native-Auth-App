import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import Signup from '../Screens/Signup';
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';
import OTPScreen from '../Screens/OTPScreen';
import ImageScreen from '../Screens/PicScreen'

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          options={{headerTransparent: true}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="LoginPage"
          options={{headerTransparent: true}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{headerTransparent: true}}
          component={Signup}
        />
        <Stack.Screen
          name="home"
          options={{headerTransparent: true}}
          component={HomeScreen}
        />

        <Stack.Screen
          name="OtpScreen"
          options={{headerTransparent: true}}
          component={OTPScreen}
        />

        <Stack.Screen
          name="ImageScreen"
          options={{headerTransparent: true}}
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
