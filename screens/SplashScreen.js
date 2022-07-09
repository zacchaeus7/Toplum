import React from "react";
import { View, ImageBackground,StyleSheet,Image,BackHandler } from 'react-native'
import { Paragraph, ThemeProvider,ActivityIndicator,Text, withTheme } from "react-native-paper";
import { connect } from "react-redux";
import LocalStorage from "../storage/LocalStorage";



 class SplashSCreen extends React.Component{

    constructor(props){

        super(props)

        this.state = {
            isLoading:true
        }

        this.localStorage = new LocalStorage();
    }

    intUserStoredData = async()=>{

        const userData = await this.localStorage.getData("toplum_user_data");

        console.log(userData)

        if(userData){

            const action = { type:"REGISTER_USER", value:userData }

            this.props.dispatch(action)

            this.props.navigation.navigate("MainScreen");
        }
        else{
            this.props.navigation.navigate("OnBoardingScreen"); 
        }
        
    }


    backAction = () => {
        
        BackHandler.exitApp();
        return true;
    }

    componentDidMount(){
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
        setTimeout(() => {
        this.intUserStoredData()},
        5000)
    }


    componentWillUnmount() {
        this.backHandler.remove();
      }

    render(){
     
        const { theme } = this.props;
        return(
            <View>
                <ImageBackground  style= { styles.backgroundImage } source={require('../assets/images/bg/bg1.jpg')} >
                    <Image source={require('../assets/logo.png')} style={styles.logo}/>
                   <Text style={{color:"3000",fontSize:20,fontWeight:'bold'}}>TopLum</Text>
                    {this.state.isLoading ? <ActivityIndicator color={theme.colors.primary} size='large' style={{ position: 'absolute', bottom: 15, left: 0, right: 0 }}/>:'' }

                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
};
export default connect(mapStateToProps)(withTheme(SplashSCreen))

const styles = StyleSheet.create({
    logo:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 170, 
        height: 170,
    },
    backgroundImage:{
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },
    title:{
        fontSize:30,
        color:'#fd8500'
    }

});