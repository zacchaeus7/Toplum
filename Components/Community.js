import React from "react";
import { View,Text,Dimensions, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

const width =  Dimensions.get('window').width;

export class Community extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            isModePayment:false,
            isCommunityLoaded:false,
            entries:[
                {
                    'title':"UPL"
                },
                {
                    'title':"UNH"
                },
                
                {
                    'title':"UNILU"
                },
                {
                    'title':"UNIKAM"
                },
        
            ],
        }
        
    }



    _renderItem ({item}) { 

        const { navigation } = this.props;
        console.log(item.image)
        return (
            <View style={styles.slide}>
                <TouchableOpacity onPress={()=> navigation.navigate("CommunityTab",{communityprops:item}) } >
                <Image 
                    style={{width:100,height:100, borderRadius:50}}
                        source={{uri:item.image}}         
                />
                </TouchableOpacity>
                <Text style={{fontWeight:'bold'}}>{item.name}</Text>
            </View>
        );
    }

    render () {
        const {data,isCommunityLoaded} = this.props
        return (
            <View>

                {!isCommunityLoaded ? <ActivityIndicator size="large" color="#fd8500" />:

                 <View style={styles.slideContent}>
                    <View style={{flexDirection:"row",backgroundColor:"#fff"}}>
                        <Text style={{fontWeight:"bold",fontSize:18,marginLeft:10,color:"#000"}}>Les communutés</Text>
                        <Text style={{fontWeight:"bold",marginLeft:150,fontSize:18,color:"#115f9b",marginRight:10}}>Voir Plus</Text>
                    </View>
                    
                    <Carousel
                        layout={"default"}
                        layoutCardOffset={15}
                        ref={ref => this.carousel = ref}
                        data={data}
                        sliderWidth={width}
                        itemWidth={110}
                        inactiveSlideOpacity={0.5}
                        loop={true}
                        renderItem={(item)=>this._renderItem(item)}
                        onSnapToItem = { index => this.setState({activeIndex:index}) }
                        onPress={() => this.carousel.snapToNext()} 
                    
                    />
      
                </View>
                  }
            </View>
           
            
        );
    }
}

const styles = StyleSheet.create({
    slideContent:{
        backgroundColor:"#fbf5f5",
        height:210,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        
    },
    slide: {
        backgroundColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        marginTop:30,
        borderRadius:8,
        borderWidth:1,
        borderColor:"#ccc"

    }
});
export default Community