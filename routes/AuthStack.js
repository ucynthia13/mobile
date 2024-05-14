import React from 'react'
import SignupScreen from '../screens/signupscreen'
import LoginScreen from '../screens/loginscreen'
import WelcomeScreen from '../screens/welcomescreen'

function AuthStack() {
    const Stack = createStackNavigator()
    const defaultOptions = {
        headerStyle: {
            backgroundColor: '#eee'
        },
        headerTintColor: '#444',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Signup' component={SignupScreen} />
        <Stack.Screen name='login' component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack