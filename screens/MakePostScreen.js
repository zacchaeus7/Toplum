import React from "react";

import { View,StyleSheet } from 'react-native';
import {  Text, TextInput,RadioButton, Button, ThemeProvider, withTheme} from 'react-native-paper';
import API from "../API/API";
import AppTopBar from "../Components/AppTopBar";

class MakePostScreen extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            value:1,
            title:null,
            description:null,
            community_accession_id:5,
            isLoading:false
        }

        this.api = new API();
    }


    save = async()=>{

        this.setState({isLoading:true})

        const data = {
            title:this.state.title,
            description:this.state.description,
            is_community_or_toplum:this.state.value,
            community_accession_id:this.state.community_accession_id,
        }


        if(this.state.title && this.state.description){

             const response = await this.api.send(data,"posts")

            if(response.status == 1){

                this.setState({isLoading:false})

                if(this.state.value == 2){

                    this.props.navigation.navigate("CommunityTab")

                }else{
                    this.props.navigation.navigate("MainScreen")
                }

            }

        }

    }

    render(){

        const { theme } = this.props

        return(
            <View style={{flex:1}}>
                <AppTopBar  title="Faire une publication" icon="account-circle" navigation={this.props.navigation} newScreen="AccountScreen" />
                
                <View style={{marginTop:10,margin:5}}>
                <RadioButton.Group onValueChange={newValue => this.setState({value:newValue})} value={this.state.value}>
                    <View style={{flexDirection:'row', marginLeft:1,borderWidth:0.5,borderColor:"#ccc",backgroundColor:"#fff"}}>
                        <View>
                            <Text>Ma communauté</Text>
                            <RadioButton value={2} />
                        </View>
                        <View style={{ marginLeft:40}}>
                            <Text>Première page TopLum</Text>
                            <RadioButton value={1} />
                        </View>
                    </View>
                    </RadioButton.Group>
                    <TextInput 
                        style={{paddingTop:1,backgroundColor:'#fff',margin:3}}
                        label="Titre"
                        value={this.state.title}
                        onChangeText={(val)=>this.setState({title:val})}
                    />
                   
                    <TextInput 
                        style={{height:70,paddingTop:1,backgroundColor:'#fff',borderWidth:1,borderColor:"#ccc"}}
                        value={this.state.description}
                        onChangeText={(val)=>this.setState({description:val})}
                        label="Que Voulez-vous dire???"
                    />

                    <Button 
                        style={{backgroundColor:"#000",marginTop:5,borderRadius:6,color:"#fff",height:50}}
                        icon="loading"
                        mode="elevated"
                        loading={this.state.isLoading}
                        onPress={() => this.save()}>
                        Publier
                    </Button>
                </View>
            </View>
        )
    }
}

export default withTheme(MakePostScreen);

const styles = StyleSheet.create({

    inputs:{

        marginTop:400,
    }
})