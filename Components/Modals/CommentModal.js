import React from "react";
import Modal from "react-native-modal";
import { View,Text,Button } from 'react-native';
import AvatarImage from "../ImagePickers/Avatar";

class CommentModal extends React.Component {

  componentDidMount(){
    
  }
  render(){

    const {isVisible,isCancel,currentCommunity} = this.props;

    console.log(currentCommunity)
    return (
      <View>
        <Modal 
          isVisible={isVisible}
          animationIn="slideInUp"
          animationInTiming={1000}
          // coverScreen={true}
          // backdropOpacity={0.5}
          // deviceHeight={0.5}
          style={{ marginVertical: 150,borderTopLeftRadius:10,borderTopRightRadius:10 }}
        >
          <View style={{ flex: 1,backgroundColor:"#fff",width:"100%" }}>
           <AvatarImage 
           currentCommunity = {currentCommunity}
           />
          </View>
        </Modal>
      </View>
    );
  }
  }

  export default CommentModal