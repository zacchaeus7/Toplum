import React from "react";
import { View,Text,Dimensions, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { ActivityIndicator, Avatar,IconButton, Button, TextInput } from 'react-native-paper';
// import ImagePicker from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from "react-redux";
import API from "../../API/API";
import Confirm from "../Dialogs/Confirm";

export class AvatarImage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
           avatar : null,
           name:null,
           price:null,
           whatsappPhone:null,
           avatarData:[{}],

           isConfirmModalVivible : false,
           isFinishConfirmModal:false,
           modalTitle:""
        }
        this.onClickAvatar = this.onClickAvatar.bind(this);
        this.api = new API();
    }

    componentDidMount(){
        console.log(this.props.currentCommunity)
    }

    onClickAvatar(){
       
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            freeStyleCropEnabled:true,
            cropperToolbarTitle:"Selectionner l'image",
            enableRotationGesture:true,
            cropperCircleOverlay:true
          }).then(image => {
            console.log(image);
             this.setState({avatar:image.path})
             this.setState({avatarData:image});
          });

    }

    uploadAvatar = async()=>{

        this.setState({isConfirmModalVivible:true,modalTitle:"Article en cours d'ajout..."})

        let URL = "http://192.168.88.10:7000/api/uploadAvatar"
        var name =Date.now();
         const expas = this.state.avatarData.path.split(".")
       const formData = new FormData();
       formData.append('file',{
             uri:this.state.avatarData.path,
             type:this.state.avatarData.mime,
             name:this.state.avatarData.path
             
       })

       formData.append('name',this.state.name); 
       formData.append('whatsapp_phone',this.state.whatsappPhone);
       formData.append('price',this.state.price);
       formData.append('whatsapp_phone',this.state.whatsappPhone);
       formData.append('user_id',this.props.user.id),
       formData.append('community_id',this.props.currentCommunity),

       this.api.createFormData(formData);

       let res = await fetch(
        URL,
        {
          method: 'post',
          headers: {
              'Content-Type': 'multipart/form-data',
          },
          body: formData,
        }
      );
        let responseJson = await res.json();

        if(responseJson.status == 1){

            this.setState({isFinishConfirmModal:true,modalTitle:"Votre article a été ajouté"})
        }

    }

    render () {
        const {theme} = this.props
        return (

            <View style={styles.container}>

                <View style={styles.header}>
                    <IconButton
                        icon="arrow-left"
                        color="#00f"
                        size={20}
                        style={{ paddingTop: 15}}
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Text style={{fontSize:20,paddingTop:10,alignSelf:'center',color:"#00f"}}>Ajouter article Au shop</Text>
                </View>
                <TextInput 
                    style={styles.TextInputsStyles}
                    label="Le nom de l'article(obligatoire)"
                    value={this.state.name}
                    onChangeText={(value)=>this.setState({name:value})}
                />
                <TextInput 
                     style={styles.TextInputsStyles}
                    label="Prix en franc"
                    value={this.state.price}
                    onChangeText={(value)=>this.setState({price:value})}
                    keyboardType="numeric"
                />
                 <TextInput 
                     style={styles.TextInputsStyles}
                    label="Numero whatSapp(optionnel)"
                    value={this.state.whatsappPhone}
                    onChangeText={(value)=>this.setState({whatsappPhone:value})}
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={{margin:1,width:100,height:100}}
                        onPress={()=>this.onClickAvatar()}
                    >
                    {
                        this.state.avatar == null ?
                        <Image 
                            source={require("../../assets/images/icons/select_icon.png")}
                            style={{width:100,height:100}}

                        />:
                        <Image
                            source={{ uri: this.state.avatar }}
                            style={{width:100,height:80,paddingTop:10}}
                        />
                    }
               
               
                </TouchableOpacity>
                <Button 
                    style={{marginTop:2,backgroundColor:"#000",margin:5,borderRadius:10}}
                    icon="loading"
                    mode="elevated"
                    // loading={this.state.isLoading}
                    // disabled={this.state.name.length > 3 ? false: true}
                    onPress={() => this.uploadAvatar()}>
                    Enregistrer
                </Button>

                <Confirm 
                    Visible = {this.state.isConfirmModalVivible}
                    Title = {this.state.modalTitle}
                    isFinish = {this.state.isFinishConfirmModal}
                    CancelDialog = {()=>this.setState({isConfirmModalVivible:false})}
                />
            </View>
           
            
        );
    }
}

const styles = StyleSheet.create({
   
    container:{
        flex:1, 
    },
    header:{
        height:50,
        backgroundColor:"#ccc",
        flexDirection:'row'
    },
    TextInputsStyles:{
        margin:3,
        borderRadius:2,
        height:50,
        backgroundColor:"#fff",
        padding:5
    }

});

const mapStateToProps = (state)=>{
    return {
      user:state.userReducer.user
    }
  }
export default connect(mapStateToProps)(AvatarImage)
