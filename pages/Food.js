import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import CustomHeader from '../component/CustomHeader';
import VeganIcon from '../component/VeganIcon';
import MeatIcon from '../component/MeatIcon'
import FishIcon from '../component/FishIcon'
import food from '../jsonTemp/food.json';
import { useFonts } from 'expo-font';

//This page displays all foodtrucks and what type of food they have


const Food = () => {
  let [fontsLoaded] = useFonts({
    'MontserratBold': require('../assets/font/Montserrat-SemiBold.ttf')
  })
  return (<>
    <View>
      <CustomHeader title="Home" />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        <View>
          {food.FoodInfo.map(food => (
            <View style={styles.square}>
              <Text style={styles.header}>{food.name}</Text>
            </View>
          ))}
        </View>

        {food.FoodMenu.map((menu, index) => (
          <View key={index}>
            <View key={menu.name} style={styles.square}>

              <View style={styles.foodContainer}>
                <View style={styles.foodName}>
                  <Text style={styles.foodHeader}>{menu.name}</Text>
                </View>

                <VeganIcon isVegan={menu.vegan === 'true'} />
                <MeatIcon isMeat={menu.meat === 'true'} />
                <FishIcon isFish={menu.fish === 'true'} />

              </View>
              {menu.menu.map((item, index) => (
                <View style={styles.textFood}>
                  <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
                    <Text style={{ fontFamily: 'MontserratBold' }} key={index}>
                      {item.food}
                    </Text>


                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}

      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/herrljungakommun/')}>
          <Text style={styles.link}>#välkommenhit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </>
  );
};

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
    fontFamily: 'MontserratBold'

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
  foodHeader: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'MontserratBold'
  },
  textFood: {
    borderRadius: 15,
    backgroundColor: '#e9e9e9',
    width: 'auto',
    marginBottom: 5,
    marginHorizontal: 5,
    padding: 5,

  },
  foodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  foodName: {
    flex: 1,
  },
  link: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'MontserratBold',
    paddingVertical: 5,


  }
});

export default Food;
