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

const RootStack = createNativeStackNavigator();

class RootStackScreen extends React.Component{


    render(){
        return(
            <RootStack.Navigator screenOptions={{ headerShown: false}}  headerMode="None">

                <RootStack.Screen name="Splash"  component={SplashScreen} />
                <RootStack.Screen name="Launcher" component={LauncherScreen} />
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="CheckNumber" component={CheckNumberScreen} />
                <RootStack.Screen name="Register" component={RegisterScreen} />
                <RootStack.Screen name="Home" component={HomeScreen}  options={{ headerShown: true, title:"Toplum", headerStyle: { backgroundColor: '#D492A9'},headerTintColor:"#fff",headerTitleAlign: 'center',}} />
                <RootStack.Screen name="Community" component={CommnunityScreen} options={{headerShown:true,title:"Toutes les communautés",headerStyle:{backgroundColor:"#115f9b"} }} />
                <RootStack.Screen name="DetailCommunity" component={DetailsCommunityScreen} options={{headerShown:true,title:"UNILU",headerStyle:{backgroundColor:"#115f9b"} }} />
                <RootStack.Screen name="CommunityTab" component={CommunityTabScreen} options={{headerShown:true,title:"TopLum",headerStyle:{backgroundColor:"#D492A9"},headerTintColor:"#fff" }} />

            </RootStack.Navigator>
        );
    }
}

export default RootStackScreen;