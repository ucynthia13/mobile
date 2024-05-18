import React from 'react'
import { TouchableOpacity, Text, View} from 'react-native'


const CustomButton = ({ onPress, label}) => (
    <TouchableOpacity className="flex flex-row justify-center items-center bg-orange-400 w-full p-4 rounded-md mb-2 rounded-xl" onPress={onPress}>
        <Text className="text-base text-white font-bold">{label}</Text>
    </TouchableOpacity>
)

export default CustomButton