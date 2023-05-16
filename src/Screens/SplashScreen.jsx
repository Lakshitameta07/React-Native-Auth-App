import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
        const unsubscribe = await Auth().onAuthStateChanged(user => {
        const routeName = user !== null ? 'home' : 'LoginPage';
        unsubscribe();
        navigation.dispatch(StackActions.replace(routeName));
      });
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>SplashScreen</Text>
    </View>
  );
}
