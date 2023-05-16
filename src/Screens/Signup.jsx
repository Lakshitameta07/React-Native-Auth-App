import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import globalStyles from '../GlobalStyles/Global';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [username,setUsername] = useState('');

  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      if (email.length > 0 && password.length > 0 && username.length > 0) {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );

        const userData = { 
          id : response.user.uid,         
          username : username,
          email : email,
        }

        await firestore().collection("users").doc(response.user.uid).set(userData);

        await auth().currentUser.sendEmailVerification();

        await auth().signOut();

        Alert.alert('Please verify your email checkout link in your email');
        navigation.navigate('LoginPage');
      } else {
        Alert.alert('Please enter all details');
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      setMessage(error.message);
    }
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Enter Username"
        style={globalStyles.input}
        value={username}
        onChangeText={value => setUsername(value)}
      />
      <TextInput
        placeholder="Enter Email"
        style={globalStyles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={globalStyles.btn} onPress={() => handleSignUp()}>
        <Text style={globalStyles.btntxt}>SignUp</Text>
      </TouchableOpacity>
      <Text style={globalStyles.errtxt}>{message}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
        <Text style={{color: '#F7E1AE'}}>Already have an account ?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signup;
