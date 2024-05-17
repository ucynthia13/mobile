import React from 'react'
import SignupScreen from '../screens/signupscreen'
import LoginScreen from '../screens/loginscreen'
import WelcomeScreen from '../screens/welcomescreen'
import { createStackNavigator } from '@react-navigation/stack';
import SearchRestaurant from '../screens/searchrestaurant';
import ProductDetails from '../screens/productdetails';
const Stack = createStackNavigator();

export default function AuthStack(){
    return(
            <Stack.Navigator>
                <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false}} />
            </Stack.Navigator>
    )
}