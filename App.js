import React from 'react'
import AuthStack from './routes/AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import SignupScreen from './screens/signupscreen'

function App() {
  //load fonts to use 

  return (
      <NavigationContainer>
        <SignupScreen />
      </NavigationContainer>
    )
}

export default App