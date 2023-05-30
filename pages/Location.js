import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react';
import MapView, { Polygon } from 'react-native-maps';
import CustomHeader from '../component/CustomHeader';
import data from '../jsonTemp/location.json';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import OpenLinkBtn from '../component/OpenLinkBtn';

//This page displays a map over the festival area.
//Below the map is a small section with some information about the areas

export default function Location() {
    let [fontsLoaded] = useFonts({
        'MontserratBold': require('../assets/font/Montserrat-SemiBold.ttf')
    })

    const [expandedLocation, setExpandedLocation] = useState(null);

    const handleLocationPress = (locationIndex) => {
        setExpandedLocation((prevLocation) => {
            if (prevLocation === locationIndex) {
                return null;
            } else {
                return locationIndex;
            }
        });
    };


    const styles = StyleSheet.create({
        mapSquare: {
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 25,
            backgroundColor: '#ffff',
            padding: 9,
            width: 340,
            height: 250,
            display: 'flex',
        },
        locationSquare: {
            margin: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            padding: 9,
            borderRadius: 10,
            backgroundColor: '#ffffff',
            width: 340,
        },
        header: {
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            position: 'relative',
            top: 15,
            fontFamily: 'MontserratBold',
        },
        map: {
            width: '100%',
            height: '100%',
        },
        favoriteSquare: {
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: 'MontserratBold',
            borderRadius: 10,
            backgroundColor: '#ffffff',
            width: 250,
            borderWidth: 2,
            borderColor: 'white',
            flex: 1,
            textAlign: 'center',
            textAlignVertical: 'center',
        },
        link: {
            fontSize: 25,
            color: '#fff',
            marginBottom: 10,
            paddingVertical: 5,
        },
        buttonContainer: {
            marginTop: 10,
            alignItems: 'center',
            borderColor: "black"
        }
    });

    const coordinate = {
        latitude: 58.07737507979663,
        longitude: 13.026591152316357,
    };

    const polygonTorget = [
        { latitude: 58.077658686583014, longitude: 13.026891111522069 },
        { latitude: 58.07756924160367, longitude: 13.026280193933783 },
        { latitude: 58.077220369264715, longitude: 13.026162302768782 },
        { latitude: 58.07729921435969, longitude: 13.027166663602575 },
    ];

    const polygonStadsparken = [
        { latitude: 58.077333351169536, longitude: 13.02099001319721 },
        { latitude: 58.07723733716411, longitude: 13.01978686957709 },
        { latitude: 58.077120513358736, longitude: 13.0190153860882 },
        { latitude: 58.07681417095906, longitude: 13.019014088881251 },
        { latitude: 58.07644897636327, longitude: 13.01909812648185 },
        { latitude: 58.076353446377475, longitude: 13.019995146930551 },
        { latitude: 58.07626175773855, longitude: 13.020906869929897 },
        { latitude: 58.07677078510145, longitude: 13.02175065275932 },
    ];
    const polygonTradgardsgatan = [
        { latitude: 58.077231889602785, longitude: 13.026115929829064 },
        { latitude: 58.07737953920083, longitude: 13.022212079135539 },
        { latitude: 58.07726895093108, longitude: 13.02479558221703 },
        { latitude: 58.077356901831855, longitude: 13.022208258300067 },
        { latitude: 58.07725051321702, longitude: 13.0247935705603 },
        { latitude: 58.07721018846615, longitude: 13.02611283622232 },
    ];
    const polygonStoraScenen = [
        { latitude: 58.07577514727354, longitude: 13.01798857410787 },
        { latitude: 58.075538314015105, longitude: 13.018369109212538 },
        { latitude: 58.07569396074678, longitude: 13.018862840353997 },
        { latitude: 58.075949110078376, longitude: 13.018339932698884 },
    ];

    return (<>
        <View>
            <CustomHeader title="Home" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>

            <View>
                <View style={styles.locationSquare}>
                    <Text style={styles.header}>Områden</Text>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>Här hittar du en karta över alla scener som finns på festivalen, samt information om respektive scen</Text>
                    </View>
                </View>

                <View style={styles.mapSquare}>
                    <MapView style={styles.map} initialRegion={{
                        latitude: coordinate.latitude,
                        longitude: coordinate.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }} legalLabelInsets={{ bottom: 'never', right: 'never' }}>
                        <Polygon
                            coordinates={polygonTorget}
                            fillColor={'rgb(102, 255, 102)'}
                            strokeColor={'rgb(51, 255, 51)'}
                            strokeWidth={5}
                        />
                        <Polygon
                            coordinates={polygonStadsparken}
                            fillColor={'rgb(255, 102, 102)'}
                            strokeColor={'rgb(255, 80, 80)'}
                            strokeWidth={5}
                        />
                        <Polygon
                            coordinates={polygonTradgardsgatan}
                            fillColor={'rgb(102, 194, 255)'}
                            strokeColor={'rgb(0, 153, 255)'}
                            strokeWidth={10}
                        />
                        <Polygon
                            coordinates={polygonStoraScenen}
                            fillColor={'rgb(253, 104, 251)'}
                            strokeColor={'rgb(253, 53, 250)'}
                            strokeWidth={5}
                        />
                    </MapView>
                </View>

                <View style={styles.locationSquare}>
                    {data.LocationInfo.map((location, index) => (
                        <View style={styles.square} key={index}>
                            <TouchableOpacity onPress={() => handleLocationPress(index)}>
                                <Text style={styles.header}>
                                    {location.name} <FontAwesome name="circle" size={24} color={location.color} />
                                </Text>
                            </TouchableOpacity>
                            {expandedLocation === index && (
                                <View>
                                    <Text style={styles.favoriteSquare}>{location.info}</Text>
                                    <View style={styles.buttonContainer}>
                                        <OpenLinkBtn url={location.mapLink} title="Hitta hit" />
                                    </View>
                                </View>
                            )}
                        </View>
                    ))}
                </View>

            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/herrljungakommun/')}>
                    <Text style={styles.link}>#välkommenhit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </>
    )
}