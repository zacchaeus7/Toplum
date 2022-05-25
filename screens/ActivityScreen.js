

import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,ImageBackground, Text, Image, StatusBar } from 'react-native';
import { FAB, TextInput } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import SearchBar from "../Components/SearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome"


const Item = ({ title,sender }) => (
  <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    <View >
        <Text style={styles.title}>{sender}</Text>
    </View>
  </View>
);



 class HomeScreen extends React.Component {
 
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
           backgroundColor = "#b3e6ff"  
           //barStyle = "dark-content"   
           hidden = {false}    
           translucent = {true}  
         />  
         
         <View style={styles.header}>
          <SearchBar />
         </View>
         <View style={styles.footer}> 
         <FlatList
        
          data={this.state._data}
           renderItem={({ item, index, separators }) => (
               <View style={styles.item}
                 key={item.key}
                 onPress={() => this._onPress(item)}
                 onShowUnderlay={separators.highlight}
                 onHideUnderlay={separators.unhighlight}>
                 <View style={{ backgroundColor: 'white' }}>
                     <View >
                       <Text style={{color:"blue",fontSize:20,textAlign:"center"}}>{item.activity}</Text>
                       
                     </View>
                     <View style={styles.avatarContainer}>
                       <Image style={{height:100,width:100}}
                        source={require("../assets/logo.jpg")}
                       />
                       <Text>{item.content}</Text>
                     </View>

                
                    <Text style={{textAlign:"right",fontSize:20,color:"blue"}}><FontAwesome name='user' />{item.user}</Text>
                
                 </View>
                 
               </View>
             )}
           keyExtractor={item => item.id}
           ListHeaderComponent={<Text style={{fontSize:20, textAlign:"center",color:"#000"}}>Les activités</Text>}
           ListEmptyComponent={<Text>Aucune Activité pour l'instant</Text>}
            ItemSeparatorComponent={this.ItemSeparator}
         />
         <FAB
           style={styles.fab}
           small
           icon="plus"
           color="white"
           onPress={() => alert("Nouvelle Activité")}
         />
         </View> 
       </SafeAreaView>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  searchBar: {
    opacity: 0.85,
    width: 345,
    marginTop: 20
},
header: {
  flex: 1,
  backgroundColor:"#009387",
  justifyContent: 'flex-end',
  paddingHorizontal: 20,
  paddingBottom: 50
},
footer: {
  flex: Platform.OS === 'ios' ? 4 : 8,
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 30
},
transaction: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 40,
    backgroundColor:"#009387"
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
     borderRadius:12,
    marginVertical: 4,
    marginHorizontal: 10,
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
  avatarContainer:{
    //backgroundColor:"#D9D9D9,",
    borderRadius:100,
    height:89,
    width:89,
    flexDirection:'row',
    paddingVertical:13,
    justifyContent:"center",
    alignItems:"center"
  }
});

export default HomeScreen;

