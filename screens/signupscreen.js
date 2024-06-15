  import React, { useState } from 'react';
  import { useNavigation } from '@react-navigation/native';
  import { Alert, TouchableWithoutFeedback, View, Text, TouchableOpacity, TextInput } from 'react-native';

  const initialSignupData = {
    firstName: '',
    email: '',
    password: ''
  };

  function SignupScreen() {
    // navigation to Login Screen
    const navigation = useNavigation();

    const [signupData, setSignupData] = useState(initialSignupData);
    const handleInputChange = (name, text) => {
      setSignupData({
        ...signupData,
        [name]: text
      });
    };

    const handleSubmitInput = async() => {
      try {
        const response = await fetch('http://10.5.220.37:1024/api/user/signup', {
          method: 'POST', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(signupData)
        })

        if(response.ok){
            console.log(`Customer Successfully Registered ${await response.json()}`)
            Alert.alert('SUCCESS!!', 'Proceed to Restaurants...', [
              {text: 'EXPLORE', onPress: () => navigation.navigate('SearchRestaurants')}
            ])
        }else{
          console.log(`Customer not registered ${response.status}`)
        }
      } catch (error) {
        console.error(`Error: ${error}`)
      }
    };

    return (
      <TouchableWithoutFeedback>
        <View className="flex pt-16 flex-1 bg-orange-400 rounded-b-3xl">
          <View className="px-4 flex-1 mt-2 py-5 items-center bg-white rounded-3xl ">
              <View>
                  <View className="flex-row">
                      <Text className="text-black font-bold text-5xl">Supa</Text>
                      <Text className="text-black font-bold text-orange-400 text-5xl">Menu</Text>
                  </View>
                  <Text className="mt-5 font-bold text-gray-600 text-center">Welcome....</Text>
                  <Text className="mt-2 mb-4 text-gray-400 text-center">Please fill in the information</Text>
              </View>
              
              <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
              <TextInput
                  placeholder="First Name"
                  onChangeText={(text) => handleInputChange('firstName', text)}
                  className="flex-1 py-3"
              />
              </View>
          
              <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
              <TextInput
                  placeholder="Email"
                  onChangeText={(text) => handleInputChange('email', text)}
                  className="flex-1 py-3"
              />
              </View>
              
              <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
              <TextInput
                  placeholder="Password"
                  onChangeText={(text) => handleInputChange('password', text)}
                  secureTextEntry={true}
                  className="flex-1 py-3"
              />
              </View>

              <TouchableOpacity onPress={handleSubmitInput} className="items-center bg-orange-400 w-full p-5 mx-3 mt-1 border-radius rounded-md">
                  <Text className="text-white font-bold">Register</Text>
              </TouchableOpacity>

              <Text className="pt-3 pb-4 text-gray-500 font-bold">OR</Text>
              <Text className="pb-4 text-gray-400">Already have an account?</Text>

              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} className="items-center bg-orange-400 w-full p-5 mx-3 rounded-md">
                  <Text className="text-white font-bold">Login</Text>
              </TouchableOpacity>

              <View className="flex-row pt-2 pb-3">    
                  <Text className="text-gray-400">Already have an account?</Text>
                  <Text className="text-orange-400 font-bold"> Register</Text>
              </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  export default SignupScreen;
