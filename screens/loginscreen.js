import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, View, Text, TouchableOpacity, TextInput } from 'react-native';

const initialLoginData = {
  email: '',
  password: ''
};

function LoginScreen() {
  // navigation to Login Screen
  const navigation = useNavigation();

  const [input, setInput] = useState(initialLoginData);
  const handleInputChange = (name, text) => {
    setInput({
      ...input,
      [name]: text
    });
  };

  const handleSubmitInput = () => {
    // Signup data handled
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

            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} className="items-center border border-gray-200 w-full p-5 mx-3 mb-3 rounded-md">
                <Text className="text-gray-400 font-bold">Login with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} className="items-center border border-gray-200 w-full p-5 mx-3 rounded-md">
                <Text className="text-gray-400 font-bold">Login with Facebook</Text>
            </TouchableOpacity>

            <Text className="mt-4 text-orange-400 font-bold">Forgot Password?</Text>

            <View className="flex-row mt-2 mb-3">    
                <Text className=" text-gray-400"> Don't have an account? </Text>
                <Text className="text-orange-400 font-bold"> Register</Text>
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
