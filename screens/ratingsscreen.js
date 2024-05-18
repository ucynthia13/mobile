import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { StarIcon } from 'react-native-heroicons/outline';
import Title from '../components/title';

function RatingsScreen() {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-center p-4 bg-black">
      <View className="mb-4 pb-4">
        <Text className="text-orange-400 text-center font-bold text-lg ">
          Yayy! We value your feedback, please rate your experience below:
        </Text>
      </View>
      <View className="flex flex-row justify-center mb-4 pb-4">
        <StarIcon size={24} color="orange" />
        <StarIcon size={24} color="orange" />
        <StarIcon size={24} color="orange" />
        <StarIcon size={24} color="white" />
        <StarIcon size={24} color="white" />
      </View>
      <View className="mb-4 pb-4">
        <Text className="text-orange-400 text-center font-bold text-lg">
          Thank you for helping us improve our service!
        </Text>
      </View>
        <Title />
    </SafeAreaView>
  );
}

export default RatingsScreen;
