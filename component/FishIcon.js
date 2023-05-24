import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

//Fish icon for the food page

export default function VeganIcon({ isFish }) {
    if (isFish) {
        return (
            <View>
                <FontAwesome5 name="fish" size={21} color="black" />
            </View>
        );
    } else {
        return null;
    }
}
