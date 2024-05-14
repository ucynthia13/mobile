import React from 'react'
import WelcomeScreen from '../screens/welcomescreen'
import NotificationsScreen from '../screens/notifications'
import SearchRestaurant from '../screens/searchrestaurant'
import CartScreen from '../screens/cartscreen'
import HistoryScreen from '../screens/historyscreen'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcomescreen from '../screens/welcomescreen'
const Tab = createBottomTabNavigator()
const Welcome = 'Welcome'
const Notifications = 'Notifications'
const SearchRestaurants = 'SearchRestaurants'
const History = 'History'
const Cart = 'Cart'

function MainContainer() {

  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName={SearchRestaurants} screenOptions={({ route })=> ({
            tabBarIcon: ({ focused, color, size}) => {
                let iconName;
                let routeName = route.name

                if(routeName === Welcome){
                    iconName = focused ? 'home': 'home-outlined'
                }else if(routeName === Notifications){
                    iconName = focused ? 'notifications':'notifications-outlined'
                }
                else if(routeName === SearchRestaurants){
                    iconName = focused ? 'list': 'list-outlined'
                }else if(routeName === History){
                    iconName = focused ? 'clock' : 'clock-outlined'
                }
                else if(routeName === Cart){
                    iconName = focused ? 'cart' : 'cart-outlined'
                }
                
                <Ionicons name='iconName' size={size} color={color}/>
            }
        })}

        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10},
            style: { padding: 10, height: 70} 

        }}
        >

            <Tab.Screen name={Welcome} component={WelcomeScreen} />
            <Tab.Screen name={Notifications} component={NotificationsScreen} />
            <Tab.Screen name={SearchRestaurants} component={SearchRestaurant} />
            <Tab.Screen name={History} component={HistoryScreen} />
            <Tab.Screen name={Cart} component={CartScreen} />

        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer