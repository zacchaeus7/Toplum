import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import MaintabScreen from './MainTabScreen';

const RootStack = createNativeStackNavigator();

class RootStackScreen extends React.Component{


    render(){
        return(
            <RootStack.Navigator screenOptions={{ headerShown: false}}  headerMode="None">
                <RootStack.Screen name="Splash"  component={SplashScreen} />
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="Register" component={RegisterScreen} />
                <RootStack.Screen name="Home" component={MaintabScreen} />
            </RootStack.Navigator>
        );
    }
}

export default RootStackScreen;