
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
import DescriptionCard from "./DescriptionCard";

class Post extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data:[],
            refreshing: true,
            load:true,
            posts:[],
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

    likeOrUnLike = async({item})=>{

      const data = {
        post_id:1,
        user_id:this.props.user.id,
        like:true
      }
       const response = await this.api.send(data,"like_or_unLike")

       console.log(response);
    }



    componentDidMount(){
        console.log(this.props)
    }
    renderItemComponent = ({item}) =>{
      return(
        <View style={styles.content}>
      <Card mode="outlined">
      {/* <Image 
            style={styles.illustrationImage}
            source={require('../assets/images/icons/account_png.png')}
            /> */}
        <Card.Title title={item.full_name.toLowerCase()+"("+item.name+")"}>
        </Card.Title>
        <Card.Content>
          <Title>{item.title}</Title>
          <DescriptionCard description={item.description} />
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
        <TouchableOpacity
        onPress={item=>this.likeOrUnLike(item)}
        >
          <MaterialIcons name="favorite" color="#fd8500"  size={30} />
        </TouchableOpacity>
        {item.like > 0 ? 
        <Badge style={{ left: "0%", top: "-3%", backgroundColor: "#00f", color: "#fff" }}>{item.like}</Badge>
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
        <MaterialIcons name="share"  size={30} />
          {/* <Button>Ok</Button> */}
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