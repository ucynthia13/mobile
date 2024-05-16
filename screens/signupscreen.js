import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, View, Text, TouchableOpacity, TextInput } from 'react-native';
import tailwind from 'tailwind-rn'

const initialSignupData = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

function SignupScreen() {
  // navigation to Login Screen
  const navigation = useNavigation();

  const [input, setInput] = useState(initialSignupData);
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
      <View className="flex flex-1 items-center mt-5 px-4">
        <View>
            <View className="flex-row">
                <Text className="text-black font-bold text-5xl">Supa</Text>
                <Text className="text-black font-bold text-orange-400 text-5xl">Menu</Text>
            </View>
            <Text className="mt-5 font-bold text-gray-600 text-center">Welcome....</Text>
            <Text className="mt-2 mb-4 text-gray-500 text-center">Please fill in the information</Text>
        </View>
        
        <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
          <TextInput
            placeholder="First Name"
            onChangeText={(text) => handleInputChange('firstName', text)}
            className="flex-1 py-2"
          />
        </View>
        
        <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
          <TextInput
            placeholder="Last Name"
            onChangeText={(text) => handleInputChange('lastName', text)}
            className="flex-1 py-2"
          />
        </View>
        
        <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
          <TextInput
            placeholder="Email"
            onChangeText={(text) => handleInputChange('email', text)}
            className="flex-1 py-2"
          />
        </View>
        
        <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
          <TextInput
            placeholder="Password"
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry={true}
            className="flex-1 py-2"
          />
        </View>

        <TouchableOpacity onPress={handleSubmitInput} className="items-center bg-orange-400 w-full p-4 mx-3 mt-3 border-radius rounded-md">
          <Text className="text-white font-bold">Register</Text>
        </TouchableOpacity>

        <Text className="py-5 text-gray-400">Already have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} className="items-center bg-orange-400 w-full p-4 mx-3 rounded-md">
          <Text className="text-white font-bold">Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignupScreen;
