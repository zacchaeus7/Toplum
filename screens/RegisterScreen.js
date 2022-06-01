import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { ToastAndroid } from 'react-native';
import API from '../API/API';

class RegisterScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            full_name: '',
            phone: '',
            password: '',
            confirm_password: '',
            check_textInputChange: false,
            secureTextEntry: true,
            confirm_secureTextEntry: true,
        }
        this.api  = new API()
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
        if(val.length !== 0){
            this.setState({
                phone:val,
                check_textInputChange:true
            })
        }else{
            this.setState({
                phone:val,
                check_textInputChange:false
            })
        }
    }

     handlePasswordChange = (val) => {
        this.setState({
            password: val
        });
    }

     updateSecureTextEntry = () => {
        this.setState({
           
            secureTextEntry: !this.state.secureTextEntry
        });
    }

     updateConfirmSecureTextEntry = () => {
        this.setState({
         
            confirm_secureTextEntry: !this.state.confirm_secureTextEntry
        });
    }

    register = async () =>{

        const userData = {
            full_name: this.state.full_name,
            phone:  this.state.phone,
            password: this.state.password
        }


        if(this.state.full_name.trim() && this.state.phone.trim() && this.state.password.trim()){

            const response = await this.api.send(userData, 'register');

            //this.setState({isLoading: false});
            
            if(response.status == 1){
                
                let user = {...response.user, ...this.props.user};
                user.is_checked = false;
    
                // const action = { type: "REGISTER_USER", value:  user};
                // this.props.dispatch(action);
    
                this.props.navigation.navigate("CheckNumber", {newPhone: ''});
            }else{
                toast({message: "Une erreur s'est produite"});
            }

        }else{

            // this.setState({isLoading: false});
            alert("vide")
            //toast({message: "Veuillez renseigner le nom ou le téléphone svp!"});

        }
    }

   render(){
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>Creer un compte</Text>
          </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={styles.footer}
          >
            <ScrollView>
              <Text style={styles.text_footer}>Nom Complet </Text>
              <View style={styles.action}>
                  <FontAwesome 
                      name="user-o"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput 
                      placeholder="Votre nom complet"
                      style={styles.textInput}
                      value={this.state.full_name}
                      autoCapitalize="none"
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
              <Text style={styles.text_footer}>Téléphone </Text>
              <View style={styles.action}>
                  <FontAwesome 
                      name="phone"
                      color="#115f9b"
                      size={20}
                  />
                  <TextInput 
                      placeholder="Votre numero de téléphone"
                      style={styles.textInput}
                      autoCapitalize="none"
                      value={this.state.phone}
                      onChangeText={(val) => this.textPhonChange(val)}
                  />
                  {this.state.check_textInputChange ? 
                  <Animatable.View
                      animation="bounceIn"
                  >
                      <Feather 
                          name="check-circle"
                          color="#115f9b"
                          size={20}
                      />
                  </Animatable.View>
                  : null}
              </View>
  
              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Password</Text>
              <View style={styles.action}>
                  <Feather 
                      name="lock"
                      color="#115f9b"
                      size={20}
                  />
                  <TextInput 
                      placeholder="Your Password"
                      secureTextEntry={this.state.secureTextEntry ? true : false}
                      style={styles.textInput}
                      value={this.state.password}
                      autoCapitalize="none"
                      onChangeText={(val) => this.handlePasswordChange(val)}
                  />
                  <TouchableOpacity
                      onPress={this.updateSecureTextEntry}
                  >
                      {this.state.secureTextEntry ? 
                      <Feather 
                          name="eye-off"
                          color="#115f9b"
                          size={20}
                      />
                      :
                      <Feather 
                          name="eye"
                          color="#115f9b"
                          size={20}
                      />
                      }
                  </TouchableOpacity>
              </View>
  
             
              <View style={styles.textPrivate}>
                  <Text style={styles.color_textPrivate}>
                  Conformément à nos 
                  </Text>
                  <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}conditions d'utilisation </Text>
                  <Text style={styles.color_textPrivate}>{" "}et</Text>
                  <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}à notre politique de confidentialité</Text>
              </View>
              <View style={styles.button}>
                  <TouchableOpacity
                      style={styles.signIn}
                      onPress={()=>this.register()}
                  >
                  <LinearGradient
                      colors={['#115f9b', '#115f9b']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Creer</Text>
                  </LinearGradient>
                  </TouchableOpacity>
  
                  <TouchableOpacity
                      onPress={() => this.props.navigation.goBack()}
                      style={[styles.signIn, {
                          borderColor: '#115f9b',
                          borderWidth: 1,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#115f9b'
                      }]}>Se connecter</Text>
                  </TouchableOpacity>
              </View>
              </ScrollView>
          </Animatable.View>
        </View>
      );
   }
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#115f9b'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#115f9b',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        borderBottomColor:"#115f9b",
        borderBottomWidth:2,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
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
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: '#115f9b'
    }
  });
