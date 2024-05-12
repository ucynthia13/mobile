import React from 'react'

function SignupScreen() {
    //navigation to Login Screen 
    const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={globalStyles.welcome}>
            
        <View>
            <Text style={globalStyles.signupTitle}>Let's Register Your Account</Text>
            <TextInput placeholder="First Name" style={[globalStyles.signupInput, styles.input]} onChangeText={(text) => setInput({...input, firstName: text})} placeholderTextColor="#999" />
            <TextInput placeholder="Last Name" style={[globalStyles.signupInput, styles.input]} onChangeText={(text) => setInput({...input, lastName: text})} placeholderTextColor="#999" />
            <TextInput placeholder="Email" style={[globalStyles.signupInput, styles.input]} onChangeText={(text) => setInput({...input, email: text})} placeholderTextColor="#999" />
            <TextInput placeholder="Password" style={[globalStyles.signupInput, styles.input]} onChangeText={(text) => setInput({...input, password: text})} secureTextEntry={true} placeholderTextColor="#999" />
            <TouchableOpacity style={globalStyles.signupButton} onPress={handleSubmitInput}>
                <Text style={globalStyles.welcomeButtonText}>Register</Text>
            </TouchableOpacity>
            <View style={globalStyles.loginAlt}>
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