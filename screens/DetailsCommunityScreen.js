import React from 'react';
import { View , StyleSheet, FlatList,ActivityIndicator,SafeAreaView,TouchableWithoutFeedback,Image } from 'react-native';
import { IconButton, Card, Title, Paragraph, Avatar, Text, withTheme } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';
import API from '../API/API';

class DetailsCommunityScreen extends React.Component{
    constructor(props){
        super(props);
    //    this.api = new API();
        this.state = {
            school:null,
            data:[
                {
                    year:"Communauté 2010-2011",
                    description:"je ne sais pas quoi mettre"
                },
                {
                    year:"Communauté 2011-2012",
                    description:"je ne sais pas quoi mettre"
                },
                {
                    year:"Communauté 2012-2013",
                    description:"je ne sais pas quoi mettre"
                },
                {
                    year:"Communauté 2013-2014",
                    description:"je ne sais pas quoi mettre"
                },
            ],
            load:true,
        };
        
       
    }


    getBanks = async ()=>{

        const school = await this.api.getData("schools/"+ this.props.route.params.school_id);

        this.setState({school:school});
        this.setState({load:false})

    }

    componentDidMount(){
        // this.getBanks();
    }
    render(){
        
        return(
            <SafeAreaView style={{ flex: 1, }}>
                <FastImage 
                    
                    style={styles.image}
                    source={require('../assets/logo.png')}
                    resizeMode={FastImage.resizeMode.cover}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                
                        <View style={{flexDirection: 'row'}}>
                            <IconButton
                                // icon={favoriteSellers.find(favSeller => favSeller.id == seller.id) ? "heart" : "heart-outline"}
                                color="#d02a2a"
                                size={25}
                                style={{backgroundColor: "#fff"}}
                                onPress={() => this.addFavorite()}
                            />
                          
                        </View>
                    </View>
                </FastImage>
                <Animatable.View
                animation="flipInX"
                duration={2000}
                >

                <Card style={ styles.card }>
                {/* {this.state.load && <ActivityIndicator size="large" color="#fd8500" />} */}
                    <Card.Title title="UNIVERSITE DE LUBUBMASHI" subtitle="Université Congolaise" left={() => <Avatar.Image size={45} source={require("../assets/logo.png")} />} />
                    <FlatList
                        data = {this.state.data}
                        renderItem={({ item, separators }) => (
                            <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate("CommunityTab")}>
                              <View style={styles.item}
                                key={item.id}
                                onPress={() => alert("test")}
                                onShowUnderlay={separators.highlight}
                                onHideUnderlay={separators.unhighlight}>
                                <View style={{ backgroundColor: 'white' }}>
                                   
                                    <View style={styles.avatarContainer}>
                                      <Image style={{height:50,width:50}}
                                        source={require("../assets/logo.png")}
                                      />
                                     <View>
                                        <Text style={{color:'black',width:300,marginLeft:10,fontSize:20}}>{item.year}</Text>
                                        <Paragraph>{item.description}</Paragraph>
                                     </View>
                                    
                                    </View>              
                                </View>
                                
                              </View>
                              </TouchableWithoutFeedback>
                            )}
                        showsVerticalScrollIndicator ={false}
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={<Text style={{fontSize:20, textAlign:"center",color:"#000"}}>Historique des communautés</Text>}

                    />
                    
                </Card>
            </Animatable.View>
               
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: "100%", 
        height: "50%",
        marginLeft:10
    },
    card: {
        marginTop: -80,
        marginBottom: 150,
       
        paddingBottom: "78%",
        borderTopLeftRadius: 15, 
        borderTopRightRadius: 15,
    },
    cart_badge: {
        position: "absolute",
        left: "80%",
        top: "-2%"
    },
   
    avatarContainer:{
        borderRadius:100,
        height:100,
        width:150,
        flexDirection:'row',
        paddingVertical:13,
      
      }
});

export default DetailsCommunityScreen;