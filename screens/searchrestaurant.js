import React, { useState } from 'react'
import { SafeAreaView, View, TextInput, TouchableOpacity,  Text, FlatList} from 'react-native'
import restaurantData from '../restaurants/restaurants.json'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'

function SearchRestaurant() {
const [showSearchField, toggleSearchField] = useState(false)
const [searchQuery, setSearchQuery] =useState('')

const handleSearchChange = (text) => {
    setSearchQuery(text)
}
  return (
<SafeAreaView>
    <View className="flex-1">
        <View className="border">
            {/* Search field */}
            <View className="flex flex-row rounded-lg border-gray-300 bg-gray-300 py-3">
                <TextInput placeholder='Search Restaurant' value={searchQuery} onChange={handleSearchChange} className="flex flex-1 text-black" />

                <TouchableOpacity onPress={() => toggleSearchField(!showSearchField) }>
                    <ChevronLeftIcon size={24} color="black" /> 
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