/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import HomeScreen from './screens/HomeScreen';
import NewScreen from './screens/NewScreen';

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight:'bold'
      }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen}
        options={{
          title:'Overview',
          
      }}
        />
      </HomeStack.Navigator>


);

const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight:'bold'
      }
    }}>
      
        <DetailsStack.Screen name="Details" component={NewScreen}
        options={{title:'Details'}}
        />
  
      </DetailsStack.Navigator>
  );

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
      {/* <MainTabScreen/> */}
    </NavigationContainer>
  );
}


export default App;
