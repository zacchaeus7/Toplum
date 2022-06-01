
import React from 'react';
import { SafeAreaView, View, FlatList,ScrollView,TouchableWithoutFeedback,StyleSheet,ActivityIndicator,ImageBackground, Text, Image, StatusBar } from 'react-native';
import { FAB, TextInput } from 'react-native-paper';
import { color } from 'react-native-reanimated';
 import SearchBar from "../Components/ScearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import API from "../API/API";

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

      _data:[
        {
          id:"1",
          name:"UNIVERSITE PROTESTANTE DE LUBUMBASHI"
        },
        {
          id:"2",
          name:"UNIVERSITE NOUVEAUX HORIZONS"
        },
        {
          id:"3",
          name:"UNIVERSITE DE LUBUMBASHI"
        },
      ],
       schools:[],
       universities:[],
       load_school:false,
       load_niversity:false
    }
    this.api = new API();
  }

  getSchools = async () => {

    const  schools  = await this.api.getData('schools?per_page=3');

    this.setState({ schools:schools.data });
    this.setState({load_school:false})
    console.log(this.state.schools)

}

getUniversities = async () => {

  const  universities  = await this.api.getData('universities?per_page=3');

  this.setState({ universities:universities.data });

  this.setState({load_niversity:false})
  console.log(this.state.universities)

}


componentDidMount(){

  this.getSchools()
  this.getUniversities()

}


  ItemSeparator = () =>(
    <View style={styles.item_Separator} />
  );
  render(){ 
     return (
       <ScrollView style={styles.container}>
         
         <StatusBar  
           backgroundColor = "#b3e6ff"  
           //barStyle = "dark-content"   
           hidden = {false}    
           translucent = {true}  
         />  
         
         <View style={styles.header}>
           <SearchBar />
          {/* <View style={{borderWidth:1, backgroundColor:"#fff",height:50,color:"#fff"}}>
              <Text>School Pay</Text>
          </View> */}
         </View>
    
         <View style={styles.footer}>
         <View style={{flexDirection:"row"}}>
              <Text style={{color:"black",fontSize:15, padding:15}}>LES COMMUNAUTE</Text>
              <Text style={{color:"#115f9b",fontSize:15, paddingTop:15, textAlign:'right'}}>VOIR PLUS </Text>
              <MaterialIcons style={{paddingTop:15 }}
                  name="navigate-next"
                  color="#115f9b"
                  size={20}
              />
            </View>
           
            {/* {this.state.load_school && <ActivityIndicator size="large" color="#fd8500" />} */}
            <FlatList
           
                  data={this.state._data}
                  renderItem={({ item, separators }) => (
                    <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate("DetailsSchool",{school_id:item.id})}>
                      <View style={styles.item}
                        key={item.id}
                        onPress={() => alert("test")}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View style={{ backgroundColor: 'white' }}>
                            <View>
                              {/* <Text style={{color:"default",fontSize:20, padding:15,marginLeft:-33}}>{item.name}</Text> */}
                            </View>
                            <View style={styles.avatarContainer}>
                              <Image style={{height:80,width:80}}
                                source={require("../assets/logo.jpg")}
                              />
                              <Text style={{color:'black',width:200,marginLeft:10,paddingTop:20}}>{item.name}</Text>
                            
                            </View>              
                        </View>
                        
                      </View>
                      </TouchableWithoutFeedback>
                    )}
                 keyExtractor={(item) => item.id}
                 ListEmptyComponent={<Text>Aucune communautés pour l'instant</Text>}
                ItemSeparatorComponent={this.ItemSeparator}
          />    
         </View>
         <View style={styles.footer_two}>
         <View style={{flexDirection:"row"}}>
              <Text style={{color:"black",fontSize:15, padding:15}}>TOUTES LES ACTIVITES</Text>
              <Text style={{color:"#115f9b",fontSize:15, paddingTop:15}}>VOIR PLUS</Text>
              <MaterialIcons style={{paddingTop:15}}
                  name="navigate-next"
                  color="#115f9b"
                  size={20}
              />
            </View>  

            {/* {this.state.load_niversity && <ActivityIndicator size="large" color="#fd8500" />} */}
            
              <FlatList
              
                  data={this.state._data}
                  renderItem={({ item, index, separators }) => (
                      <View style={styles.item}
                        key={item.id}
                        onPress={() => this._onPress(item)}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View style={{ backgroundColor: 'white' }}>
                            <View>
                              {/* <Text style={{color:"default",fontSize:20, padding:15,marginLeft:-33}}>{item.name}</Text> */}
                            </View>
                            <View style={styles.avatarContainer}>
                              <Image style={{height:50,width:50}}
                                source={require("../assets/logo.jpg")}
                              />
                              <Text style={{color:'black',width:100,marginLeft:10}}>{item.name}</Text>
                            </View>              
                        </View>
                        
                      </View>
                    )}
                  keyExtractor={item => item.id}
                  //  ListHeaderComponent={<Text style={{fontSize:20, textAlign:"center",color:"#000"}}>Les Elèves</Text>}
                  ListEmptyComponent={<Text>Aucune Activité pour l'instant</Text>}
                ItemSeparatorComponent={this.ItemSeparator}
          />
         </View>
         
         <FAB
           style={styles.fab}
           small
           icon="plus"
           color="white"
           onPress={() => alert("Nouvelle Activité")}
         />
       </ScrollView >
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#115f9b',
    marginTop: StatusBar.currentHeight || 0,
  },
  searchBar: {
    opacity: 0.85,
    width: 345,
    marginTop: 20
},
header: {
  flex: 1,
  justifyContent: 'flex-end',
  paddingHorizontal: 20,
  paddingBottom: 50
},
footer: {
  // flex: Platform.OS === 'ios' ? 4 : 10,
  backgroundColor: '#fff',
  borderTopLeftRadius: 7,
  borderTopRightRadius: 7,
  borderBottomLeftRadius:7,
  borderBottomRightRadius:7,
  paddingHorizontal: 20,
  paddingVertical: 30
},
footer_two:{
 // flex: Platform.OS === 'ios' ? 4 : 10,
  backgroundColor: '#fff',
  borderTopLeftRadius: 13,
  borderTopColor:"#115f9b",
  borderTopWidth:2,
  borderTopRightRadius: 13,
  borderBottomLeftRadius:7,
  borderBottomRightRadius:7,
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
    backgroundColor:"#115f9b"
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
    height:0.5,
    width:"100%",
    backgroundColor:"#115f9b"
  },
  avatarContainer:{
    borderRadius:100,
    height:80,
    width:150,
    flexDirection:'row',
    paddingVertical:13,
    //  justifyContent:"center",
    // alignItems:"center"
  }
});
export default HomeScreen;