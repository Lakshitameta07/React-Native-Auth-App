import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import globalStyles from '../GlobalStyles/Global';
import {useNavigation, StackActions} from '@react-navigation/native';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        const user = await auth().signInWithEmailAndPassword(email, password);
        
        if (user.user.emailVerified) {
          Alert.alert('Verified successfully');
          navigation.dispatch(StackActions.replace('home'));
        } else {
          Alert.alert('Please verify your email checkout your inbox');
          await auth().currentUser.sendEmailVerification();
          await auth().signOut();
        }

        // setMessage('');
        // console.log(isuserLogin);
        // navigation.dispatch(StackActions.replace("home"));
      } else {
        Alert.alert('Please enter correct email & password');
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

      <Text style={globalStyles.title}> Login </Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={value => setEmail(value)}
        keyboardType='email-address'
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={globalStyles.btn} onPress={() => handleLogin()}>
        <Text style={globalStyles.btntxt}>Login</Text>
      </TouchableOpacity>
       
       <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
      <Text style={globalStyles.otptxt}>Sign In with OTP!</Text>
      </TouchableOpacity>
      
      <View style={globalStyles.signupTextCont}>
      <Text style={globalStyles.signupText}>Not a User? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={globalStyles.signupButton}>Register here</Text></TouchableOpacity>
      </View>
      <Text style={globalStyles.errtxt}>{message}</Text>
    </View>
  );
}

export default LoginScreen;