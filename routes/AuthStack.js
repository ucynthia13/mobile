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
                <Stack.Screen name='SignupScreen' component={SignupScreen} options={{ headerShown: false}}/>
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{ headerShown: false}}/>
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false}}/>
                <Stack.Screen name='SearchRestaurant' component={SearchRestaurant} options={{ headerShown: false}} />
                <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false}} />
            </Stack.Navigator>
    )
}