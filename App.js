import React from 'react'
import AuthStack from './routes/AuthStack'
import { NavigationContainer } from '@react-navigation/native'

function App() {
  //load fonts to use 

  return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    )
}

export default App