import React from 'react'

import {View, Text,SafeAreaView,FlatList,StyleSheet,Image} from 'react-native';
import {connect} from 'react-redux';

 class FavoriteCommunityMember extends React.Component{

    constructor(props){
        super(props)

    }
    componentDidMount(){
        console.log(this.props.favoritMember.favoriteMembers)
    }

    renderItemComponent = ({item}) =>
    <View style={styles.container}>
       <Image style={styles.image} source={require('../assets/images/icons/account_png.png')} />
       <View>
       <Text style={{paddingTop:30,marginLeft:10,color:"#000"}}>{item.full_name}</Text>
        {/* <TouchableOpacity 
            onPress={()=>this.addToFavorite(item)}
            style={{paddingTop:45,marginLeft:10}}>
           {this.displayFavoriteMember(item)}
        </TouchableOpacity> */}
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

    render(){
        
        return(
            <SafeAreaView>
                {/* <ImageBackground style={styles.backgroundImage} source={require("../assets/images/bg/bg2.jpg")}
            > */}
            {/* {this.state.load && <ActivityIndicator size="large" color="#115f9b" />} */}
            
            <FlatList
                data={this.props.favoritMember.favoriteMembers}
                renderItem={(item) => this.renderItemComponent(item)}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={this.ItemSeparator}
                // refreshing={this.state.refreshing}
                // onRefresh={this.handleRefresh}
                numColumns={1}
            />
            {/* </ImageBackground> */}
            {/* <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => this.props.navigation.navigate("JoinCommunityScreen")}
            /> */}
            </SafeAreaView>)
        
    }
}

const mapStateToProps = (state)=>{
    return{
        favoritMember:state.favoriteMemberReducer
    }
}

export default connect(mapStateToProps)(FavoriteCommunityMember)


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
