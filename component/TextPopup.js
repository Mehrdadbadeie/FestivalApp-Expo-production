import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, StyleSheet, Text } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

//Componenet for the favorite section popup


function TextPopup({ src }) {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <>
            <TouchableOpacity
                style={styles.imagePopupButton}
                onPress={handleButtonClick}
            >
                <AntDesign name="star" size={20} color="black" />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                visible={showPopup}
                onRequestClose={handlePopupClose}

            >
                <View style={styles.popupBackground}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={handlePopupClose}
                    >
                        <Ionicons name="close-outline" size={34} color="black" />
                    </TouchableOpacity>
                    <View>
                        <Text>{src}</Text>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    popupBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 20,
        zIndex: 1,
    },
});

export default TextPopup;