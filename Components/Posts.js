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

 class Posts extends React.Component {
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
            
             <View style={styles.avatarContainer}>
                 <View>
                     <Text style={{color:'#000',width:200,fontSize:15}}>Université officielle du congo</Text>
                     <Text style={{fontWeight:'bold',fontFamily:'italic'}}>université congolqise située au sud du pays</Text>
                 </View> 
                 <Image style={{height:80,width:170,justifyContent:'flex-end',alignItems:'flex-end'}}
                 source={require("../assets/images/1.jpg")}
                 />                   
             </View>              
         </View>
         
     </View>
 </TouchableOpacity>

    ItemSeparator = () => <View style={{
        height: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    }}
    />

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
    }

    render() {
      return (

        <SafeAreaView style={styles.footer}>

            {this.state.load && <ActivityIndicator size="large" color="#115f9b" />}

                <FlatList
                    data={this.state.data}
                    renderItem={item => this.renderItemComponent(item)}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={this.ItemSeparator}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    // ListHeaderComponent={<Text style={{fontSize:10,alignSelf:'center',backgroundColor:'#D492A9'}}>Publications</Text>}
                />

        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
      },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    width:"100%",
    borderRadius:7,
    margin: 1,
  },
  footer:{
  
    
  },
  item_Separator:{
    height:0.5,
    width:"100%",
    backgroundColor:"#ccc"
  },
  avatarContainer:{
    borderRadius:1,
    // height:110,
    width:150,
    flexDirection:'row',
    paddingVertical:13,
    //  justifyContent:"center",
    // alignItems:"center"
  }
});

export default Posts