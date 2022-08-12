import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Linking
} from "react-native";
import { Avatar, Button, Card, Title, Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FAB } from 'react-native-paper';
import CommentModal from "../Components/Modals/CommentModal";


import API from "../API/API";
import { connect } from "react-redux";

 class ShopScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            refreshing: true,
            load:true,
            isModalShow:false
        }
        this.api = new API();
    }

    componentDidMount() {
        this.getItems();
    }

    getItems = async()=> {
       
         const items = await this.api.getData('shops');

         this.setState({datas:items.data,refreshing: true});

    }

    renderItemComponent = ({item}) =>
        <TouchableOpacity style={styles.container}>
            <View >
            <Card style={styles.container}>
                <Card.Title title={item.name} />
                <Card.Cover style={{marginLeft:5,width:200}} source={{uri:item.image}} />
                <Card.Content>
                {/* <Title>Card title</Title> */}
                <Title>${" "+item.price.toFixed(2)}</Title>
                </Card.Content>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity
                     onPress={() => {
                        Linking.openURL(
                          'http://api.whatsapp.com/send?phone=+243'+item.whatsapp_phone
                        );
                      }}>
                          <FontAwesome name="whatsapp" color="#0f0" size={40} />
                    
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{marginTop:5}}>+243{item.whatsapp_phone}</Text>
                    </TouchableOpacity>
                </View>
            </Card>
            <Divider />
            </View>
        </TouchableOpacity>

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.getItems() }); // call fetchCats after setting the state
    }

    showModal(){
        this.setState({isModalShow:true})
    }

    render() {
      return (
        <View>
            <View style={{height:20,margin:10,borderRadius:5}}>
                <Card>
                    <Card.Title title="Shop de la communauté" />
                    <Card.Content>

                    </Card.Content>
                    <View style={{flexDirection:"row"}}>
        
                    </View>
                </Card>
            </View>
            <SafeAreaView style={styles.content}>
            {/* {this.state.load && <ActivityIndicator size="large" color="#115f9b" />} */}

            <FlatList
                data={this.state.datas}
                renderItem={item => this.renderItemComponent(item)}
                keyExtractor={item => item.id.toString()}
                // ItemSeparatorComponent={this.ItemSeparator}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
                numColumns={2}
            />
              

                <CommentModal 
                    isVisible={this.state.isModalShow}
                />
            </SafeAreaView>
            <FAB
                icon="camera"
                style={styles.fab}
                onPress={() =>this.showModal()}
                />
        </View>
        )
    }
}

const mapStateToProps = (state)=>{

    return{
        user:state.userReducer.user
    }
}

export default connect(mapStateToProps)(ShopScreen)

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"200%",
    // margin:2,
    borderRadius:4,
    flexDirection:'row',
    backgroundColor: '#fff',
  },
  content:{
    margin:2,
    marginTop:30
  },
  image: {
    height: 200,
    width:300,
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:1,
    borderRightColor:'#000',
    margin:15,
  },
  post_infos:{
     flexDirection:'row',
  },
  fab: {
    position: 'absolute',
    backgroundColor:"#14F",
    margin: 16,
    right: 0,
    bottom: 50,
  },
});
