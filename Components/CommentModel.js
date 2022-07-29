import React from "react";
import Modal from "react-native-modal";
import { View,Text } from 'react-native';

function WrapperComponent() {
    return (
      <View>
        <Modal isVisible={true}>
          <View style={{ flex: 1 }}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
      </View>
    );
  }

  export default WrapperComponent