import React, { useState } from 'react'
import { Image, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function ProductDetails({ route }) {
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
  return (
    <SafeAreaView>
        <View>
            <Text>{product.name}</Text>
            <Text>{product.dish}</Text>
        </View>
        <View className="">
            <View>
                <Image source={product.image} className="w-16 h-16" />
            </View>
            <View>
                <Text>{product.description}</Text>
                <Text>{product.category}</Text>

                <View>
                    <Text>{product.price}</Text>
                    {/* Increment */}
                    <TouchableOpacity onPress={handleIncrement}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    <Text>{amount}</Text>
                    {/* Decrement */}
                    <TouchableOpacity onPress={handleDecrement}>
                        <Text>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default ProductDetails