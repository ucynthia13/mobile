import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native'

function productdetails() {
    const { product } = route.params
    const navigation = useNavigation() 
  return (
    <SafeAreaView>
        <View>
            <View>
                <Image source={product.image} />
            </View>
            <View>
                <Text>Product Details To go here</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                <Text>Proceed To Checkout</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default productdetails