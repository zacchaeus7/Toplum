/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from "./navigations/RootStackScreen";



const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator  initialRouteName='Home' screenOptions={{ headerShown: false}}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}


export default App;
