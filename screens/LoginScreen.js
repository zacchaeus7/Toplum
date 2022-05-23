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

class LoginScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            email:'',
            password:'',
            check_Inputchange:false,
            secureTextEntry:true
    
        }
    }
    textInputChange = (val)=>{
        if(val.length != 0){
            this.setState({
               
                email:val,
                check_Inputchange:true
            })
        }else{
            this.setState({
              
                email:val,
                check_Inputchange:false
            })
        }
    }

    render(){
        return(
        
            <View style={styles.container}>

               <View style={styles.header}>
                    <Text style={styles.text_header}>Connectez-Vous</Text>
               </View>
                <View style={styles.footer}>
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>

                    <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    />
                    <TextInput
                        placeholder="Votre nom d'utilisateur"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>this.textInputChange(val)}
                    />
                    {this.state.check_Inputchange ?
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                    :null}
                </View>

<                   Text style={styles.text_footer}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                        name="lock"
                        color="#05375a"
                        />
                        <TextInput
                            placeholder="Votre nom d'utilisateur"
                            secureTextEntry={true}
                            style={styles.textInput}
                        />
                       
                        <Feather 
                            name="eye-off"
                            color="green"
                            size={20}
                        />
                   
                    </View>

                    <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => this.props.navigation.navigate("Home")}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Connexion</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>S'enregistrer</Text>
                </TouchableOpacity>
            </View>
               </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
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
        borderBottomColor:"red",
        color: '#05375ka',
        width:"40%"
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