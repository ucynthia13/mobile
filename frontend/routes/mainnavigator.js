import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import RootStackNavigator from './rootstacknavigator'

function MainNavigator() {
  return (
    <NavigationContainer>
        <RootStackNavigator />
    </NavigationContainer>
  )
}

export default MainNavigator