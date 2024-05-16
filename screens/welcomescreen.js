import React from 'react'; 
import { SafeAreaView, View, TouchableOpacity, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className="min-h-screen bg-orange-400 flex justify-center items-center">
      <TouchableOpacity className="flex flex-row" onPress={() => navigation.navigate('Signup')}>
        <Text className="font-bold text-white text-2xl">Supa</Text>
        <Text className="font-bold text-2xl">Menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
