import React from 'react'
import { SafeAreaView, View, Text} from 'react-native'

function WelcomeScreen() {
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
    <View style={{ flexDirection: 'row'}}>
        <Text style={{ fontWeight: 'bold', fontSize: 32, color: 'white'}}>Supa</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 32}}>Menu</Text>
    </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen