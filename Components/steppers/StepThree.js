import React from "react";
import { View,Text,StyleSheet,Image } from 'react-native';
import { withTheme, Avatar, TextInput } from 'react-native-paper';
import {connect} from 'react-redux';

class StepThree extends React.Component{

  constructor(props){
    super(props)

    this.state = {

        full_name:null,
        end_date:null,
        faculty:null,
        community_id:null,
        user_id:null
        
    }
    
}

componentDidMount(){
    console.log(this.props)
}
    render(){
        const { theme } = this.props;
        return(
            <View style={styles.container}>
              <Text style={{flexWrap: 'wrap', alignSelf: 'flex-end', color: theme.colors.primary}}>{this.props.title}</Text>

              <View style={styles.trasanction}>
                <Avatar.Icon size={80} icon="account-circle" style={{ marginTop: 10 }} />
                <View style={styles.transaction_text}>
                    <Text style={{fontSize:20}}>{this.props.community.full_name}</Text>
                </View>
              </View>
              <View style={styles.institution}>
                <Text style={{padding:20,fontSize:15,fontWeight:'bold',color:"#000" }}>FACULTE</Text>
                <View style={{marginLeft:20}}>
                    <Text style={{color: theme.colors.primary,fontSize:15,fontWeight:'bold',padding:20}}>{this.props.community.faculty}</Text>
                </View>
              </View>

              <View style={{flexDirection:"row"}}>
                <Text style={{padding:20,fontSize:15,fontWeight:'bold',color:"#000" }}>ACTIVITE</Text>
                <Text style={{padding:20,fontSize:15,fontWeight:'bold',color: theme.colors.primary }}>{this.props.community.activity}</Text>
              </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      
    },
    illustration_image:{

        width:"100%",
        height:200,
    },
    trasanction:{
        backgroundColor:"#e6e6e6",
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"#fff"
    },
    transaction_icon:{
        height:100,
        width:100,
        backgroundColor:"#fff",
        borderRadius: 50,
        margin:10

    },
    transaction_text:{

        marginTop:20,
        marginLeft:30,    
    },
    intitution:{

    },
    institution:{
        backgroundColor:"#e6e6e6",
        flexDirection:"row",
    },
    paiment_mode:{

    }
})

const mapStateToProps = (state) =>{
    return{
        community:state.joinCommunityReducer.community
    }
}

export default connect(mapStateToProps)(withTheme(StepThree));