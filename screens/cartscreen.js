  import React from 'react'
  import { SafeAreaView, View, Text, FlatList} from 'react-native'
  import { CheckIcon, ChevronRightIcon, TableCellsIcon, WalletIcon } from 'react-native-heroicons/outline'

  function CartScreen() {
    const categories = ['Appetizer', 'Starter', 'Main', 'Dessert', 'Drink']
    return (
      <SafeAreaView className="flex-1 pt-4 px-4 bg-black">
        <Text className="text-center text-orange-500 font-bold text-2xl py-4">Choose Kigali</Text>
        <View className="flex flex-row items-center justify-between p-4">
          <View className="border-e-orange-500">
            <CheckIcon color="orange" size={32}/>
            <Text className="font-bold text-xl text-white">Ordered</Text>
          </View>

          <View>
            <WalletIcon color="orange" size={32} />
            <Text className="text-xl text-white">Call Waiter</Text>
          </View>
        </View>
        <View className="menu p-4">
          <Text className=" font-bold text-orange-500 text-center text-3xl py-4">Menu</Text>
          <FlatList 
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item}) => (
           <View className="flex flex-row items-center justify-between py-4">
              <Text className="text-2xl text-white">{item}</Text>
              <ChevronRightIcon color="orange" size={32} />
           </View>
          )}
          />
        </View>
      </SafeAreaView>
    )
  }

  export default CartScreen