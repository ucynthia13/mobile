import React, { useState } from 'react';
import { SafeAreaView, StatusBar, TextInput, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { theme } from '../assets/theme/index';
import { MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { CalendarDaysIcon, MapIcon } from 'react-native-heroicons/solid'
// import fetch from 'node'

function Homescreen() {
  const [showSearchField, toggleSearchField] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const [locations, setLocations ] = useState([])
  const [weatherData, setWeatherData] = useState(null)
  const [dailyForecact, setDailyForecast] = useState([])

  const API_KEY = 'afbef231da4ffcffc51bcfe0ddab6477'

  //fetchweatherdata
  const fetchWeatherData = async (location) => {
    try{ 
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&&appid=${API_KEY}`)
      const data = await response.json()
      setWeatherData(data)
    }catch(error){
      console.error(`Error fetching data : ${error}`)
    }

  }

  //handlesearch
  const handleSearch = (query) => {
    //update search query
    setSearchQuery(query)
    //filter
    const filteredLocations = locations.filter(location => {
      location.name.toLowerCase().includes(query.toLowerCase())
    })
    setLocations(filteredLocations)
  }

  //function to handle location select
  const handleLocationSelect =(location)=> {
    fetchWeatherData(location.name)
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
                value={searchQuery}
                onChangeText={handleSearch}
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
            <View style={{ backgroundColor: 'lightgray', borderRadius: 25, marginHorizontal: 20}}>
            {locations.map((location) => {
            return(
              // countries
              <TouchableOpacity key={location.id} style={{  flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: locations.length -1 === index ? 0 : 0.4, borderBottomColor: 'black'}} onPress={handleLocationSelect}>
                <MapIcon size={25} style={{ color: 'black', marginEnd: 10}} />
                <Text style={{ textAlign: 'center'}}>{location.name}</Text>
              </TouchableOpacity>
              )
            })}
          </View>
          )}
          {/* Weather forecast  */}
          <View style={{ justifyContent: 'space-around'}}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center',  fontSize: 36, margin: 15}}>
              {weatherData.name}
              <Text style={{ fontWeight: '400',  fontSize: 24,}}> {weatherData.sys.country}</Text>
            </Text>
            {/* weather icon */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 20}}>
              <Image source={{ uri: `https://openweathermap.org/img/wn/${weatherData[0].icon}.png`}} style={{ width: 155, height: 155 }}/>
            </View>

            <View style={{ marginBottom: 20}}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36, marginBottom: 10}}>{weatherData.main.temp}&#176;</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>{weatherData.weather[0].description}</Text>
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
