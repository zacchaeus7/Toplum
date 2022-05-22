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

    render(){
        return(
        
            <View style={styles.container}>

               <View style={styles.header}>
                    <Text style={styles.text_header}>Bienvenue Sur Toplum!</Text>
               </View>
               <View style={styles.footer}>
                    <Text style={styles.text_footer}>Email</Text>
                    <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    />
                    <TextInput
                        placeholder="Votre nom d'utilisateur"
                        style={styles.textInput}
                    />
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={10}
                    />

<                   Text style={styles.text_footer}>Password</Text>
                    <FontAwesome 
                    name="lock"
                    color="#05375a"
                    />
                    <TextInput
                        placeholder="Votre nom d'utilisateur"
                        style={styles.textInput}
                    />
                    <Feather 
                        name="eye-off"
                        color="green"
                        size={10}
                    />
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
        fontSize: 18
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