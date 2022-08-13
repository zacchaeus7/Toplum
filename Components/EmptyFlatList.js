import React from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground

} from "react-native";

class EmptyFlatList extends React.Component{


    render(){
        
        return(
            <View style={styles.container}>
                {/* <ImageBackground
                    source={require('../assets/images/empty_wall_paper.webp')}
                    style={{ width:"100%", height:500}}
                > */}
                    <Text>SOYEZ LE PREMIER A PUBLIER DANS LA COMMUNATE</Text>
                {/* </ImageBackground> */}
                
            </View>
        )

    }

}

export default EmptyFlatList

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      width:"100%",
      height:500,
       backgroundColor:"#ccc"
    },

})