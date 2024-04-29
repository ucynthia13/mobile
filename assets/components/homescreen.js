import React, { useState } from 'react'
import { View } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import { StatusBar } from 'expo-status-bar'

const iconwidth= 26
const iconHeight = 26

export default class HomeScreen extends React.Component{
    state = {
        screenText: 'Press An Icon'
    }
    changeText = (text) => {
        console.log(text + 'has been pressed!')
        this.setState({
            screenText: text
        })
    }
    render(){
        <View style={globalStyles.container}>
            <View>
                <Text>{this.state.screenText}</Text>
                <StatusBar style='auto' />
            </View>
            <View style={globalStyles.NavContainer}>
                
            </View>
        </View>
    }
}
