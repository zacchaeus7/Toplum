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
import { Avatar,FAB,Button, Card, Title, Divider } from 'react-native-paper';
import API from "../API/API";
import {connect} from 'react-redux';
import EmptyFlatList from "../Components/EmptyFlatList";

  class MemberCommunityScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        data: [],
        refreshing: true,
        load:true,
        favoritMember:[]
    }
    this.api = new API();
}




getCommunityMembers = async()=>{

    const response = await this.api.getData('community_members/'+this.props.route.params.currentCommunity);

    this.setState({data:response.user.data})
    this.setState({refreshing:false})
}

componentDidMount() {
    // console.log(this.props.route.params.currentCommunity)
    this.getCommunityMembers();

    console.log(this.props)
}

displayFavoriteMember(items){

    var SourceImage = require("../assets/images/icons/ic_favorite_empty.png")
    if(this.props.favoritMember.favoriteMembers.findIndex(item=>item.id === items.id) !== -1){
        SourceImage = require("../assets/images/icons/ic_favorite_full.png")
    }
    return(
        <Image 
            source={SourceImage}
            style={{width:35,height:35,borderRadius:5}}
        />
    )
}

componentDidUpdate(){
     console.log(this.props.favoritMember.favoriteMembers)
}

addToFavorite(item){

    const action = {type:"ADD_USER_TO_FAVORITE", value:item}

    this.props.dispatch(action);
}

renderItemComponent = ({item}) =>
    <View style={styles.container}>
       <Image style={styles.image} source={require('../assets/images/icons/account_png.png')} />
       <View style={{paddingTop:10,marginLeft:5,flexDirection:'row'}}>
        <Text style={{paddingTop:30,marginLeft:10,color:"#000"}}>{item.full_name}</Text>
            <TouchableOpacity 
                onPress={()=>this.addToFavorite(item)}
                style={{paddingTop:10,marginLeft:60}}>
            {this.displayFavoriteMember(item)}
            </TouchableOpacity>
       </View>
    </View>

ItemSeparator = () => <View style={{
    height: 2,
    // backgroundColor: "rgba(0,0,0,0.5)",
    backgroundColor: "#ccc",
    marginLeft: 10,
    marginRight: 10,
}}
/>

handleRefresh = () => {
    this.setState({ refreshing: false }, () => { this.getCommunityMembers() }); // call fetchCats after setting the state
}

render() {
  return (
    <View>
        <View style={{height:20,margin:10,borderRadius:5}}>
                <Card>
                    <Card.Title title="Tous les membres" />
                    <Card.Content>

                    </Card.Content>
                    <View style={{flexDirection:"row"}}>
        
                    </View>
                </Card>
            </View>
            <SafeAreaView style={{marginTop:35}}>
            <FlatList
                data={this.state.data}
                renderItem={(item) => this.renderItemComponent(item)}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={this.ItemSeparator}
                ListEmptyComponent={<EmptyFlatList />}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
                numColumns={1}
            />
            {/* </ImageBackground> */}
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => this.props.navigation.navigate("JoinCommunityScreen")}
            />
            </SafeAreaView>
    </View>)
}
}

const mapStateToProps = (state)=>{
    return{
        // user: state.userReducer.user,
         favoritMember:state.favoriteMemberReducer
    }
}

export default connect(mapStateToProps)(MemberCommunityScreen)

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        width:"100%",
        paddingTop:30,
        
        // margin: 1,
         backgroundColor: '#fff',
        // opacity:0.6
    // borderRadius: 6,
    },
    fab: {
        position: 'absolute',
        backgroundColor:"#14F",
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
