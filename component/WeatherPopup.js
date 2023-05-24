import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Linking, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';

//Component for the weather function
//fetches data from a weather API
//And also if the waether icon is clicked, it redirects you to the SMHI homepage

const API_KEY = '60da068eca94149c33c2176879e11790';
const CITY_NAME = 'Herrljunga';

const WeatherPopup = () => {

  const [temperature, setTemperature] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState('bright-cloud');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
      );
      const temperature = response.data.main.temp;
      setTemperature(Math.round(temperature));
      setWeatherCondition(celsiusTemp < 0 ? 'dark-cloud' : 'bright-cloud');
    };
    fetchData();
  }, []);

  const handlePress = () => {
    Linking.openURL('https://www.smhi.se/');
  };


  return (
    <View >
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          <FontAwesome5
            name={weatherCondition === 'bright-cloud' ? 'cloud-sun' : 'cloud'}
            size={24}
            color="white"
          />
          <Text style={styles.temperature}>{temperature} °C</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  temperature: {

    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WeatherPopup;
