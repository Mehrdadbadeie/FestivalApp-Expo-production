import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LogoSvg from '../assets/svgComp/LogoHead.js'

const { width, height } = Dimensions.get('window');

//Component for the navigationbar
//contains a logo and a back-button

const CustomHeader = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <LogoSvg />
            <View style={styles.rightContainer} />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.16,
    width: width * 0.95,
  },
  backButton: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
});

export default CustomHeader;
