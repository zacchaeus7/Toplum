import React from "react";
import LocalStorage from "../storage/LocalStorage";
import { 
    View,
    Platform,
    StyleSheet ,
    ActivityIndicator,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';
import { withTheme, Card, Button, IconButton, Text, Title, Paragraph, List, Divider } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux'; 
import API from "../API/API";

class AccountScreen extends React.Component{

  constructor(props){

    super(props);

    this.state = {
      profile : null,
      profileData:{}
    //   phone:'',
    //   password:'',
    //   check_Inputchange:false,
    //   isLoading:false,
    //   isShow:false,
    //   MessageError:"",
    //   activeStep: 0,

    };

    this.api = new API();
    
    this.localStorage = new LocalStorage();
  }

  componentDidMount(){console.log(this.props.user)}

  oPenGallery(){
       
    ImagePicker.openPicker({
        width: 300,
        height: 400,
         cropping: true,
      }).then(Images => {
        //  console.log(Images);
         this.setState({profile:Images.path})
         this.setState({profileData:Images})
          //  console.log(this.state.profileData)
      });

      this.uploadProfile()

}

componentDidUpdate(){
  // console.log(this.state.profileData.path);
}

uploadProfile = async()=>{

    let URL = this.api.serverUrl+"/update_profile"

    var name =Date.now();
  const formData = new FormData();
  formData.append('file',{
        uri:this.state.profileData.path,
        type:this.state.profileData.mime,
        name:this.state.profileData.path
        
  })

  this.api.createFormData(formData)

  // let res = await fetch(
  //   URL,
  //   {
  //     method: 'post',
  //     headers: {
  //         'Content-Type': 'multipart/form-data',
  //     },
  //     body: formData,
  //   }
  // );
    //  let responseJson = await res.json();

    console.log(URL);

}


  render(){

    const { theme, navigation } = this.props;

    return(
      <View style={styles(theme).container}>
        <StatusBar backgroundColor={theme.colors.primary} /> 
          
        <Card style={styles(theme).card}>
          {/* <ImageBackground 
            source={require('../assets/images/bg/onboarding.jpg')}
            style={{ width: "100%", height: "106%", resizeMode: 'cover' }}> */}

            <View style={styles(theme).header}>
              <View>
                <IconButton
                  icon="arrow-left"
                  color={theme.colors.white}
                  size={25}
                  style={{backgroundColor: theme.colors.secondary, padding: 5}}
                  onPress={() => this.props.navigation.goBack()}
                />
              </View>
                <View>
                  <Title style={{ color: theme.colors.white }}>{this.props.user.name}</Title>
                  <Paragraph style={{ color: theme.colors.black, }}>{this.props.user.phone}</Paragraph>
                </View>
            </View>
           <View style={{flexDirection:'row',marginVertical:10}}>
              {this.state.profile == null ?
              <TouchableOpacity
                onPress={()=>this.oPenGallery()}
              >
                  <EvilIcons 
                    name="user" 
                    size={150} 
                  />
                </TouchableOpacity>
                :
                <TouchableOpacity 
                  onPress={()=>this.oPenGallery()}
                  >
                  <Image
                        source={{ uri: this.state.profile }}
                        // loadingIndicatorSource={required('../assets/')}
                        style={{width:80,height:80,borderRadius:40,marginLeft:10}}
                    />
                </TouchableOpacity>
              }

               <View>
                    <Text style={{paddingTop:30,marginLeft:5}}>{this.props.user.name}</Text>
                
               </View>
           </View>
            <View style={{ padding: 13,borderBottomColor:"#ccc",borderWidth:1 }}>
              <List.Item
                title="Informations Personnelles"
                left={props => <List.Icon {...props} icon="account-edit" color={theme.colors.primary} />}
              />
              <Divider />
              <List.Item
                title="Elèves/Etudiants"
                left={props => <List.Icon {...props} icon="account-multiple" color={theme.colors.primary} />}
                onPress={() => this.props.navigation.navigate("NewStudentScreen")}
              />
              <Divider />
              <List.Item
                title="Notifications"
                left={props => <List.Icon {...props} icon="bell" color={theme.colors.primary} />}
              />
              <Divider />
              <List.Item
                title="Mes Communautés"
                left={props => <List.Icon {...props} icon="bell" color={theme.colors.primary} />}
              />
              <Divider />
              <List.Item
                title="Mes paiements"
                left={props => <List.Icon {...props} icon="cash-multiple" color={theme.colors.primary} />}
              />
              <Divider />
            </View>
          {/* </ImageBackground> */}
        </Card>
        <Text style={ styles(theme).appNameText }>TOPLUM</Text>
      </View>
    );
  }
}

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: theme.colors.primary,
    
  },
  bgImage: {
    width: "100%", 
    height: "105%",
  },
  card: {
    borderBottomLeftRadius: 22, 
    borderBottomRightRadius: 22,
    height: "92%",
    overflow: 'hidden'
  },
  header: {
    width: "100%",
    height: 80,
    borderBottomColor:"#ccc",
    borderBottomWidth:0.5,
    backgroundColor: theme.colors.primary,
    flexDirection: "row"
  },

  appNameText: {
    color: theme.colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 25
  },
  illustrationImage:{
    width:"30%",
    height:100,
    resizeMode: "contain",
  },

});

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
};

export default connect(mapStateToProps)(withTheme(AccountScreen));