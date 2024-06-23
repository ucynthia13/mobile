import React from 'react'
import { SafeAreaView, View, Text, Image} from 'react-native'
import invoice from '../assets/images/payment/invoice.png'
import MoreButton from '../components/morebutton'
import CustomButton from '../components/custombutton'
import Title from '../components/title'
import { useNavigation } from '@react-navigation/native'

function NotificationsScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className="flex flex-1 px-4 bg-black">

      <Image source={invoice} />
      <Text className="font-bold text-orange-400 text-center text-xl">Payment Success, Yayy!</Text>
      <Text className="text-gray-500 text-center my-4">We will send you an order details to your email after the successful payment</Text>
      <View className="mb-4">
        <MoreButton label="Check Details" />
      </View>
      <View className="my-4">
        <CustomButton label="Download Invoice" onPress={() => navigation.navigate('RatingsScreen')}/>
      </View>
      <View className="items-center">
        <Title primary={false}/>
      </View>
    </SafeAreaView>
  )
}

export default NotificationsScreen