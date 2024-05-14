import React from 'react'
import { TouchableWithoutFeedback, View, Text, TextInput, TouchableOpacity } from 'react-native'

function LoginScreen() {
  return (
    <TouchableWithoutFeedback>
        <View style={globalStyles.signupContainer}>
            <Text style={globalStyles.signupLabel}>Email: </Text>
            <TextInput placeholder="Enter your email" style={globalStyles.signupInput} onChangeText={(text)=> setCredentials({...credentials, email: text})} />
            <Text style={globalStyles.signupLabel}>Password: </Text>
            <TextInput placeholder="Enter your password" style={globalStyles.signupInput} onChangeText={(text) => setCredentials({...credentials, password: text})} />
            <TouchableOpacity style={globalStyles.sxignupButton} onPress={handleLogin}>
                <Text  style={globalStyles.welcomeButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.loginAlt} onPress={navigateToresetPassword}> 
                <Text>Reset Your Password</Text>
            </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen