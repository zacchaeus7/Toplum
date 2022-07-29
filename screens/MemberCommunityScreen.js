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
    Text
} from "react-native";
 import { FAB } from 'react-native-paper';
import API from "../API/API";

export default class MemberCommunityScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        data: [],
        refreshing: true,
        load:true
    }
    this.api = new API();
}




getCommunityMembers = async()=>{

    const response = await this.api.getData('community_members/'+this.props.route.params.currentCommunity);

    this.setState({data:response.user.data})
}

componentDidMount() {
    // console.log(this.props.route.params.currentCommunity)
    this.getCommunityMembers();
}

displayFavoriteMember(){
    return(
        <Image 
        source={ require("../assets/images/icons/ic_favorite_full.png")}
        style={{width:35,height:35,borderRadius:5}}
    />
    )
}

renderItemComponent = ({item}) =>
    <View style={styles.container}>
       <Image style={styles.image} source={require('../assets/images/icons/account_png.png')} />
       <View>
       <Text style={{paddingTop:30,marginLeft:10,color:"#000"}}>{item.full_name}</Text>
        <TouchableOpacity 
            onPress={()=>alert("Ajouter Au favorit")}
            style={{paddingTop:45,marginLeft:10}}>
           {this.displayFavoriteMember()}
        </TouchableOpacity>
       </View>
    </View>

ItemSeparator = () => <View style={{
    height: 2,
    // backgroundColor: "rgba(0,0,0,0.5)",
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight: 10,
}}
/>

// handleRefresh = () => {
//     this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
// }

render() {
  return (
    <SafeAreaView>
         {/* <ImageBackground style={styles.backgroundImage} source={require("../assets/images/bg/bg2.jpg")}
    > */}
    {this.state.load && <ActivityIndicator size="large" color="#115f9b" />}
      
      <FlatList
        data={this.state.data}
        renderItem={(item) => this.renderItemComponent(item)}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={this.ItemSeparator}
        refreshing={this.state.refreshing}
        // onRefresh={this.handleRefresh}
        numColumns={1}
      />
      {/* </ImageBackground> */}
       <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => this.props.navigation.navigate("JoinCommunityScreen")}
    />
    </SafeAreaView>)
}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        width:"100%",
        
        // margin: 1,
        // backgroundColor: '#000',
        // opacity:0.6
    // borderRadius: 6,
    },
    fab: {
        position: 'absolute',
        backgroundColor:"#fd8500",
        margin: 16,
        right: 0,
        bottom: 0,
    },
    image: {
        width:80,
        height:80,
        borderRadius: 40,
    },
    backgroundImage:{
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        // opacity: 0.7
    },
});
