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

export default class AccueilCommunitySCreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
            load:true
        }
    }

    componentDidMount() {
        this.fetchCats();
    }


    fetchCats() {
        this.setState({ refreshing: true });
        fetch('https://api.thecatapi.com/v1/images/search?limit=30&page=1')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                this.setState({ refreshing: false });
                this.setState({load:false})
            }).catch(e => console.log(e));
    }

    displayFavoriteMember(){
        return(
            <Image 
            source={ require("../assets/images/icons/ic_favorite_full.png")}
            style={{width:40,height:40,borderRadius:20,marginLeft:30}}
        />
        )
    }

    renderItemComponent = (data) =>
        <View style={styles.container}>
           <Image style={styles.image} source={{ uri: data.item.url }} />
            <Text style={{paddingTop:45,marginLeft:10,color:"#fff"}}>ILUNGA KALALA JABO</Text>
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

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
    }

    render() {
      return (
        <SafeAreaView>
             <ImageBackground style={styles.backgroundImage} source={require("../assets/images/bg/bg2.jpg")}
        >
        {this.state.load && <ActivityIndicator size="large" color="#115f9b" />}
          <FlatList
            data={this.state.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.ItemSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
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