import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MaintabScreen from '../screens/MainTabScreen';
import CommnunityScreen from '../screens/CommunityScreen';
import DetailsCommunityScreen from "../screens/DetailsCommunityScreen";
import CommunityTabScreen from "../screens/CommunityTabScreen";
import LauncherScreen from "../screens/LauncherScreen";
import CheckNumberScreen from "../screens/CheckNumberScreen";
import HomeScreen from "../screens/HomeScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import { withTheme } from "react-native-paper";
import MainScreen from "../screens/MainScreen";
import AccueilCommunitySCreen from "../screens/AccueilCommunityScreen";
import JoinCommunityScreen from "../screens/JoinCommunityScreen";
import AccountScreen from "../screens/AccountScreen";

const RootStack = createNativeStackNavigator();

class RootStackScreen extends React.Component{


    render(){
        const { theme } = this.props;
        return(
            <RootStack.Navigator screenOptions={{ headerShown: false}}  headerMode="None">

                <RootStack.Screen name="Splash"  component={SplashScreen} />
                <RootStack.Screen name="Launcher" component={LauncherScreen} />
                <RootStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
                <RootStack.Screen name="MainScreen" component={MainScreen} />
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="CheckNumber" component={CheckNumberScreen} />
                <RootStack.Screen name="Register" component={RegisterScreen} />
                <RootStack.Screen name="Home" component={HomeScreen} />
                <RootStack.Screen name="Community" component={CommnunityScreen} options={{headerShown:true,title:"Toutes les communautés",headerStyle:{backgroundColor:"#115f9b"} }} />
                <RootStack.Screen name="DetailCommunity" component={DetailsCommunityScreen} options={{headerShown:true,title:"UNILU",headerStyle:{backgroundColor:"#115f9b"} }} />
                <RootStack.Screen name="CommunityTab" component={CommunityTabScreen} options={{headerShown:true,title:"Community",headerStyle:{backgroundColor:theme.colors.primary},headerTintColor:"#fff" }} />
                <RootStack.Screen name="AccueilCommunity" component={AccueilCommunitySCreen} />
                <RootStack.Screen name="JoinCommunityScreen" component={JoinCommunityScreen} />
                <RootStack.Screen name="AccountScreen" component={AccountScreen} />
            </RootStack.Navigator>
        );
    }
}

export default withTheme(RootStackScreen);