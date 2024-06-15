
import React, {useState} from 'react'
import { Alert, SafeAreaView, TouchableOpacity, Text, TextInput, View } from 'react-native'

const initialData = {
    token: ''
}
function TokenValidator() {
    const [inputData, setInputData] = useState(initialData)

    const handleDataChange = (name, text) => {
        if(/^\d*$/.test(text)){
            setInputData({
                ...inputData,
                [name]: text
            })
        }
    }

    const handleSubmitInput = async() => {
        try {
            const response = await fetch('http://10.5.220.67:1024/api/user/validateToken', {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(inputData)
              })
            const data = await response.json()

            if(response.ok){
                console.log(`Validation Success: ${data.message}`)
                Alert.alert('SUCCESS!!', `${data.message}`, [
                    { text: 'EXIT', onPress: () => console.log('alert closed') }
                ])
            }else{
            console.log(`Token not validated: ${data.message}`)
            }
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

  return (
    <SafeAreaView className="flex flex-1 px-4 items-center justify-center ">
        <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
            <TextInput placeholder='Enter meter number' onChangeText={(text) => handleDataChange('token', text)} className="flex-1 py-4"/>
        </View>
        <TouchableOpacity onPress={handleSubmitInput} className="items-center bg-orange-400 w-full p-5 mx-3 mt-1 border-radius rounded-md">
            <Text className="text-white font-bold">Validate</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default TokenValidator