import React from 'react'; 
import { SafeAreaView, View, TouchableOpacity, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Title from '../components/title';

function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className="min-h-screen bg-orange-400 flex justify-center items-center">
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Title primary={true}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
