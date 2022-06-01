import React from "react";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import API from "../API/API";

class LoginScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            phone:'',
            password:'',
            check_Inputchange:false,
            secureTextEntry:true
    
        },
        this.api = new API();
    }
    textInputChange = (val)=>{

        if(val.length != 0){
            this.setState({
                phone:val,
                check_Inputchange:true
            })
        }else{
            this.setState({
              
                phone:val,
                check_Inputchange:false
            })
        }
    }

    handlePasswordChange = (val) => {
        this.setState({
            password: val
        });
    }

    log_user = async () =>{
     
      if(this.state.phone.trim() && this.state.password.trim()){

        const userData = {
            phone:this.state.phone,
            password:this.state.password
        }
    
        const response = await this.api.send(userData,'phone_login');


        if(response.status == 1){

            console.log(response);

            this.props.navigation.navigate("CheckNumber")
        }
        else{

           alert("Checker vos identifiants de connexion svp!");
        }
     
      }else{

        alert("Remplir correctement les champs")
       
      }
        
    }

    render(){
        return(
        
            <Animatable.View
            animation="fadeInRight"
            duration={1500}
            style={styles.container}>

               <View style={styles.header}>
                    <Text style={styles.text_header}>Connectez-Vous</Text>
               </View>
                <View style={styles.footer}>
                    <Text style={styles.text_footer}>Email Or Phone</Text>
                    <View style={styles.action}>

                    <FontAwesome 
                    name="user-o"
                    color="#115f9b"
                    />
                    <TextInput
                        placeholder="Votre nom d'utilisateur"
                        style={styles.textInput}
                        value={this.state.phone}
                        autoCapitalize="none"
                        onChangeText={(val)=>this.textInputChange(val)}
                    />
                    {this.state.check_Inputchange ?
                    <Feather 
                        name="check-circle"
                        color="#115f9b"
                        size={20}
                    />
                    :null}
                </View>

<                   Text style={styles.text_footer}>Mot de passe</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                        name="lock"
                        color="#115f9b"
                        />
                        <TextInput
                            placeholder="Taper le mot de passe"
                            value={this.state.password}
                            secureTextEntry={true}
                            style={styles.textInput}
                            onChangeText={(val) => this.handlePasswordChange(val)}
                        />
                       
                        <Feather 
                            name="eye-off"
                            color="#115f9b"
                            size={20}
                        />
                   
                    </View>

                    <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => this.props.navigation.navigate("Home")}
                >
                <LinearGradient
                    colors={['#115f9b', '#115f9b']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Se Connecter</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register')}
                    style={[styles.signIn, {
                        borderColor: '#115f9b',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#115f9b'
                    }]}>S'enregistrer</Text>
                </TouchableOpacity>
            </View>
               </View>
            </Animatable.View>
            
        );
    }
}

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
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 20
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        //flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        borderBottomColor:"#115f9b",
        borderBottomWidth:2,
        color: '#05375ka',
        width:"90%"
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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
    }
  });
export default LoginScreen;