// import React, { useState } from 'react'
// import { Ionicons } from '@expo/vector-icons'
// import { Pressable, View, Text} from 'react-native'
// import { globalStyles } from './assets/styles/globalStyles'
// import { StatusBar } from 'expo-status-bar'

// const iconHeight = 26

// export default class App extends React.Component{
//     state = {
//         screenText: 'Press An Icon'
//     }
//     changeText = (text) => {
//         console.log(text + 'has been pressed!')
//         this.setState({
//             screenText: text
//         })
//     }
//     render(){
//         <View style={globalStyles.container}>
//             <View>
//                 <Text>{this.state.screenText}</Text>
//                 <StatusBar style='auto' />
//             </View>
//             <View style={globalStyles.NavContainer}>
//                 <View style={globalStyles.NavBar}>
//                   {/* pressable component  */}
//                   <Pressable onPress={()=>this.changeText('Favorites')} style={globalStyles.IconBehave} android_ripple={{borderless:true, radius:50}}>
//                     {/* <Icon name='favorite-heart-button' height={iconHeight} width={iconWidth} color='#448aff'/> */}
//                     <Ionicons name='heart' size={iconHeight} color="blue" />
//                   </Pressable>

//                 </View>
//             </View>
//         </View>
//     }
// }


import React from 'react'
import {View, Text} from 'react-native'
import Homescreen from './screens/homescreen'

function App() {
  return (
    <Homescreen />
  )
}

export default App