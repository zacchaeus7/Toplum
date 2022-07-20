import React from "react";
import { View, StyleSheet,ActivityIndicator,Text  } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import { connect } from 'react-redux';
import API from "../API/API";
import LocalStorage from "../storage/LocalStorage";
class CheckPhoneNumber extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            isLoading:false
        }

         this.api = new API()
         this.localStorage = new LocalStorage()
    }

    getCode = async (code)=>{     

        this.setState({isLoading:true})

        const response = await this.api.getData("otpVerfication/"+code)

        if(response.status == 1){

            let user = {...response.user, ...this.props.user};

            const action = { type: "REGISTER_USER", value:  user};

            this.props.dispatch(action);

           await this.localStorage.storeData("toplum_user_data",user)

            this.props.navigation.navigate("MainScreen")

        }else{
            alert("Code de Incorrect")
        }

        this.setState({isLoading:false})
        
    }

    componentDidMount(){
        console.log(this.props.user.otp_verfication)
    }
     
    render(){

        return(
            
            <View style={styles.container}>
        
            <Text style={styles.title}>TopLum</Text>
            <View style={styles.header}>
                <Text style={{alignSelf:'center'}}>Code de confirmation envoy2 au {this.props.route.params.user.phone}</Text>
            </View>
            <View style={styles.footer}>

                <CodeInput
                        ref="codeInputRef2"
                        // secureTextEntry
                        compareWithCode='AsDW2'
                        activeColor='#f88302'
                        inactiveColor='#000'
                        autoFocus={false}
                        ignoreCase={true}
                        inputPosition='center'
                        size={50}
                        onFulfill={(isValid,code) => this.getCode(code)}
                        containerStyle={{ marginTop: 30 }}
                        codeInputStyle={{ borderWidth: 1.5 }}
                    />
                     <ActivityIndicator animating={this.state.isLoading} color="#fd8500" size='large'/>

            </View>
            
        </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: '#fff',
        color:"#fff"
      },
 
    header: {
        flex: 2,
        justifyContent: 'flex-end',
        // backgroundColor:'#f88302',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#ddd',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
  title:{
    fontSize:30,
    alignSelf:'center'
  }

  
});

const mapStateToProps = (state) =>{
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps)(CheckPhoneNumber);