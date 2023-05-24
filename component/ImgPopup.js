import React, { useState } from 'react';
import { Image, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

//image popup for the scene page

function ImgPopup({ src }) {
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
        <SimpleLineIcons name="picture" size={24} color="black" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={showPopup}
        onRequestClose={handlePopupClose}
        transparent={true}
      >
        <BlurView intensity={100} style={styles.popupBackground}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handlePopupClose}
          >
            <Ionicons name="close-outline" size={34} color="black" />
          </TouchableOpacity>
          <Image source={{ uri: src }} style={styles.popupImage} />
        </BlurView>
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
  popupImage: {
    width: '100%',
    height: '50%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 20,
    zIndex: 1,
  },
});

export default ImgPopup;