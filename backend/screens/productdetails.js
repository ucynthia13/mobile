import React, { useMemo, useState } from 'react'
import { Image, SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { ChevronLeftIcon, ChevronRightIcon,ArrowRightIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import MoreButton from '../components/morebutton'
import CustomButton from '../components/custombutton'

function ProductDetails({ route }) {
    const navigation = useNavigation()
    const { product } = route.params
    const [amount, setAmount] = useState(0)
    const handleIncrement =()=> {
        setAmount(amount+1)
    }
    const handleDecrement = () => {
        if(amount>0){
            setAmount(amount-1)
        }
    }

    const retrieveMoreDrinks = () => {
        //retrieve more drinks
    }

    //tatal products price
    const totalPrice = useMemo(() => {
        return product.details.reduce((acc, item) => {
            //to each price in item
            return acc + parseFloat(item.price.replace(/,/g, ''))
        }, 0)
    }, [product.details]) 

  return (
    <SafeAreaView className="flex flex-1 px-5 pt-5 pb-5">
        <TouchableOpacity className="rounded-2xl p-1 mt-2 w-10" onPress={() => navigation.navigate('SearchRestaurants')}>
            <ChevronLeftIcon color="orange" size={25} />
        </TouchableOpacity>
        <View className="items-end">
            <Text className="text-gray-700 font-bold text-2xl">{product.name}</Text>
            <Text className="text-orange-400 my-2 text-2xl">{product.dish}</Text>
        </View>
        <FlatList 
        data={product.details}
        keyExtractor={(item, index)=> index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
            <View className="flex flex-row p-3 mt-5 bg-gray-200 rounded-2xl">
                <View>
                    <Image source={item.image} className="w-16 h-16 rounded-2xl" />
                </View>
                <View className="px-4">
                    <Text className="text-gray-500">{item.description}</Text>
                    <Text className="text-gray-500 font-bold">{item.category}</Text>

                    <View className="flex flex-row items-center justify-between mt-2">
                        <Text className="text-orange-500 font-bold">Frw {item.price}</Text>
                        <View className="flex flex-row">
                            {/* Increment */}
                            <TouchableOpacity onPress={handleIncrement} className="w-5 px-1 bg-white">
                                <Text className="font-bold text-orange-500">+</Text>
                            </TouchableOpacity>
                            <Text className="px-2 text-gray-500 font-bold">{amount}</Text>
                            {/* Decrement */}
                            <TouchableOpacity onPress={handleDecrement} className="w-5 px-1 bg-white">
                                <Text className="font-bold text-orange-500">-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )}

        />
        <MoreButton onPress={retrieveMoreDrinks} label="More Drinks"/>
        <View className="flex flex-row items-center justify-between mx-3 my-4">
            <Text className="font-bold text-gray-600 text-lg">Total</Text>
            <Text className="font-bold text-orange-500 text-lg">Frw {totalPrice.toLocaleString()}</Text>
        </View>
        <CustomButton onPress={() => navigation.navigate('CheckoutScreen', {totalPrice })} label="Proceed to checkout" />


    </SafeAreaView>
  )
}

export default ProductDetails