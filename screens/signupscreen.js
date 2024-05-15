import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, View, TextInput, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons'
import InputWithIcon from '../components/inputwithicon'
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            
        <View style={{flex: 1, alignItems: 'center' , marginTop: 30}}>
            <View style={{ flexDirection: 'row', fontWeight: 'bold'}}>
                <Text style={{ color: 'black'}}>Supa</Text>
                <Text style={{ color: 'white'}}>Menu</Text>
            </View>
                <InputWithIcon placeholder="First Name" onChangeText={(text) => handleInputChange('firstName', text)} iconName="account" />
                <InputWithIcon placeholder="Last Name" onChangeText={(text) => handleInputChange('lastName', text)} iconName="account-search" />
                <InputWithIcon placeholder="Email" onChangeText={(text) => handleInputChange('email', text)} iconName="email" />
                <InputWithIcon placeholder="Password" onChangeText={(text) => handleInputChange('password', text)} secureTextEntry={true} iconName="lock" />

                <TouchableOpacity onPress={handleSubmitInput} style={{ alignItems: 'center', backgroundColor: 'orange', paddingVertical: 12}}>
                    <Text style={{ color: 'white'}}>Register</Text>
                </TouchableOpacity>
                <View>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ alignItems: 'center', backgroundColor: 'orange', paddingVertical: 16}}>
                        <Text style={{ color: 'white'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </TouchableWithoutFeedback>
  )
}

export default SignupScreen