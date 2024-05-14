import React from 'react'
import Homescreen from '../screens/homescreen'
import Searchrestaurant from '../screens/searchrestaurant'

function AppStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Homescreen} />
        <Stack.Screen name='Search' component={Searchrestaurant} />
    </Stack.Navigator>
  )
}

export default AppStack