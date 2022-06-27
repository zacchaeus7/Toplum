import React from "react";
import { View, StyleSheet,ActivityIndicator,Text  } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
class CheckPhoneNumber extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isLoading:false
        }

    }

    getCode = (code)=>{     

        this.setState({isLoading:true})
        setTimeout(() => {
            this.props.navigation.navigate("Home");
        },3000)
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

export default CheckPhoneNumber;