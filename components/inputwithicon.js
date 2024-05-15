import React, { useState } from 'react'
import { TextInput, View } from 'react-native'

function InputWithIcon({ placeholder, onChangeText, secureTextEntry = false, iconName}) {

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginBottom: 10}}>
        <MaterialCommunityIcons name={iconName} size={24} color="#ccc" style={{ marginRight: 10}} />
        <TextInput placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={secureTextEntry} value={text} style={{ flex: 1}} />
    </View>
  )
}

export default InputWithIcon