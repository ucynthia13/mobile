import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Text, Image } from 'react-native'
import { WalletIcon, ChevronLeftIcon, LockClosedIcon } from 'react-native-heroicons/outline'
import mtn from '../assets/images/payment/mtn.png'
import airtel from '../assets/images/payment/airtel.png'
import cash from '../assets/images/payment/cash.png'
import { useNavigation } from '@react-navigation/native'

function CheckoutScreen({ route }) {
  const navigation = useNavigation()
  const { totalPrice } = route.params

  //payment
  const PaymentOption = ({ source, option}) => (
    <TouchableOpacity className="flex flex-row items-center mt-1">
      <Image source={source} className="w-24 h-24 mx-4" resizeMode="contain" />
      <Text className="text-lg text-gray-600 text-center mx-4">{option}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView className="flex flex-1 px-4 pt-4">
      <View className="shadow-lg shadow-green-500/50 rounded-4xl pt-4 px-4">
        <TouchableOpacity className="mt-2 w-10" onPress={() => navigation.navigate('SearchRestaurants')}>
          <ChevronLeftIcon color="green" size={25} />
        </TouchableOpacity>
        <View className="flex flex-row items-center justify-between mt-4">
          <View className="flex flex-row">
            <Text className="font-bold text-xl">Checkout</Text>
            <WalletIcon size={24} color="green" />
          </View>
          <View>
            <Text className="text-green-500 font-bold text-xl">Frw {totalPrice}</Text>
            <Text className="text-gray-400">Including VAT</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-center mt-5">
          <TouchableOpacity className="p-4 rounded-xl">
            <Text className="font-bold text-lg">Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-green-500 p-4 rounded-xl">
            <Text className="text-white font-bold text-lg">Mobile & Cash</Text>
          </TouchableOpacity>
        </View>
      </View>

      <PaymentOption source={mtn} option="MTN Mobile Money" />
      <PaymentOption source={airtel} option="Airtel Money" />
      <PaymentOption source={cash} option="Cash" />

      <Text className="text-gray-500 text-center mt-4">We will send you an order details to your email after the successful payment</Text>

      <TouchableOpacity className="flex-row bg-green-500 p-4 rounded-xl items-center justify-center mt-4" onPress={() => navigation.navigate('NotificationsScreen')}>
        <LockClosedIcon size={20} color="white"/>
        <Text className="text-white font-bold text-lg px-2">Pay for the order</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default CheckoutScreen