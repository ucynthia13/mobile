import React, { useState } from 'react';
import { SafeAreaView, StatusBar, TextInput, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { theme } from '../assets/theme/index';
import { MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { CalendarDaysIcon, MapIcon } from 'react-native-heroicons/solid'
// import fetch from 'node'

function Homescreen() {
  const [showSearchField, toggleSearchField] = useState(false);
  const [locations, showLocations ] = useState([1,2,3,4,5,6,7])

  const API_KEY = 'afbef231da4ffcffc51bcfe0ddab6477'
  //fetchweatherdata
  const fetchWeatherData = async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=<span class="math-inline">\{location\}&appid\=</span>{API_KEY}`

  }
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
          <View style={{ justifyContent: 'space-around'}}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center',  fontSize: 36, margin: 10}}>
              London, 
              <Text style={{ fontWeight: '400',  fontSize: 24,}}> United Kingdom</Text>
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 20}}>
              <Image source={require('../assets/images/sunwind.png')} style={{ width: 155, height: 155 }}/>
            </View>

            <View style={{ marginBottom: 20}}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36, marginBottom: 10}}>23&#176;</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>Partly Cloudy</Text>
            </View>
            {/* other weather stats */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginVertical: 0}}>
                <Image source={require('../assets/images/wind.png')} style={{ width: 24, height: 24 }}/>
                <Text style={{ fontSize: 16, fontWeight: 'bold'}}>22km</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginEnd: 10}}>
                <Image source={require('../assets/images/water.png')} style={{ width: 24, height: 24 }}/>
                <Text style={{ fontSize: 16, fontWeight: 'bold'}}>23%</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginEnd: 10}}>
                <Image source={require('../assets/images/sun.png')} style={{ width: 24, height: 24 }}/>
                <Text style={{ fontSize: 16, fontWeight: 'bold'}}>6:05 AM</Text>
              </View>

            </View>
          </View>
          {/* forecast for tomorrow */}
          <View style={{ margin: 20}}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <CalendarDaysIcon size={20} style={{ color:'black'}}/>
              <Text style={{ marginVertical: 10, fontSize: 16, fontWeight: 'bold'}}>Daily Forecast</Text>
            </View>
            <ScrollView horizontal contentContainerStyle={{ marginVertical: 10}} showsHorizontalScrollIndicator={false} >
              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center',backgroundColor: 'lightgray', padding: 10, marginEnd: 10, borderRadius: 15}}>
                <Image source={require('../assets/images/heavyrain.png')} style={{ width: 30, height: 30}} />
                <Text style={{ fontWeight: '500'}}>Monday</Text>
                <Text style={{ fontWeight: '500'}}>23&#176;</Text>
              </TouchableOpacity>
              <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray', padding: 10, marginEnd: 10, borderRadius: 15}}>
                <Image source={require('../assets/images/heavyrain.png')} style={{ width: 30, height: 30}} />
                <Text style={{ fontWeight: '500'}}>Monday</Text>
                <Text style={{ fontWeight: '500'}}>23&#176;</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray', padding: 10, marginEnd: 10, borderRadius: 15}}>
                <Image source={require('../assets/images/heavyrain.png')} style={{ width: 30, height: 30}} />
                <Text style={{ fontWeight: '500'}}>Monday</Text>
                <Text style={{ fontWeight: '500'}}>23&#176;</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center',backgroundColor: 'lightgray', padding: 10, marginEnd: 10, borderRadius: 15}}>
                <Image source={require('../assets/images/heavyrain.png')} style={{ width: 30, height: 30}} />
                <Text style={{ fontWeight: '500'}}>Monday</Text>
                <Text style={{ fontWeight: '500'}}>23&#176;</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray', padding: 10, marginEnd: 10, borderRadius: 15}}>
                <Image source={require('../assets/images/heavyrain.png')} style={{ width: 30, height: 30}} />
                <Text style={{ fontWeight: '500'}}>Monday</Text>
                <Text style={{ fontWeight: '500'}}>23&#176;</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray', padding: 10, borderRadius: 15}}>
                <Image source={require('../assets/images/heavyrain.png')} style={{ width: 30, height: 30}} />
                <Text style={{ fontWeight: '500'}}>Monday</Text>
                <Text style={{ fontWeight: '500'}}>23&#176;</Text>
              </View>
            </ScrollView>
          </View>
      </SafeAreaView>
    </View>
  );
}

export default Homescreen;
