import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, TextInput, Text, TouchableOpacity, View, Image, ScrollView, FlatList } from 'react-native';
import { ChevronLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import restaurantData from '../restaurants/restaurants.js'
import { useNavigation } from '@react-navigation/native';

function SearchRestaurant() {
  const navigation = useNavigation()
  const [showSearchField, toggleSearchField] = useState(true)
  const [restaurants, setRestaurants ] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(()=> {
    setRestaurants(restaurantData)
  }, [])

  const handleSearchChange = (query) => {
    setSearchQuery(query)
    //filter items
  }
  return (
      <SafeAreaView className="flex flex-1 pt-4">

        <View className="flex-row items-center py-2 border-b-1 ">
              <TouchableOpacity onPress={() => navigation.navigate('WelcomeScreen')} className="rounded-2xl bg-gray-200 p-1 mt-2 mx-4 ">
                <ChevronLeftIcon color="orange" size={25} />
              </TouchableOpacity>
            <View className="flex-row items-center border-radius-1 py-3">
            {showSearchField && (
              <TextInput
                placeholder='Search...'
                placeholderTextColor='gray'
                value={searchQuery}
                onChangeText={handleSearchChange}
                className="flex flex-1 text-black px-3 font-bold"
              />
              )}
            </View>
        </View>

        <FlatList 
        data={restaurants}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item}) => (
            <TouchableOpacity className="mx-4" onPress={() => navigation.navigate('ProductDetails', {product: item})}>
            <View className="flex-1 flex-row bg-gray-200 mt-3 p-3 rounded-2xl">
                <View>
                    <Image source={item.image} className="w-16 h-16 rounded-2xl "/>
                </View>
                <View className="rounded-2xl px-4">
                    <Text className="text-gray-500 font-bold my-2">{item.name}</Text>
                    <View className="flex flex-row">
                        <Text className="text-gray-500">{item.location}, </Text>
                        <Text className="text-gray-600">{item.dish}</Text>
                    </View>
                </View>

            </View>
          </TouchableOpacity>  
        )}
        
        />

      </SafeAreaView>
  );
}

export default SearchRestaurant;
