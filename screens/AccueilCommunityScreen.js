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
    Text,
    Linking
} from "react-native";
 import { FAB, Paragraph,Card,Title,Button } from 'react-native-paper';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FabG from "../Components/fabs/FabG";
import ReadMore from 'react-native-read-more-text';
import DescriptionCard from "../Components/DescriptionCard";
import { connect } from "react-redux";
import API from "../API/API";
import Post from "../Components/Post";

 class AccueilCommunitySCreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
            load:true,
            grantToPublish:false
        }

        this.api = new API();
    }

    componentDidMount() {
        this.fetchCats();
       this.checkMemberBelonToCommunity();
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

    checkMemberBelonToCommunity = async()=>{

      const response = await this.api.getData("check_member_belon_to_community/"+this.props.user.id+'/'+ 1)

      if(response.status ==1){
        this.setState({grantToPublish:true})
      }
      
    }

    

    // renderItemComponent = (data) =>
    //     <View style={styles.content}>
    //       <Card mode="outlined">
    //         <Card.Title title="Zachaeus Kabemba">
    //         </Card.Title>
    //         <Card.Content>
    //           <Title>Fin de la guerre à l'est de la RDC</Title>
    //           <DescriptionCard />
    //         </Card.Content>
    //         <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    //         <Card.Actions>

    //         <MaterialIcons name="favorite" color="#fd8500"  size={30} />
    //         <TouchableOpacity
    //             onPress={() => {
    //               Linking.openURL(
    //                 'http://api.whatsapp.com/send?text=TopLum est pret à répondre à toutes vos préocupations&phone=243974375371?'
    //               );
    //             }}>
    //           <MaterialIcons name="comment"  size={30} />
                  
    //           </TouchableOpacity>
    //         <MaterialIcons name="share"  size={30} />
    //           {/* <Button>Ok</Button> */}
    //         </Card.Actions>
    //     </Card>
        
    //     </View>

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
        <SafeAreaView >
          <Post />
        <FabG 
          navigation={this.props.navigation}
        />
        </SafeAreaView>)
    }
}
const mapStateToProps = (state) =>{
  return{
    user: state.userReducer.user,

  }
}

export default connect(mapStateToProps)(AccueilCommunitySCreen)

const styles =  StyleSheet.create({
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
  fab: {
    position: 'absolute',
    backgroundColor:"#fd8500",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  image: {
    width:"100%",
    height:250,
    resizeMode:'cover',
    borderRadius:2
  },
  backgroundImage:{
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7
},
});
