import React from "react";
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

export default class CommnunityScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            load:true,
            refreshing: true,
        }
    }

    componentDidMount() {
        this.fetchCats();
    }

    fetchCats() {
        this.setState({ refreshing: true });
        fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                this.setState({ refreshing: false });
                this.setState({load:false})
            }).catch(e => console.log(e));
    }

    renderItemComponent = ({item,separators}) =>
    <TouchableOpacity style={styles.container} onPress={ () => this.props.navigation.navigate("DetailCommunity")}>
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
                 <Image style={{height:50,width:50}}
                 source={require("../assets/logo.jpg")}
                 />
                 <View>
                     <Text style={{color:'black',width:300,marginLeft:10,fontSize:20}}>UNIVERSITE DE LUBUMBASHI</Text>
                     <Text>université congolqise située au sud du pays</Text>
                 </View>                    
             </View>              
         </View>
         
     </View>
 </TouchableOpacity>

    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
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
        {this.state.load && <ActivityIndicator size="large" color="#115f9b" />}

          <FlatList
            data={this.state.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.ItemSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: '#fd8500',
        // marginTop: StatusBar.currentHeight || 0,
      },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius:12,
    marginVertical: 4,
    marginHorizontal: 10,
  },
  item_Separator:{
    height:0.5,
    width:"100%",
    backgroundColor:"#fd8500"
  },
  avatarContainer:{
    borderRadius:100,
    height:60,
    width:150,
    flexDirection:'row',
    paddingVertical:13,
    //  justifyContent:"center",
    // alignItems:"center"
  }
});