import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, MagnifyingGlassCircleIcon, BellAlertIcon } from 'react-native-heroicons/outline';
import NotificationsScreen from '../screens/notifications';
import SearchRestaurant from '../screens/searchrestaurant';
import CheckoutScreen from '../screens/checkoutscreen';

const Tab = createBottomTabNavigator();
const Notifications = 'Notifications';
const Restaurants = 'Restaurants';
const Checkout = 'Checkout';

function RootTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={Restaurants}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === Notifications) {
            iconName = <HomeIcon size={size} color={color} />;
          } else if (route.name === Restaurants) {
            iconName = <MagnifyingGlassCircleIcon size={size} color={color} />;
          } else if (route.name === Checkout) {
            iconName = <BellAlertIcon size={size} color={color} />;
          }

          return iconName;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: { height: 60, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
        tabBarButton: (props) => <TouchableOpacity {...props} />,
      })}
    >
      <Tab.Screen name={Restaurants} component={SearchRestaurant} options={{ headerShown: false }} />
      <Tab.Screen name={Notifications} component={NotificationsScreen} options={{ headerShown: false }} />
      <Tab.Screen name={Checkout} component={CheckoutScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default RootTabNavigator;
