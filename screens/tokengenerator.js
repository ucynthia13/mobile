import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native' 
import {Alert, SafeAreaView, TouchableOpacity, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const initialData = {
    money: '',
    metern: ''
}
function TokenGenerator() {
    const [inputData, setInputData] = useState(initialData)
    const navigation = useNavigation()

    const handleDataChange = (name, text) => {
        if(/^\d*$/.test(text)){
            setInputData({
                ...inputData,
                [name]: text
            })
        }
    }

    const handleSubmit = async() => {
        const { money, metern } = inputData
        if (!money || !metern) {
          Alert.alert("Error", "Both fields are required")
          return
        }
         if (money < 100) {
            Alert.alert("Error", "Amount must be at least 100")
            return null
          }
          if (money % 100 !== 0) {
            Alert.alert("Error", "Amount must be divisible by 100")
            return null
          }
          if (money > 182500) {
            Alert.alert("Error", "Amount must not exceed 182500")
            return null
          }
      
        try {
            const response = await fetch('http://10.5.220.67:1024/api/user/generateToken', {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(inputData)
              })
            const data = await response.json()

            if(response.ok){
                console.log(`Purchase Success: ${data.message}`)
                const token = data.token
                Alert.alert('SUCCESS!!', `Token: ${token}`, [
                    { text: 'EXIT', onPress: () => console.log('alert closed') }
                ])
            }else{
            console.log(`Token not generated: ${data.message}`)
            }
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
        
      }
    
  return (
    <SafeAreaView className="flex flex-1 px-4 pt-4 items-center justify-center">
        <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
            <TextInput placeholder='Enter Amount of Money' onChangeText={(text) => handleDataChange('money', text)} className="flex-1 py-4"/>
        </View>
        
        <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
            <TextInput placeholder='Enter meter number' onChangeText={(text) => handleDataChange('metern', text)} className="flex-1 py-4"/>
        </View>
        
        <TouchableOpacity onPress={handleSubmit} className="items-center bg-orange-400 w-full p-5 mx-3 rounded-md mb-3">
            <Text className="text-white font-bold">Generate Token</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => navigation.navigate('TokenValidator')} className="items-center bg-blue-400 w-full p-5 mx-3 rounded-md">
            <Text className="text-white font-bold">Validate Token</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default TokenGenerator