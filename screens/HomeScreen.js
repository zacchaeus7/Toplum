import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
  } from 'react-native';
import SearchBar from '../Components/SearchBar';

const HomeScreen = ({navigation}) =>{
  
    return (

     <View style={styles.container}>
       <SearchBar />
    
      
     </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    //alignItems: 'center',
    //justifyContent: 'center'
  }
})