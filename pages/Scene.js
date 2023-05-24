import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImgPopup from '../component/ImgPopup';
import { AntDesign } from '@expo/vector-icons';
import TextPopup from '../component/TextPopup';
import data from '../jsonTemp/scene.json';
import CustomHeader from '../component/CustomHeader';

//This page displays information for each scene
//, has a "add to favorite" function and a popup that displays an image of the scene

const scen1 = data.Scenes.find((scene) => scene.name === 'Torget');
const scen2 = data.Scenes.find((scene) => scene.name === 'Stadsparken');
const scen3 = data.Scenes.find((scene) => scene.name === 'Stora Scenen');

export default function Scene() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    header: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    square: {
      margin: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#ffffff',
      width: 340,
    },
    sceneHeader: {
      textAlign: 'left',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    textArtist: {
      borderRadius: 15,
      backgroundColor: '#e9e9e9',
      width: 'auto',
      marginBottom: 5,
      marginHorizontal: 5,
      padding: 5,
    },
    sceneAndPopup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    popupContainer: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
    },
    sceneHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },
    headerContainer: {
      flex: 1,
      alignItems: 'center',
    },
    textPopupContainer: {
      position: 'absolute',
      top: 15,
      right: 10,
    },
    favoriteSquare: {
      margin: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#ffffff',
      width: 340,
      borderWidth: 2,
      borderColor: 'black',
    },
    favoritHeader: {
      alignSelf: 'flex-start',
      marginBottom: 10,
      fontWeight: 'bold',
      fontSize: 25,
    },
    link: {
      fontSize: 25,
      color: '#fff',
      marginBottom: 10,
      fontFamily: 'MontserratBold',
      paddingVertical: 5,
    }
  });

  /// Favorit funktion start  
  const [favorites, setFavorites] = useState([]);

  const addFavorite = async (artist, time) => {
    const newFavorite = { artist, time };
    let updatedFavorites;
    if (favorites.some((favorite) => favorite.artist === artist)) {
      updatedFavorites = favorites.filter((favorite) => favorite.artist !== artist);
    } else {
      updatedFavorites = [...favorites, newFavorite];
    }
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = async (artist) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.artist !== artist);
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const getFavorites = async () => {
      const favoritesString = await AsyncStorage.getItem('favorites');
      if (favoritesString) {
        setFavorites(JSON.parse(favoritesString));
      }
    };
    getFavorites();
  }, []);

  /// Favorit funktion slut
  /// För närvarande är popimage (ImgPopup) kommenterat bort eftersom det för tillfället inte finns några bilder tillgängliga.

  return (<>
    <View>
      <CustomHeader title="Home" />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.container}>
        <View>
          {data.SceneInfo.map((scene) => (
            <View style={styles.square} key={scene.name}>
              <View style={styles.sceneHeaderContainer}>
                <View style={styles.headerContainer}>
                  <Text style={styles.header}>{scene.name}</Text>
                </View>
                <View style={styles.textPopupContainer}>
                  <TextPopup
                    src={
                      <View style={styles.container}>
                        <View style={styles.favoriteSquare}>
                          <Text style={styles.favoritHeader}>Favoriter:</Text>
                          {favorites
                            .sort((a, b) => a.time.localeCompare(b.time))
                            .map((favorite) => (
                              <View style={styles.textArtist} key={favorite.artist}>
                                <Text>
                                  {favorite.artist} - {favorite.time}
                                </Text>
                              </View>
                            ))}
                        </View>
                      </View>
                    }
                  />
                </View>
              </View>

              <Text>
                {scene.info.map((item, index) => (
                  <Text key={index}>{item}</Text>
                ))}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.square}>
          <View style={styles.sceneAndPopup}>
            <Text style={styles.sceneHeader}>{scen1.name}</Text>
            <View style={styles.popupContainer}>
              {/* <ImgPopup src={scen1.image} /> */}
            </View>
          </View>

          {scen1.performances.map((performance) => (
            <View style={styles.textArtist}>
              <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 10 }}>{performance.artist} - {performance.time}</Text>
                <TouchableOpacity onPress={() => addFavorite(performance.artist, performance.time)}>
                  {favorites.some((favorite) => favorite.artist === performance.artist) ?
                    <AntDesign name="star" size={16} color="black" /> :
                    <AntDesign name="staro" size={16} color="black" />
                  }
                </TouchableOpacity>
              </View>
            </View>
          ))}

        </View>
        <View style={styles.square}>
          <View style={styles.sceneAndPopup}>
            <Text style={styles.sceneHeader}>{scen2.name}</Text>
            <View style={styles.popupContainer}>
              {/* <ImgPopup src={scen2.image} /> */}
            </View>
          </View>

          {scen2.performances.map((performance) => (
            <View style={styles.textArtist}>
              <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 10 }}>{performance.artist} - {performance.time}</Text>
                <TouchableOpacity onPress={() => addFavorite(performance.artist, performance.time)}>
                  {favorites.some((favorite) => favorite.artist === performance.artist) ?
                    <AntDesign name="star" size={16} color="black" /> :
                    <AntDesign name="staro" size={16} color="black" />
                  }
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.square}>
          <View style={styles.sceneAndPopup}>
            <Text style={styles.sceneHeader}>{scen3.name}</Text>
            <View style={styles.popupContainer}>
              {/* <ImgPopup src={scen3.image} /> */}
            </View>

          </View>
          {scen3.performances.map((performance) => (
            <View style={styles.textArtist}>
              <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 10 }}>{performance.artist} - {performance.time}</Text>
                <TouchableOpacity onPress={() => addFavorite(performance.artist, performance.time)}>
                  {favorites.some((favorite) => favorite.artist === performance.artist) ?
                    <AntDesign name="star" size={16} color="black" /> :
                    <AntDesign name="staro" size={16} color="black" />
                  }
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/herrljungakommun/')}>
            <Text style={styles.link}>#välkommenhit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </>
  )
}