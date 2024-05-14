import React, { useState } from 'react'
import {useNavigation} from '@react-navigation/native'
import { FlatList, SafeAreaView, TouchableOpacity, View, Image, Text } from 'react-native'
import restaurants from '../restaurants/restaurants.json'

function SearchRestaurant() {
    const navigation = useNavigation()
    const [restaurantData, setRestaurantData ] = useState(restaurants)
  return (
    <SafeAreaView style={{ flex: 1}}>
        <View style={{ }}>
            <FlatList 
                data={restaurantData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {product: item})}>
                            <Image source={item.image} />
                        </TouchableOpacity>
                        <View>
                            <Text>{item.location}</Text>
                            <Text>{item.type}, {item.dish}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    </SafeAreaView>
  )
}

export default SearchRestaurant