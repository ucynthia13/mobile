import React from 'react';
import { TextInput, View } from 'react-native';

function InputWithIcon({ placeholder, onChangeText, secureTextEntry = false, iconName }) {
  return (
    <View className="flex flex-row border border-gray-300 px-4 mb-4 rounded-md">
      {/* Icon Component Here */}
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        className="flex-1 py-2"
      />
    </View>
  );
}

export default InputWithIcon;
