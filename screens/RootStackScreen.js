import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const RootStack = createNativeStackNavigator();

class RootStackScreen extends React.Component{


    render(){
        return(
            <RootStack.Navigator screenOptions={{ headerShown: false}}  headerMode="None">
                <RootStack.Screen name="Splash"  component={SplashScreen} />
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="Register" component={RegisterScreen} />
            </RootStack.Navigator>
        );
    }
}

export default RootStackScreen;