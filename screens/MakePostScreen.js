import React from "react";

import { View,StyleSheet } from 'react-native';
import {  Text, TextInput,RadioButton, Button} from 'react-native-paper';
import API from "../API/API";
import AppTopBar from "../Components/AppTopBar";

class MakePostScreen extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            value:1,
            title:null,
            description:null,
            community_user_id:null,
            isLoading:false
        }

        this.api = new API();
    }


    save = async()=>{

        this.setState({isLoading:true})

        const data = {
            title:this.state.title,
            description:this.state.description,
            community_user_id:this.state.value
        }

        if(this.state.title && this.state.description){

             const response = await this.api.send(data,"posts")

            if(response.status == 1){

                this.setState({isLoading:false})
                this.props.navigation.navigate("CommunityTab")

            }

        }

        // console.log(data)

    }

    render(){
        return(
            <View>
                <AppTopBar  title="Faire une publication" icon="account-circle" navigation={this.props.navigation} newScreen="AccountScreen" />
                
                <View style={{marginTop:50}}>
                <RadioButton.Group onValueChange={newValue => this.setState({value:newValue})} value={this.state.value}>
                    <View style={{flexDirection:'row', marginLeft:40}}>
                        <View>
                            <Text>Ma communauté</Text>
                            <RadioButton value={1} />
                        </View>
                        <View style={{ marginLeft:40}}>
                            <Text>Première page TopLum</Text>
                            <RadioButton value="toplum" />
                        </View>
                    </View>
                    </RadioButton.Group>
                    <TextInput 
                        label="Titre"
                        value={this.state.title}
                        onChangeText={(val)=>this.setState({title:val})}
                    />
                   
                    <TextInput 
                        style={{height:200}}
                        value={this.state.description}
                        onChangeText={(val)=>this.setState({description:val})}
                        label="Que Voulez-vous dire???"
                    />

                    <Button 
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

export default MakePostScreen;

const styles = StyleSheet.create({

    inputs:{

        marginTop:400,
    }
})