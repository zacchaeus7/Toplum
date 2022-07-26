import React from "react";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LocalStorage from "../storage/LocalStorage";
import PhoneInput from "react-native-phone-number-input";
import { 
    View,
    Platform,
    StyleSheet ,
    ActivityIndicator,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native';
import { withTheme, Card, Button,FAB, IconButton, Text, Title, Paragraph } from "react-native-paper";
import { connect } from 'react-redux'; 
import API from "../API/API";
import Stepper from "react-native-stepper-ui";
import StepOne from "../Components/steppers/StepOne";
import StepTwo from "../Components/steppers/StepTwo";
import StepThree from "../Components/steppers/StepThree";
import Confirm from '../Components/Dialogs/Confirm';

const stepOneIllustration = require("../assets/images/illustrations/1.png");
const stepTwoIllustration = require("../assets/images/illustrations/2.jpg");
const stepThreeIllustration = require("../assets/images/illustrations/3.jpg");

class JoinCommunityScreen extends React.Component{

  constructor(props){

    super(props);

    this.state = {
      phone:'',
      password:'',
      check_Inputchange:false,
      isLoading:false,
      isShow:false,
      MessageError:"",
      activeStep: 0,
      illustration: stepOneIllustration,
      msg:null,

      full_name:null,
      end_date:null,
      faculty:null,
      community_id:null,
      user_id:null,

      isShowDialog:false,
      isFinish:false,

    };

    this.api = new API();
    this.localStorage = new LocalStorage();
  }


  onNext = () =>{
    const nextStep = parseInt(this.state.activeStep) + 1;
    this.setState({ activeStep: nextStep });

    switch (nextStep) {
      case 1:
        this.setState({ illustration: stepTwoIllustration });
        break;
    
      case 2:
        this.setState({ illustration: stepThreeIllustration });
        break;
    
      default:
        break;
    }
  }

  onBack = () =>{
    const previousStep = this.state.activeStep - 1;
    this.setState({ activeStep: previousStep });

    switch (previousStep) {
      case 0:
        this.setState({ illustration: stepOneIllustration });
        break;
    
      case 1:
        this.setState({ illustration: stepTwoIllustration });
        break;
    
      default:
        break;
    }
  }

  componentDidMount(){
    console.log(this.props.route.params.currentCommunity.currentCommunity)
  }

  addCommunityMember = async()=>{

     this.setState({isShowDialog:true});
     this.setState({title:"Ajout du membre encours..."}) 

  const data = {
       full_name:this.props.community.full_name,
       end_date:this.props.community.end_date,
       faculty:this.props.community.faculty,
       ACTIVITY:this.props.community.activity,
       community_id:this.props.route.params.currentCommunity.currentCommunity,
       user_id:this.props.user.id
  }

   const response = await this.api.send(data,"addMemberToCommunity")

   console.log(response)

    if(response.status == 1){
      setTimeout(() => {
        // this.setState({isShowDialog:false});
        this.setState({isFinish:true});  
        this.setState({title:response.message}) 
         

      },
      
      2000)
    }
   
  }

  CancelDialog(){
    this.setState({isShowDialog:false})
    this.props.navigation.navigate("CommunityTab");
   }

  render(){

    const { theme, navigation } = this.props;

    return(
      <View style={styles(theme).container}>
        <StatusBar backgroundColor={theme.colors.primary} /> 
          
        <Card style={styles(theme).card}>
          <ImageBackground 
            source={require('../assets/images/bg/onboarding.jpg')}
            style={{ width: "100%", height: "106%", resizeMode: 'cover' }}>

            <View style={styles(theme).header}>
              <View>
                <IconButton
                  icon="cash-plus"
                  color={theme.colors.white}
                  size={25}
                  style={{backgroundColor: theme.colors.secondary, padding: 5}}
                  onPress={() => this.props.navigation.goBack()}
                />
              </View>
                <View>
                  <Title style={{ color: theme.colors.black }}>Rejoindre la communauté</Title>
                  <Paragraph style={{ color: "#93A1CD" }}>Lorem ipsum dolor sum quntu dolor sum dolors</Paragraph>
                </View>
            </View>
            <Image 
              style={styles(theme).illustrationImage}
              source={this.state.illustration}
            />
            <View style={{ padding: 13 }}>
          <Text style={{color:"#00f"}}>{this.state.msg ? this.state.msg : ''}</Text>
              
              <Stepper
                active={this.state.activeStep}
                content={stepperContent}
                onNext={() => this.onNext()}
                onBack={() => this.onBack()}
                onFinish={() => this.addCommunityMember()}
                stepStyle={{backgroundColor: theme.colors.secondary, width: 30, height: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center', opacity: 1}}
                buttonStyle={{ padding: 10,width:100,marginTop:20, borderRadius: 4, marginRight: 150, backgroundColor: theme.colors.secondary}}
              />
            </View>
          </ImageBackground>
        </Card>
        <Confirm 
          Visible={this.state.isShowDialog}
           isFinish={this.state.isFinish}
          Title={this.state.title}
          CancelDialog={()=>this.CancelDialog()}
        />
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
    backgroundColor: theme.colors.primary,
    flexDirection: "row"
  },

  appNameText: {
    color: "#000",
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 25
  },
  illustrationImage:{
    width:"100%",
    height:150,
    resizeMode: "cover"
  },

});

const stepperContent = [
  <StepOne title="INFORMATIONS PERSONNELLES" />,
  <StepTwo title="DEUXIEME ETAPE" />,
  <StepThree title="TROISIEME ETAPE" />,
];

const mapStateToProps = (state) =>{

  return{
    community: state.joinCommunityReducer.community,
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(withTheme(JoinCommunityScreen));