import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, View, TextInput, Text, TouchableOpacity } from 'react-native';
const initialSignupData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}
function SignupScreen() {
    //navigation to Login Screen 
    const navigation = useNavigation()

    const [input, setInput] = useState(initialSignupData)
    const handleInputChange = (text) => {
        setInput({
            ...input,
            firstName: text
        })
    }

    const handleSubmitInput = () => {
        //Signup data handled
    }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            
        <View>
            <Text>Let's Register Your Account</Text>
            <TextInput placeholder="First Name"  onChangeText={(text) => handleInputChange(text)} placeholderTextColor="#999" />
            <TextInput placeholder="Last Name"  onChangeText={(text) => handleInputChange(text)} placeholderTextColor="#999" />
            <TextInput placeholder="Email"  onChangeText={(text) => handleInputChange(text)} placeholderTextColor="#999" />
            <TextInput placeholder="Password" onChangeText={(text) => handleInputChange(text)} secureTextEntry={true} placeholderTextColor="#999" />
            <TouchableOpacity onPress={handleSubmitInput}>
                <Text>Register</Text>
            </TouchableOpacity>
            <View>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default SignupScreen