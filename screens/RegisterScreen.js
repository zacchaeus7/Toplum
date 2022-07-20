import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import toast from '../Components/Taost.js'
import PhoneInput from "react-native-phone-number-input";
import { ToastAndroid } from 'react-native';
import LocalStorage from "../storage/LocalStorage";
import { connect } from 'react-redux';
import API from '../API/API.js';

class RegisterScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            full_name: '',
            phone: '',
            password: '',
            isLoading:false,
            email:'',
            confirm_password: '',
            check_textInputChange: false,
            secureTextEntry: true,
            confirm_secureTextEntry: true,
            isShowErrorMessage:false
        }
        this.api  = new API();
        this.localStorage = new LocalStorage()
    }

     textInputChange = (val) => {
        if( val.length !== 0 ) {
            this.setState({
                full_name: val,
                check_textInputChange: true
            });
        } else {
            this.setState({
                full_name: val,
                check_textInputChange: false
            });
        }
    }

    textPhonChange = (val) => {
        if(val.length != 0){
            this.setState({
                phone:val,
                check_textInputChange:true,
                isShowErrorMessage:false
            })
        }else{
            this.setState({
                phone:val,
                check_textInputChange:false,
                isShowErrorMessage:true
            })
        }
    }

    textEmailChange = (val) => {
        
        if(val.length !== 0){
            this.setState({
                email:val,
                check_textInputChange:true,
                
            })
            
        }else{
            this.setState({
                email:val,
                check_textInputChange:false,
                isShowErrorMessage:true
            })
        }
    }


    register = async () =>{

        const userData = {
            name: this.state.full_name,
            phone: this.state.phone,
            email:this.state.email,
            password: "12345678"
        }

        if(this.state.full_name.trim() && this.state.phone.trim() && this.state.email){

            
            this.setState({ isLoading:true})

            const response = await this.api.send(userData, 'users/register');

            this.setState({isLoading: false});
            
            if(response.status == 1){
                
                let user = {...response.user, ...this.props.user};

                console.log(response)
              
                const action = { type: "REGISTER_USER", value:  user};

                this.props.dispatch(action);

                 await this.localStorage.storeData("toplum_user_data",user)

                this.props.navigation.navigate("CheckNumber",{user:user});

            }else{
                toast({message: "Une erreur s'est produite"});
            }

        }else{

            this.setState({isShowErrorMessage:true})

        }
    }

   render(){

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fd8500' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>INSCRIPTION</Text>
          </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={styles.footer}
          >
            <ScrollView>
              <View style={styles.action}>
                  
                  <PhoneInput 
                      placeholder="téléphone"
                      defaultValue={this.state.phone}
                      defaultCode="CD"
                      textInputStyle={{height:40,borderRadius:10}}
                      onChangeText={(val) => this.textPhonChange(val)}
                      withShadow
                      // autoFocus
                      withDarkTheme
                    
                  />
                
              </View>
             
              <View style={styles.action}>
                  <FontAwesome 
                      name="user-o"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput 
                      placeholder="Nom complet"
                      style={styles.textInput}
                      autoCapitalize="none"
                      value={this.state.full_name}
                      onChangeText={(val) => this.textInputChange(val)}
                  />
                  {this.state.check_textInputChange ? 
                  <Animatable.View
                      animation="bounceIn"
                  >
                      <Feather 
                          name="check-circle"
                          color="green"
                          size={20}
                      />
                  </Animatable.View>
                  : null}
              </View>
              <View style={styles.action}>
                  <FontAwesome 
                      name="envelope-o"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput 
                      placeholder="Email"
                      style={styles.textInput}
                      autoCapitalize="none"
                      value={this.state.email}
                      onChangeText={(val) => this.textEmailChange(val)}
                  />
                  {this.state.check_textInputChange ? 
                  <Animatable.View
                      animation="bounceIn"
                  >
                      <Feather 
                          name="check-circle"
                          color="green"
                          size={20}
                      />
                  </Animatable.View>
                  : null}
              </View>
  
               {this.state.isShowErrorMessage ? <Text style={{color:'#f00'}}>Veuillez Remplir correctement les champs</Text> : <Text></Text>}       
             
              <View style={styles.textPrivate}>
                  <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "} Conformément à nos conditions d'utilisation et à notre politique de confidentialité </Text>

              </View>
              <View style={styles.button}>
                <ActivityIndicator animating={this.state.isLoading} color="#fd8500" size='large'/>

                  <TouchableOpacity
                      style={styles.signIn}
                      onPress={()=>this.register()}
                  >
                  <LinearGradient
                      colors={['#fd8500', '#ccae43']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>S'inscrire</Text>
                  </LinearGradient>
                  </TouchableOpacity>
                  <View style={{flexDirection:'row',marginTop:50}}>
                    <Text style={{color:"#000"}}>Vous avez dejà un compte ? </Text>  
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}> 
                        <Text style={{backgroundColor:"#fd8500",color:"black",borderRadius:5,fontStyle:'italic',color:"#ffffff"}}>Authentification </Text> 
                    </TouchableOpacity> 
                </View>
                  
              </View>
              </ScrollView>
          </Animatable.View>
        </View>
      );
   }
};

const mapStateToProps = (state)=>{

    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(RegisterScreen) ;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fd8500'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 5 : 7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor:"#fd8500",
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf:'center',
        fontSize: 30
    },
    
    action: {
        flexDirection: 'row',
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        borderBottomColor:"#fd8500",
        borderBottomWidth:2,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        
    },
    signIn: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        color:"#000",
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: '#ccc'
    }
  });
