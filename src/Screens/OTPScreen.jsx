import { View, TextInput,TouchableOpacity,Text,Alert} from 'react-native'
import React,{useState} from 'react'
import globalStyles from '../GlobalStyles/Global';
import auth from '@react-native-firebase/auth'

export default function OTPScreen() {

  const [mobileNo,setMobileNo] = useState('');
  const [otp,setOTP] = useState('');
  const [confirmData,setConfirmData] = useState('');

    const sendotp = async () => {
        try {
            const mobile = "+91" + mobileNo;
            const response = await auth().signInWithPhoneNumber(mobile);
            setConfirmData(response);
            console.log(response);
            Alert.alert('OTP is send Please verify it')
        } catch (error) {
            console.log(error);
        }
    };
    const submitotp = async () => {
        try {
          const response = await confirmData.confirm(otp);  
          console.log(response);

          Alert.alert("your number is verified")
        } catch (error) {
            console.log(error)
        }
    }
 
  return (
    <View style={globalStyles.container}>
      <TextInput style={globalStyles.input}
        placeholder='Enter Mobile Number'
        keyboardType='number-pad'
        onChangeText={(value) => setMobileNo(value)}
      />
      <TouchableOpacity style={globalStyles.btn}
         onPress={sendotp}
      >
        <Text style={globalStyles.btntxt}>Send OTP</Text>
      </TouchableOpacity>

      <TextInput style={globalStyles.input}
        placeholder='Enter OTP'
        keyboardType='phone-pad'
        onChangeText={(value) => setOTP(value)}
      />
      <TouchableOpacity style={globalStyles.btn}
         onPress={submitotp}
      >
        <Text style={globalStyles.btntxt}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}