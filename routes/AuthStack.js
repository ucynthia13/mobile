import React from 'react'
import SignupScreen from '../screens/signupscreen'
import LoginScreen from '../screens/loginscreen'
import WelcomeScreen from '../screens/welcomescreen'
import { createStackNavigator } from '@react-navigation/stack';

export default function AuthStack(){
    const Stack = createStackNavigator();

    return(
            <Stack.Navigator>
                <Stack.Screen name='SignupScreen' component={SignupScreen} />
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
            </Stack.Navigator>
    )
}