
import React from 'react';
import { SafeAreaView, View, FlatList,ScrollView,TouchableWithoutFeedback,StyleSheet,ActivityIndicator,ImageBackground, Text, Image, StatusBar } from 'react-native';
import { Appbar, FAB, TextInput, withTheme } from 'react-native-paper';
import { color } from 'react-native-reanimated';
 import SearchBar from "../Components/ScearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import API from '../API/API';
import Community from '../Components/Community';
import Post from '../Components/Post';
import { connect } from 'react-redux'
import CompleteProfile from '../Components/Dialogs/CompleteProfile';

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
       load_school:false,
       communities:[],
       load_niversity:false,
       isCompleteProfileDialogVisible:false,
       posts:[],
       refreshing: true,
       load:true,
       like:0,
    }
    this.api = new API();
  }

 getCommunity = async() =>{

  const communities = await this.api.getData("communities");

  this.setState({communities:communities.data})

  this.setState({isCommunityLoaded:true})

  
 }

 checkProfileComplete = async ()=>{

  const requiredProfile = await this.api.getData('checkUserProfileIsCompleted/'+this.props.user.id)

  if(requiredProfile.status == 1){

    this.setState({isCompleteProfileDialogVisible:true})

  }

  
 }

 getPosts = async()=> {
     
  const response = await this.api.getData("posts")

  this.setState({ refreshing: false });
  this.setState({load:false})

  this.setState({posts:response.data})

    
}

handleRefresh = () => {
  this.setState({ refreshing: false }, () => { this.getPosts() }); // call fetchCats after setting the state
}



componentDidMount(){
this.getCommunity();
this.checkProfileComplete();
this.getPosts();
this.setState({refreshing:true});
this.handleRefresh();

}


  render(){ 
    const { theme, } = this.props;
     return (
       <View style={styles(theme).container}>
        
        <View style={{height:150}}>
          <Community data={this.state.communities} isCommunityLoaded={this.state.isCommunityLoaded} navigation={this.props.navigation}/>
        </View>         
         <ScrollView>
          <View style={styles.header}>
              <Post 
                data={this.state.posts}
                load={this.state.load}
                refresh={this.state.refreshing}
                
                />
            </View>
         </ScrollView>
      
         <FAB
          icon="plus"
          style={styles(theme).fab}
          onPress={() => this.props.navigation.navigate("CommunityTab")}
        />
        <CompleteProfile 
          Title="Completer Votre profile"
          Visible={this.state.isCompleteProfileDialogVisible}
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

const mapStateToProps = (state) =>{
  return{
    user: state.userReducer.user
  }
}
export default connect(mapStateToProps)(withTheme(HomeScreen));