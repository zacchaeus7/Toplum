import React from "react";
import Modal from "react-native-modal";
import { View,Image,TouchableOpacity,ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import API from "../../API/API";

class AlbumModal extends React.Component {

    constructor(props){
        super(props)

        this.state={
            avatarData:[]
        }

        this.api = new API();
    }

    oPenGallery(){
       
        ImagePicker.openPicker({
            width: 300,
            height: 400,
             multiple: true,
             cropping: true,
          }).then(Images => {
            //  console.log(Images);
             this.setState({avatar:Images.path})
             this.setState({avatarData:Images});
    
              console.log(this.state.avatarData)
          });
    
    }

    uploadOnAlbumm = async()=>{

        let URL = "http://192.168.1.155:8000/api/add_on_community_album"
        var name =Date.now();
       const formData = new FormData();

        this.state.avatarData.map((image,index)=>{

            formData.append('file',{

             uri:image.path,
             type:image.mime,
             name:image.path
             
            }

        )})
        

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
            let responseJson = await res.text();
    
        console.log(responseJson);

        //  console.log(formData);

    }

  componentDidMount(){
    console.log(this.state.avatarData)
  }
  componentDidUpdate(){
    // console.log(this.state.avatarData)
  }
  render(){

    const {isVisible,isCancel,currentCommunity} = this.props;

    console.log(currentCommunity)
    return (
      <View>
        <Modal 
          isVisible={isVisible}
          animationIn="slideInUp"
          animationInTiming={1000}
          // coverScreen={true}
          // backdropOpacity={0.5}
          // deviceHeight={0.5}
          style={{ marginVertical: 150,borderTopLeftRadius:10,borderTopRightRadius:10 }}
        >
          <View style={{ flex: 1,backgroundColor:"#fff",width:"100%",alignItems:'center',justifyContent:'center' }}>
            {this.state.avatarData.length  === 0 ? 
            <TouchableOpacity
                onPress={()=>this.oPenGallery()}
            >
                <Ionicons 
                name="ios-cloud-upload-outline" 
                size={200} 
                />
            </TouchableOpacity>

            :
            <ScrollView>
                <View style={{flexDirection:'row'}}>
                    {this.state.avatarData.map((image, index) => {
                        return (
                            <View>
                                <Image
                                    source={{ uri: image.path }}
                                    style={{width:120,height:120,paddingTop:10,margin:5}}
                                />
                            </View>
                        );
                    })}
                     
                </View>
                <Button 
                    style={{marginTop:2,backgroundColor:"#000",margin:5,borderRadius:10}}
                    icon="loading"
                    mode="elevated"
                    // loading={this.state.isLoading}
                    // disabled={this.state.name.length > 3 ? false: true}
                    onPress={() => this.uploadOnAlbumm()}>
                    Poster sur l'album
                </Button>
            </ScrollView>
            }
           
          </View>
        </Modal>
      </View>
    );
  }
  }

  export default AlbumModal