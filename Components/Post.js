
import React from "react";
import { ImageBackground } from "react-native";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    TouchableOpacity,
    Text,
    Linking
} from "react-native";
 import { Badge,Card,Title,ActivityIndicator, withTheme } from 'react-native-paper';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from "react-redux";
import API from "../API/API";
 import WrapperComponent from "./Modals/CommentModal";
import DescriptionCard from "./DescriptionCard";
import EmptyFlatList from "./EmptyFlatList";

class Post extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data:[],
            refreshing: true,
            load:true,
            posts:[],
            like:0
        }
        this.api = new API();
    }

    // fetchCats() {
    //     this.setState({ refreshing: true });
    //     fetch('https://api.thecatapi.com/v1/images/search?limit=30&page=1')
    //         .then(res => res.json())
    //         .then(resJson => {
    //             this.setState({ data: resJson });
    //             this.setState({ refreshing: false });
    //             this.setState({load:false})
    //         }).catch(e => console.log(e));
    // }

    likeOrUnLike = async(item)=>{
      const data = {
        post_id:item.id,
        user_id:this.props.user.id,
        like:true
      }
       const response = await this.api.send(data,"like_or_unLike")

       console.log(response);

    }



    componentDidMount(){
       
    }
    renderItemComponent = ({item}) =>{
      return(
        <View style={styles.content}>
          <Card mode="outlined">
            <Card.Title title={item.full_name.toLowerCase()+"("+item.name+")"}>
            </Card.Title>
            <Card.Content>
              <Title>{item.title}</Title>
              <DescriptionCard description={item.description} />
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <View style={{flexDirection:"row",borderRadius:5,margin:2,borderWidth:0.7,height:50,borderColor:"#ccc",alignItems:'center',width:"100%"}}>
                <TouchableOpacity
                  onPress={()=>this.likeOrUnLike(item)}
                  >
                  <MaterialIcons name="favorite" color="#fd8500"  size={30} />
                </TouchableOpacity>
                    {item.like > 0 ? 
                    <Badge style={{ left: "0%", top: "-8%", backgroundColor: "#00f", color: "#fff" }}>{item.like}</Badge>
                    :<Text></Text>  
                    } 
                <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(
                        'http://api.whatsapp.com/send?text=TopLum est pret à répondre à toutes vos préocupations&phone=243974375371?'
                      );
                    }}>
                  <MaterialIcons name="comment"  size={30} />    
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>{<WrapperComponent />}}
                  >
                <MaterialIcons name="share"  size={30} />
                </TouchableOpacity>
              </View>
            </Card.Actions>
        </Card>
    </View>
      )

    }

        render(){

          const {data,load,refresh} = this.props

           return(
            <SafeAreaView style={{marginTop:10}}>
              
              {load ?
              <ActivityIndicator size="large" color="#115f9b" />
                  :
                  <FlatList
                    data={data}
                    renderItem={(item) => this.renderItemComponent(item)}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={this.ItemSeparator}
                    ListEmptyComponent={<EmptyFlatList />}
                    refreshing={this.state.refreshing}
                    onRefresh={refresh}
                    numColumns={1}
                    ListHeaderComponent={<Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>PUBLICATIONS RECENTES</Text>}
              />
              }   
            </SafeAreaView>
           )
        }
}

const mapStateToProps = (state)=>{
  return {
    user:state.userReducer.user
  }
}

export default connect(mapStateToProps)(withTheme(Post))

const styles =  (theme)=>StyleSheet.create({
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
    illustrationImage:{
      width:50,
      height:100,
      resizeMode: "contain",
    },
})