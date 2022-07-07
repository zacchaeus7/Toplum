import React from "react";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import LocalStorage from "../storage/LocalStorage";
import PhoneInput from "react-native-phone-number-input";


import { 
    View, 
    Text, 
    TouchableOpacity, 
    Platform,
    StyleSheet,
    ActivityIndicator,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux'; 
import API from "../API/API";
import { withTheme } from "react-native-paper";


class LoginScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            phone:'',
            password:'',
            check_Inputchange:false,
            isLoading:false,
            isShow:false,
            MessageError:""
    
        },
       this.api = new API();
        this.localStorage = new LocalStorage()
    }


    textInputChange = (val)=>{

        if(val.length != 0){
            this.setState({
                phone:val,
                check_Inputchange:true,
                isShow:false,
                MessageError:"*Le champs numero de téléphone est obligatoire"
            })
        }else{
            this.setState({
                phone:val,
                check_Inputchange:false,
                isShow:true
            })
        }
    }

   
    log_user = async () =>{
     
      if(this.state.phone.trim()){

        this.setState({ isLoading:true})

        const userData = {
            phone:this.state.phone,
            password:"12345678"
        }
    
        const response = await this.api.send(userData,'login');

        console.log(response);

        if(response.user){
            
            let user = {...response.user, ...this.props.user};

            const action = { type: "REGISTER_USER", value:  user};

            this.props.dispatch(action);

            await this.localStorage.storeData("toplum_user_data",user)

            this.setState({isLoading:false})

             this.props.navigation.navigate("CheckNumber",{user:user})
        }
        else{

            this.setState({isShow:true,MessageError:"Identifiants incorrects",isLoading:false})
        }
     
      }else{

        this.setState({isShow:true,MessageError:"*Champs obligatoire",isLoading:false})
       
         }
        
    }

    render(){

        const { theme } = this.props;
        return(
            <View style={styles(theme).container}>
                  {/* <StatusBar backgroundColor='#fd8500' barStyle="light-content"/> */}
                <Animatable.View
                    animation="fadeInRight"
                    duration={1500}
                    style={styles(theme).container}>
                    <View style={styles(theme).header}>
                            <Text style={styles(theme).text_header}>Connexion</Text>
                    </View>
                        <View style={styles(theme).footer}>
                            <View style={styles(theme).action}>
                                <PhoneInput 
                                    defaultValue={this.state.phone}
                                    defaultCode="CD"
                                    placeholder="Numero téléphone"
                                    textInputStyle={{height:40,borderRadius:10}}
                                    onChangeText={(val)=>this.textInputChange(val)}
                                    withShadow
                                    // autoFocus
                                    withDarkTheme
                                />
                            </View>
                                
                                {this.state.isShow ? <Text style={{color:'#f00'}}>{this.state.MessageError}</Text> : <Text></Text>}

                                <View style={styles(theme).button}>
                                    
                                    <ActivityIndicator animating={this.state.isLoading} color="#fd8500" size='large'/>
                                
                                    <TouchableOpacity
                                        disabled={this.state.isLoading ? true : false} 
                                        onPress={() => this.log_user()}
                                    >
                                    <LinearGradient
                                        colors={['#fd8500', '#fd8500']}
                                        style={styles(theme).signIn}
                                    >
                                        <Text style={[styles.textSign, {color:'#fff'
                                        }]}>Connexion</Text>
                                    
                                    </LinearGradient>
                                    </TouchableOpacity>

                                <View style={{flexDirection:'row',marginTop:50}}>
                                    <Text style={{color:theme.colors.primary}}>Vous n'avez pas de compte ? </Text>  
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Register")}> 
                                        <Text style={{backgroundColor:"#fd8500",fontStyle:'italic',color:"black",borderRadius:5,color:"#fff"}}>Inscription </Text> 
                                    </TouchableOpacity> 
                                </View>
                        
                            </View>
                    </View>
                </Animatable.View>
            </View>
            
        );
    }
}

const styles = (theme)=>StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',
     
    },
    header: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 40
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
        borderBottomColor:"#f88302",
        borderBottomWidth:2,
        color: '#05375a',
        width:"90%"
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {  
        Width: 250,
        
    },
    signIn: {
        
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textSign: {
        fontSize: 18,
        textAlign:'center',
        width:"100%",
        fontWeight: 'bold'
    }
  });

  const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
};
export default connect(mapStateToProps)(withTheme(LoginScreen));