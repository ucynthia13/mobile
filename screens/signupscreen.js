import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, View, Text, TouchableOpacity, TextInput } from 'react-native';
import tailwind from 'tailwind-rn';

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
      <View style={tailwind('flex-1 bg-white')}>
        <View style={tailwind('flex-1 items-center mt-5 pt-5 px-4')}>
          <View>
            <View style={tailwind('flex-row')}>
              <Text style={tailwind('text-black font-bold text-5xl')}>Supa</Text>
              <Text style={tailwind('text-black font-bold text-orange-500 text-5xl')}>Menu</Text>
            </View>
            <Text style={tailwind('mt-5 font-bold')}>Welcome....</Text>
            <Text style={tailwind('mt-2 text-gray-500')}>Please fill in the information</Text>
          </View>
          
          <View style={tailwind('flex-row border border-gray-300 px-4 mb-4 rounded-md')}>
            <TextInput
              placeholder="First Name"
              onChangeText={(text) => handleInputChange('firstName', text)}
              style={tailwind('flex-1 py-2')}
            />
          </View>
          
          <View style={tailwind('flex-row border border-gray-300 px-4 mb-4 rounded-md')}>
            <TextInput
              placeholder="Last Name"
              onChangeText={(text) => handleInputChange('lastName', text)}
              style={tailwind('flex-1 py-2')}
            />
          </View>
          
          <View style={tailwind('flex-row border border-gray-300 px-4 mb-4 rounded-md')}>
            <TextInput
              placeholder="Email"
              onChangeText={(text) => handleInputChange('email', text)}
              style={tailwind('flex-1 py-2')}
            />
          </View>
          
          <View style={tailwind('flex-row border border-gray-300 px-4 mb-4 rounded-md')}>
            <TextInput
              placeholder="Password"
              onChangeText={(text) => handleInputChange('password', text)}
              secureTextEntry={true}
              style={tailwind('flex-1 py-2')}
            />
          </View>

          <TouchableOpacity onPress={handleSubmitInput} style={tailwind('items-center bg-orange-400 w-full p-4 mx-3 rounded-md')}>
            <Text style={tailwind('text-white font-bold')}>Register</Text>
          </TouchableOpacity>

          <Text style={tailwind('py-5')}>Already have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={tailwind('items-center bg-orange-400 w-full p-4 mx-3 rounded-md')}>
            <Text style={tailwind('text-white font-bold')}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignupScreen;
