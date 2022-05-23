import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontaWesome from 'react-native-vector-icons/FontAwesome'

import HomeScreen from './HomeScreen';
import NewScreen from './NewScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
//import CommunityScreen from './CommunityScreen';

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ()=> (
      
  <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Activités',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Community',
          tabBarIcon: ({ color, size }) => (
            <FontaWesome name="users" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
)
export default MainTabScreen;

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

const CommunityStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight:'bold'
    }
  }}>
    
      <DetailsStack.Screen name="Details" component={CommunityStackScreen}
      options={{title:'Details'}}
      />

    </DetailsStack.Navigator>
);

