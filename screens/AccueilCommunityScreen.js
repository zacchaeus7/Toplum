import React from "react";
import { ImageBackground } from "react-native";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Text,
    Linking
} from "react-native";
 import { FAB, Paragraph,Card,Title,Button } from 'react-native-paper';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FabG from "../Components/fabs/FabG";
import { connect } from "react-redux";
import API from "../API/API";
import Post from "../Components/Post";

 class AccueilCommunitySCreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            refreshing: true,
            load:true,
            grantToPublish:false
        }

        this.api = new API();
    }

    getPosts = async()=> {
     
      const response = await this.api.getData("community_posts/"+2+"/"+this.props.route.params.currentCommunity)

      this.setState({ refreshing: false });
      this.setState({load:false})
    
      this.setState({posts:response.data})
    
      // console.log(this.state.posts)
    }

    componentDidMount() {

       this.getPosts();
       this.checkMemberBelonToCommunity();
      // console.log(this.props.route.params.currentCommunity)
    }


    displayFavoriteMember(){
        return(
            <Image 
            source={ require("../assets/images/icons/ic_favorite_full.png")}
            style={{width:40,height:40,borderRadius:20,marginLeft:30}}
        />
        )
    }

    checkMemberBelonToCommunity = async()=>{

      const response = await this.api.getData("check_member_belon_to_community/"+this.props.user.id+'/'+ 1)

      if(response.status ==1){
        this.setState({grantToPublish:true})
      }
      
    }

  

    ItemSeparator = () => <View style={{
        height: 2,
        // backgroundColor: "rgba(0,0,0,0.5)",
        backgroundColor: "#fff",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
    }

    render() {
      return (
        <SafeAreaView >
          <Post data={this.state.posts} load={this.state.load} />
        <FabG 
          navigation={this.props.navigation}
          currentCommunity={this.props.route.params.currentCommunity}
        />
        </SafeAreaView>)
    }
}
const mapStateToProps = (state) =>{
  return{
    user: state.userReducer.user,

  }
}

export default connect(mapStateToProps)(AccueilCommunitySCreen)

const styles =  StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
     backgroundColor:"#fff"
  },
  content:{
    flex:1,
     width:"100%",
    padding:3
    // backgroundColor:"#fff"
  },
  fab: {
    position: 'absolute',
    backgroundColor:"#fd8500",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  image: {
    width:"100%",
    height:250,
    resizeMode:'cover',
    borderRadius:2
  },
  backgroundImage:{
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7
},
});
