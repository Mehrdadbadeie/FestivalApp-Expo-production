import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

//Meat icon for the food page

export default function VeganIcon({ isMeat }) {
    if (isMeat) {
        return (
            <View>
                <MaterialCommunityIcons name="cow" size={26} color="black" />
            </View>
        );
    } else {
        return null;
    }
}
