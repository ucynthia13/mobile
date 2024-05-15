import React from 'react'; 
import { SafeAreaView, View, Text} from 'react-native'

function WelcomeScreen() {
  return (
    <SafeAreaView className="min-h-screen bg-orange-400 flex justify-center items-center">
      <View className="flex flex-row">
        <Text className="font-bold text-white text-2xl">Supa</Text>
        <Text className="font-bold text-2xl">Menu</Text>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
