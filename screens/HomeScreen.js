
import React from 'react';
import { SafeAreaView, View, FlatList,ScrollView,TouchableWithoutFeedback,StyleSheet,ActivityIndicator,ImageBackground, Text, Image, StatusBar } from 'react-native';
import { Appbar, FAB, TextInput, withTheme } from 'react-native-paper';
import { color } from 'react-native-reanimated';
 import SearchBar from "../Components/ScearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import API from '../API/API';
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

      isCommunityLoaded:false,

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
       load_school:false,
       communities:[],
       load_niversity:false
    }
    this.api = new API();
  }

 getCommunity = async() =>{

  const communities = await this.api.getData("communities");

  this.setState({communities:communities.data})

  this.setState({isCommunityLoaded:true})
  console.log(communities)
 }


componentDidMount(){

 this.getCommunity();


}


  render(){ 
    const { theme, } = this.props;
     return (
       <View style={styles(theme).container}>
        
         <Community data={this.state.communities} isCommunityLoaded={this.state.isCommunityLoaded} navigation={this.props.navigation}/>
         
         <ScrollView>
          <View style={styles.header}>
              <Posts />
            </View>
         </ScrollView>
      
         <FAB
          icon="plus"
          style={styles(theme).fab}
          onPress={() => this.props.navigation.navigate("CommunityTab")}
        />
       </View >
     );
  }
}

const styles =(theme)=> StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
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
  backgroundColor:theme.colors.primary,
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
export default withTheme(HomeScreen);