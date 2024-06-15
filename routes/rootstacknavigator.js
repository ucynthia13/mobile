import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../screens/productdetails';
import RootTabNavigator from './roottabnavigator';
import SearchRestaurant from '../screens/searchrestaurant';
import CheckoutScreen from '../screens/checkoutscreen';
import NotificationsScreen from '../screens/notifications';
import RatingsScreen from '../screens/ratingsscreen';
import LoginScreen from '../screens/loginscreen'
import SignupScreen from '../screens/signupscreen'
const Stack = createStackNavigator();

function RootStackNavigator(){
    return(
            <Stack.Navigator>
                <Stack.Screen name='TokenGenerator' component={TokenGenerator} options={{ headerShown: false}} />
                <Stack.Screen name='TokenValidator' component={TokenValidator} options={{ headerShown: false}} />
                <Stack.Screen name='MainTabs' component={RootTabNavigator} options={{ headerShown: false}} />
                <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false}} />
                <Stack.Screen name='SearchRestaurants' component={SearchRestaurant} options={{ headerShown: false}} />
                <Stack.Screen name='CheckoutScreen' component={CheckoutScreen} options={{ headerShown: false}} />
                <Stack.Screen name='NotificationsScreen' component={NotificationsScreen} options={{ headerShown: false}} />
                <Stack.Screen name='RatingsScreen' component={RatingsScreen} options={{ headerShown: false}} />
                <Stack.Screen name='SignupScreen' component={SignupScreen} options={{ headerShown: false}} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false}} />
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{ headerShown: false}} />
            </Stack.Navigator>
    )
}


export default RootStackNavigator

