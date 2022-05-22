import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import NewScreen from './NewScreen';
//import CommunityScreen from './CommunityScreen';

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ()=> (
      
  <Tab.Navigator
  initialRouteName="Feed"
  activeColor='#fff'
  
>
  <Tab.Screen
    name="Home"
    component={HomeStackScreen}
    options={{
      tabBarLabel: 'Home',
      tabBarColor: 'Red',
      tabBarIcon: ({ color, size }) => (
        <Icon name="home" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="Notifications"
    component={DetailsStackScreen}
    options={{
      tabBarLabel: 'Updates',
      tabBarColor:'blue',
      tabBarIcon: ({ color, size }) => (
        <Icon name="bell" color={color} size={size} />
      ),
      tabBarBadge: 3,
    }}
  />
  <Tab.Screen
    name="Community"
    component={CommunityStackScreen}
    options={{
      tabBarLabel: 'Community',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
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

