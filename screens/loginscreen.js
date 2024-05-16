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
      <View className="flex flex-1 items-center mt-5 px-4 rounded-md">
        <View>
            <View className="flex-row">
                <Text className="text-black font-bold text-5xl">Supa</Text>
                <Text className="text-black font-bold text-orange-400 text-5xl">Menu</Text>
            </View>
            <Text className="mt-5 font-bold text-gray-600 text-center">Welcome....</Text>
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

        <Text className="py-5 text-gray-400 font-bold text-2xl">OR</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SearchRestaurant')} className="items-center bg-orange-400 w-full p-4 mx-3 rounded-md">
          <Text className="text-white font-bold">Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('SearchRestaurant')} className="items-center bg-orange-400 w-full p-4 mx-3 rounded-md">
          <Text className="text-white font-bold">Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
