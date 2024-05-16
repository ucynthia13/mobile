import React from 'react'
import MainContainer from './routes/MainContainer'
import WelcomeScreen from './screens/welcomescreen'
import SignupScreen from './screens/signupscreen'
import AuthStack from './routes/AuthStack'
import { NavigationContainer } from '@react-navigation/native'


function App() {
  //load fonts to use 

  return (
    <NavigationContainer>
      {/* <WelcomeScreen /> */}
      <AuthStack />
    </NavigationContainer>
    )
}

export default App