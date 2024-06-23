import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, TouchableWithoutFeedback, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import fb from '../assets/images/login/fb.png'
import google from '../assets/images/login/google.png'
import { AsyncStorage } from 'react-native';

const initialLoginData = {
  email: '',
  password: ''
};

function LoginScreen() {
  // navigation to Login Screen
  const navigation = useNavigation();

  const [loginData, setLoginData] = useState(initialLoginData);
  const handleInputChange = (name, text) => {
    setLoginData({
      ...loginData,
      [name]: text
    });
  };

  const handleSubmitInput = async () => {
    // Signup data handled
    // Email format validation
    const { email, password } = loginData
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    // Password strength validation (minimum 8 characters, at least one letter and one number)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert("Error", "Password must be at least 8 characters long and contain at least one letter and one number");
      return;
    }

    try {
      const response = await fetch('http://10.5.220.37:1024/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
      const data = await response.json()
      if (response.ok) {
        console.log(`Token: ${data.token}`)
        //store the token locally 
        await AsyncStorage.setItem('userToken', data.token)
        Alert.alert('SUCCESS!!', 'Proceed to restaurants...', [
          { text: 'EXPLORE', onPress: () => navigation.navigate('SearchRestaurants') }
        ])
      } else {
        console.log(`Failed Logging in: ${data.message}`)
      }
    } catch (error) {
      console.log(`Error logging in: ${error.message}`)
    }
  };

  return (
    <TouchableWithoutFeedback>
      <View className="flex pt-16 flex-1 bg-orange-400 rounded-b-3xl">
        <View className="px-4 flex-1 mt-2 py-5 items-center bg-white rounded-3xl ">

          <View>
            <View className="flex-row">
              <Text className="text-black font-bold text-5xl">Supa</Text>
              <Text className="text-black font-bold text-orange-400 text-5xl">Menu</Text>
            </View>
            <Text className="mt-5 font-bold text-gray-600 text-center">Welcome....</Text>
            <Text className="mt-2 mb-4 text-gray-400 text-center">Sign In To Continue</Text>
          </View>

          <View className="flex flex-row border border-gray-200 px-4 mb-4 rounded-md">
            <TextInput
              placeholder="Email"
              onChangeText={(text) => handleInputChange('email', text)}
              className="flex-1 py-3"
            />
          </View>

          <View className="flex flex-row border border-gray-200 px-4 mb-4 rounded-md">
            <TextInput
              placeholder="Password"
              onChangeText={(text) => handleInputChange('password', text)}
              secureTextEntry={true}
              className="flex-1 py-3"
            />
          </View>

          <TouchableOpacity onPress={handleSubmitInput} className="items-center bg-orange-400 w-full p-5 mx-3 mt-1 border-radius rounded-md shadow-md">
            <Text className="text-white font-bold">Login</Text>
          </TouchableOpacity>

          <Text className="pt-3 pb-4 text-gray-500 font-bold">OR</Text>

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} className="flex-row items-center justify-center border border-gray-200 w-full p-5 mx-3 mb-3 rounded-md">
            <Image source={google} className="w-5 h-5" />
            <Text className="text-gray-400 font-bold px-2">Login with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} className="flex-row items-center justify-center border border-gray-200 w-full p-4 mx-3 rounded-md">
            <Image source={fb} className="w-9 h-9" />
            <Text className="text-gray-400 font-bold">Login with Facebook</Text>
          </TouchableOpacity>

          <Text className="mt-4 text-orange-400 font-bold">Forgot Password?</Text>

          <View className="flex-row mt-2 mb-4">
            <Text className=" text-gray-400"> Don't have an account? </Text>
            <Text className="text-orange-400 font-bold"> Register</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
