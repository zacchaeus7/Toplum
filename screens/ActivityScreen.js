

import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,ImageBackground, Text, Image, StatusBar } from 'react-native';
import { FAB, TextInput } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import SearchBar from "../Components/SearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ActivityTab from './activities/ActivityTabScreen';


const Item = ({ title,sender }) => (
  <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    <View >
        <Text style={styles.title}>{sender}</Text>
    </View>
  </View>
);



 class ActivityScreen extends React.Component {
 
  constructor(props){
    super(props)

    this.state = {

       _data : [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          activity: 'Visite à New York',
          content: "lorem ispsum dis amet ",
          user: 'Zacchaeus',
        },
       
        {
          id: '58694a0f-3da1-471f-bd96-14557e1e29d72',
          activity: 'Titre 2',
          content: "lorem ispsum ",
          user:"Sarah",
       
        },
        {
          id: '58694a0f-3da1-471f-bd96-14557e1e29d72',
          activity: 'Manifestation "',
          content: "lorem ispsum dis amet ",
          user:"Sarah",
       
        },
        {
          id: '58694a0f-3da1-471f-bd96-14557e1e29d72',
          activity: 'Titre 4',
          content: "lorem ispsum dis amet ",
          user:"Sarah",
       
        },
        {
          id: '58694a0f-3da1-471f-bd96-14557e1e29d72',
          activity: 'Titre 5',
          content: "lorem ispsum dis amet ",
          user:"Sarah",
       
        },
        {
          id: '58694a0f-3da1-471f-bd96-14557e1e29d72',
          activity: 'Titre 6',
          content: "lorem ispsum dis amet ",
          user:"Sarah",
       
        },
        {
          id: '58694a0f-3da1-471f-bd96-14557e1e29d72',
          activity: 'Titre 7',
          content: "lorem ispsum dis amet ",
          user:"Sarah",
       
        },
       ]
    }
  }

  ItemSeparator = () =>(
    <View style={styles.item_Separator} />
  );
  render(){ 
     return (
       <SafeAreaView style={styles.container}>
         
         <StatusBar  
           backgroundColor = "#D492A9"  
           //barStyle = "dark-content"   
           hidden = {false}    
           translucent = {true}  
         />  
         
         <View style={styles.header}> 
            <Image 
              style={styles.logo}
              source={require("../assets/logo.png")}
            />
            <Text style={{paddingTop:30}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modmpore delectus quisquam.</Text>
         </View> 
         
       </SafeAreaView>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flex: 1,
  },
  searchBar: {
    opacity: 0.85,
    width: 345,
    marginTop: 20
},
header: {
  width:"100%",
  marginRight:100,
  height:120,
  flexDirection:'row',
 borderBottomWidth:0.5,
 borderColor:"#ccc"
 
},
footer:{
  backgroundColor:"#ccc",
  borderTopRightRadius:10,
  margin:10,
  borderTopLeftRadius:10
},
logo:{
  width:100,
  height:100
},

  title: {
    fontSize: 15,
    textAlign:'center',
    color:"#000"

  },
  item_Separator:{
    height:1,
    width:"100%",
    backgroundColor:"black"
  },
 
});

export default ActivityScreen;
