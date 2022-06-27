
import React from 'react';
import { SafeAreaView, View, FlatList,ScrollView,TouchableWithoutFeedback,StyleSheet,ActivityIndicator,ImageBackground, Text, Image, StatusBar } from 'react-native';
import { FAB, TextInput } from 'react-native-paper';
import { color } from 'react-native-reanimated';
 import SearchBar from "../Components/ScearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import API from "../API/API";
import Community from '../Components/Community';
import Posts from '../Components/Posts';

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


componentDidMount(){

  this.getSchools()

}


  render(){ 
     return (
       <View style={styles.container}>
         
         <StatusBar  
           backgroundColor = "#D492A9"  
           //barStyle = "dark-content"   
           hidden = {false}    
           translucent = {true}  
         />  

         <Community  navigation={this.props.navigation}/>
         
         <ScrollView>
          <View style={styles.header}>
              <Posts />
            </View>
         </ScrollView>
      
         <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => this.props.navigation.navigate("CommunityTab")}
        />
       </View >
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:7,

    // marginTop: StatusBar.currentHeight || 0,
  },
  searchBar: {
    opacity: 0.85,
    width: 345,
    marginTop: 20
},
header: {
  // flex: 1,
  // justifyContent: 'flex-end',
  // paddingHorizontal: 20,
  // paddingBottom: 50
},
footer: {
  // flex: Platform.OS === 'ios' ? 4 : 10,
  // backgroundColor: '#fff',
  // borderTopLeftRadius: 7,
  // borderTopRightRadius: 7,
  // borderBottomLeftRadius:7,
  // borderBottomRightRadius:7,
  // paddingHorizontal: 20,
  // paddingVertical: 30
},
footer_two:{
 // flex: Platform.OS === 'ios' ? 4 : 10,
  // backgroundColor: '#fff',
  // borderTopLeftRadius: 13,
  // borderTopColor:"#115f9b",
  // borderTopWidth:2,
  // borderTopRightRadius: 13,
  // borderBottomLeftRadius:7,
  // borderBottomRightRadius:7,
  // paddingHorizontal: 20,
  // paddingVertical: 30
},

fab: {
  position: 'absolute',
  backgroundColor:'#D492A9',
  margin: 16,
  right: 0,
  bottom: 0,
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