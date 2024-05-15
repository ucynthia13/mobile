import React from 'react'
import MainContainer from './routes/MainContainer'
import WelcomeScreen from './screens/welcomescreen'
import SignupScreen from './screens/signupscreen'
import { NavigationContainer } from '@react-navigation/native'


function App() {
  //load fonts to use 

  return (
    <NavigationContainer>
      <SignupScreen />
    </NavigationContainer>
    )
}

export default App