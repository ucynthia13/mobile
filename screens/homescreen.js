import React, { useState } from 'react';
import { SafeAreaView, StatusBar, TextInput, Text, TouchableOpacity, View, Image } from 'react-native';
import { theme } from '../assets/theme/index';
import { MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { MapIcon } from 'react-native-heroicons/solid'

function Homescreen() {
  const [showSearchField, toggleSearchField] = useState(false);
  const [locations, showLocations ] = useState([1,2,3,4,5,6,7])


  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='light' />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
            <View style={{  flexDirection: 'row', alignItems: 'center', borderRadius: 50, backgroundColor: 'lightgray', paddingVertical: 8 }}>
            {showSearchField && (
              <TextInput
                placeholder='Search City'
                placeholderTextColor='black'
                style={{ flex: 1, color: 'black', paddingHorizontal: 10 }}
              />
              )}
              <TouchableOpacity onPress={() => toggleSearchField(!showSearchField)} style={{ paddingHorizontal: 10 }}>
                <MagnifyingGlassIcon size={25} style={{ color: 'black' }} />
              </TouchableOpacity>
            </View>

        </View>

        {
          showSearchField && (
            <View style={{ backgroundColor: 'lightgray', borderRadius: 25, margin: 25}}>
            {locations.map((location, index) => {
            return(
              // countries
              <TouchableOpacity style={{  flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: locations.length -1 === index ? 0 : 0.4, borderBottomColor: 'black'}}>
                <MapIcon size={25} style={{ color: 'black', marginEnd: 10}} />
                <Text style={{ textAlign: 'center'}}>London, United Kingdom</Text>
              </TouchableOpacity>
              )
            })}
          </View>
          )}
          {/* Weather forecast  */}
          <View style={{ margin: 20, justifyContent: 'space-around'}}>
            <Text style={{ fontWeight: 'bold'}}>
              London, 
              <Text style={{ fontWeight: '400'}}> United Kingdon</Text>
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
              <Image source={require('../assets/images/bg.png')} width={50} height={50}/>
            </View>

            <View>
              <Text style={{ textAlign: 'center', fontWeight: 'bold'}}>23&#176;</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold'}}>Partly Cloudy</Text>
            </View>
            {/* other weather stats */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginEnd: 10}}>
                <Image source={require('../assets/images/wind.png')} style={{ width: 6, height: 6 }}/>
                <Text>22km</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginEnd: 10}}>
                <Image source={require('../assets/images/wind.png')} style={{ width: 6, height: 6 }}/>
                <Text>22km</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginEnd: 10}}>
                <Image source={require('../assets/images/wind.png')} style={{ width: 6, height: 6 }}/>
                <Text>22km</Text>
              </View>

            </View>

          </View>
      </SafeAreaView>
    </View>
  );
}

export default Homescreen;
