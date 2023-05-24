import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import WeatherPopup from './component/WeatherPopup';
import Sponsor from './pages/Sponsor';
import Scene from './pages/Scene';
import Food from './pages/Food';
import Location from './pages/Location';
import SvgComponent from "./assets/svgComp/LogoSvg.js";

//Component responsible for the menu function and the appearance.


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'MontserratBold': require('./assets/font/Montserrat-SemiBold.ttf')

  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.container}>

      <SvgComponent />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ position: 'absolute', right: 130, bottom: 123, }}>
          <WeatherPopup />
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Scene')}>
          <Text style={styles.link}>Scener</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Location')}>
          <Text style={styles.link}>Områden</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Food')}>
          <Text style={styles.link}>Mat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sponsor')}>
          <Text style={styles.link}>Sponsorer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:Festival@Herrljunga.se')}>
          <Text style={styles.link}>Kontakta oss</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/herrljungakommun/')}>
          <Text style={styles.link}>#välkommenhit</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/herrljungakommun/')}>
            <Icon name="instagram" size={40} color="#fff" />
          </TouchableOpacity>
          <View style={{ marginHorizontal: 10 }} />
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/herrljungakommun')}>
            <Icon name="facebook-square" size={40} color="#fff" />
          </TouchableOpacity>
          <View style={{ marginHorizontal: 10 }} />
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/herrljunga-kommun')}>
            <Icon name="linkedin-square" size={40} color="#fff" />
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

const SceneScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Scene />
      </View>
    </View>
  );
};

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Location />
      </View>
    </View>
  );
};

const FoodScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Food />
      </View>
    </View>
  );
};

const SponsorScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Sponsor />
      </View>
    </View>
  );
};


const StackMenuRouter = () => {
  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Scene" component={SceneScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Location" component={LocationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Food" component={FoodScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sponsor" component={SponsorScreen} options={{ headerShown: false }} />


      </Stack.Navigator>

    </NavigationContainer>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#02b4b7'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  link: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'MontserratBold',
    paddingVertical: 5

  },

});

export default StackMenuRouter;
