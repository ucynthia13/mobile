import React, { useEffect, useState } from 'react'
import {useNavigation} from '@react-navigation/native'
import { FlatList, SafeAreaView, TouchableOpacity, View, Image, Text, TextInput } from 'react-native'
import restaurants from '../restaurants/restaurants.json'
import { OutlineChevronLeftIcon } from 'react-native-heroicons/outline'

function SearchRestaurant() {

    const navigation = useNavigation()
    const [showSearchField, toggleSearchField] = useState(true)
    const [restaurantData, setRestaurantData ] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearchChange = (text) => {
        setSearchQuery(text)
        //filter items
    }

    useEffect(() => {
        setRestaurantData(restaurants)
    }, [])
  return (
    <SafeAreaView>
        <View className="flex-1">
            <View className="border">
                {/* Search field */}
                <View className="flex flex-row rounded-lg border-gray-300 bg-gray-300 py-3">
                    <TextInput placeholder='Search Restaurant' value={searchQuery} onChange={handleSearchChange} className="flex flex-1 text-black" />

                    <TouchableOpacity onPress={() => toggleSearchField(!showSearchField) }>
                        <OutlineChevronLeftIcon size={24} color="black" /> 
                    </TouchableOpacity>
                </View>
                
            </View>
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