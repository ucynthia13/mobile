import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, View, Text, TouchableOpacity } from 'react-native';
import InputWithIcon from './components/inputwithicon'
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
    const handleInputChange = (name, text) => {
        setInput({
            ...input,
            [name]: text
        })
    }

    const handleSubmitInput = () => {
        //Signup data handled
    }
  return (
    <TouchableWithoutFeedback>
            
        <View className="flex flex-1 items-center mt-10 px-10 ">
            <View className="flex-row font-bold">
                <Text className="text-black">Supa</Text>
                <Text className="text-black">Menu</Text>
            </View>
                <InputWithIcon placeholder="First Name" onChangeText={(text) => handleInputChange('firstName', text)} />
                <InputWithIcon placeholder="Last Name" onChangeText={(text) => handleInputChange('lastName', text)} />
                <InputWithIcon placeholder="Email" onChangeText={(text) => handleInputChange('email', text)} />
                <InputWithIcon placeholder="Password" onChangeText={(text) => handleInputChange('password', text)} secureTextEntry={true} />

                <TouchableOpacity onPress={handleSubmitInput} className="items-center bg-orange-400 w-full p-4 mx-5 border-radius">
                    <Text className="text-white font-bold">Register</Text>
                </TouchableOpacity>

                <Text className="py-5">Already have an account?</Text>

                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} className="items-center bg-orange-400 w-full p-4 mx-5">
                    <Text className="text-white font-bold">Login</Text>
                </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default SignupScreen