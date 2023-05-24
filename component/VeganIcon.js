import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

//Fish icon for the food page

export default function VeganIcon({ isVegan }) {
  if (isVegan) {
    return (
      <View>
        <FontAwesome name="leaf" size={22} color="green" />
      </View>
    );
  } else {
    return null;
  }
}
