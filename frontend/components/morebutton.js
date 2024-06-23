import React from 'react'
import { TouchableOpacity, Text, View} from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const MoreButton = ({onPress, label}) => (
    <TouchableOpacity className="flex flex-row justify-center mt-2" onPress={onPress}>
        <Text className="text-lg font-bold text-orange-400 mx-4">{label}</Text>
        <View className="mt-1">
            <ArrowRightIcon color="orange" size={20} />
        </View>
    </TouchableOpacity>
)

export default MoreButton