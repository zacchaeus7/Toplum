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

    const members = await this.api.getData('community_members/'+2);

    console.log(members)
   this.setState({data:members})
}

componentDidMount() {
    // console.log(this.props.navigation.communityprops)
    this.getCommunityMembers();
}

displayFavoriteMember(){
    return(
        <Image 
        source={ require("../assets/images/icons/ic_favorite_full.png")}
        style={{width:40,height:40,borderRadius:20,marginLeft:30}}
    />
    )
}

renderItemComponent = ({item}) =>
    <View style={styles.container}>
       <Image style={styles.image} source={require('../assets/images/icons/account_png.png')} />
        <Text style={{paddingTop:45,marginLeft:10,color:"#fff"}}>{item.full_name}</Text>
        <TouchableOpacity 
        onPress={()=>alert("Ajouter Au favorit")}
        style={{paddingTop:40}}>
           {this.displayFavoriteMember()}
        </TouchableOpacity>
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
         <ImageBackground style={styles.backgroundImage} source={require("../assets/images/bg/bg2.jpg")}
    >
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
      </ImageBackground>
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
width:400,
// margin: 1,
 backgroundColor: '#000',
 opacity:0.6
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
width:100,
height:100,
borderRadius: 50,
},
backgroundImage:{
width: '100%',
height: '100%',
justifyContent: "center",
alignItems: "center",
opacity: 0.7
},
});
