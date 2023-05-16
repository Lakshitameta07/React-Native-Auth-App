import {View, Text, TouchableOpacity,Button,Image} from 'react-native';
import React from 'react';
import globalStyles from '../GlobalStyles/Global';
import Auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';


export default function HomeScreen() {

   const navigation = useNavigation();

  return (
    <View style={globalStyles.homeView}>
      <Text style={{color: 'black'}}>Email : {Auth().currentUser.email}</Text>
      <Text style={{color: 'black'}}>ID : {Auth().currentUser.uid}</Text>

      <TouchableOpacity
         onPress={async () => { await Auth().signOut();
          navigation.dispatch(StackActions.replace('LoginPage'));
         }}
        style={{
          marginVertical: 20,
          width: '20%',
          backgroundColor: '#A4D0A4',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          shadowColor: 'rgba(0, 1, 0, 1)',
          shadowOpacity: 0.8,
          elevation: 6,
          shadowRadius: 15,
          shadowOffset: {width: 1, height: 13},
        }}>
        <Text style={{fontSize: 20, fontWeight:'900',color:'olive'}}>Logout</Text>
      </TouchableOpacity>

      <Button title='Add Image' onPress={() => navigation.navigate('ImageScreen')}/>
    </View>
  );
}
