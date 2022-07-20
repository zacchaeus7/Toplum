import React from "react";
import { StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextInput,Button,Text,ActivityIndicator, withTheme } from "react-native-paper";
import API from "../../API/API";
import { connect } from "react-redux";

class CompleteProfile extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name:"",
            email:null,
            isLoading:false
        }

        this.api = new API();

    }

    save = async()=>{
        this.setState({isLoading:true})

        const data = {

            name:this.state.name,
            email:this.state.email
        }
        const response  = await this.api.send(data,'updateProfile/'+this.props.user.id,"PUT")

        console.log(response);

        this.setState({isLoading:false})

    }

    render(){

    const { Visible,Title,isFinish,CancelDialog,theme } = this.props;
    // const {name,email} = this.state
    
        return(
            <View>
                <Dialog.Container visible={Visible}>
                    <Dialog.Title>{Title}</Dialog.Title>
                    <Dialog.Description>
                        <View >
                            <TextInput 
                            style={{width:250,height:0,backgroundColor:"#fff"}}
                            label="Votre nom complet"
                            value={this.state.name}
                            onChangeText={(val)=>this.setState({name:val})}
                            />
                             <TextInput 
                            style={{width:250,height:0,backgroundColor:"#fff"}}
                            value={this.state.email}
                            onChangeText={(val)=>this.setState({email:val})}
                            label="Email"
                            />
                            <Button 
                                icon="loading"
                                mode="elevated"
                                loading={this.state.isLoading}
                                disabled={this.state.name.length > 3 ? false: true}
                                onPress={() => this.save()}>
                                Enregistrer
                            </Button>
                        </View>
                    </Dialog.Description>
                    {/* <Dialog.Button label="Fermer" onPress={CancelDialog} /> */}
                </Dialog.Container>    
            </View>
        )

    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(withTheme(CompleteProfile))

const styles =  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    TextInputs:{
      height:50,
      width:300,
      borderRadius:10,
      borderBottomWidth:1,
      borderBottomColor:'#000',
      backgroundColor:"#fff",
      margin:5
    }
})