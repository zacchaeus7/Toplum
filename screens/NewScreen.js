import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Button

} from 'react-native'

function NewScreen ({navigation}){

    return (
        <View style={styles.container}>
           <Text>Details Screen</Text>
     
           <Button title='go to details screen again'
           onPress={()=> navigation.push("Details")}
           />
           <Button title='go to Home'
           onPress={()=> navigation.navigate("Home")}
           />
            <Button title='go to back'
            onPress={()=> navigation.goBack()}
           />
            <Button title='go to the first screen'
            onPress={()=> navigation.popToTop()}
           />
        </View>
       );

}

export default NewScreen;

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})