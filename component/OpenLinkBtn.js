import React from 'react';
import { TouchableOpacity, Linking, Text, StyleSheet } from 'react-native';

//"Hitta hit" button for the scene page
//navigates you to the choosen URL

const OpenLinkBtn = ({ url, title }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#02B4b7',

  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
});

export default OpenLinkBtn;