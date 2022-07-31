import React from "react";
import { View,Text,Dimensions, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { ActivityIndicator, Avatar, Button } from 'react-native-paper';
// import ImagePicker from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

export class AvatarImage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
           avatar : null,
           avatarData:[{}]
        }
        this.onClickAvatar = this.onClickAvatar.bind(this);
    }

    componentDidMount(){
        console.log(this.state.avatar)
    }

    onClickAvatar(){
       
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
             this.setState({avatar:image.path})
             this.setState({avatarData:image});
          });
        // launchImageLibrary({
        //     mediaType:"mixed"
        // }, (response)=>{

        //     if(response.didCancel){
        //         console.log("Annulation")
        //     }else if(response.error){
        //         console.log("erreur")
        //     }else{
        //         console.log(response);
        //         //  this.setState({avatar:response.assets[0].fileName})
        //     }
        // })
    }

    uploadAvatar = async()=>{

        let URL = "http://192.168.1.155:8000/api/uploadAvatar"
        var name =Date.now();
        const expas = this.state.avatarData.path.split(".")
       const formData = new FormData();
       formData.append('file',{
             uri:this.state.avatarData.path,
             type:this.state.avatarData.mime,
             name:name+"."+expas[2]
       })

       let res = await fetch(
        URL,
        {
          method: 'post',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );

      let responseJson = await res.json();

      console.log(formData)
     console.log(responseJson)

    }

    render () {
        return (

            <View>
                <TouchableOpacity
                style={{margin:1,width:100,height:100,borderRadius:50}}
                    onPress={()=>this.onClickAvatar()}
                >
                    {
                        this.state.avatar == null ?
                        <Image 
                            source={require("../../assets/images/icons/account_png.png")}
                        />:
                        <Image
                            source={{ uri: this.state.avatar }}
                            style={{width:100,height:100,borderRadius:50}}
                        // source={require("http://192.168.1.155:8000/assets/images/logo/logo_istm.jpg")}
                        />
                    }
               
               
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.uploadAvatar}
                    style={{marginTop:120}}
                    
                >
                    <Text>Soumettre</Text>
                </TouchableOpacity>
            </View>
           
            
        );
    }
}

const styles = StyleSheet.create({
   
});
export default AvatarImage