import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import ActivityScreen from '../ActivityScreen';
import ShopScreen from '../ShopScreen';

const Tab = createMaterialBottomTabNavigator();

const ActivityTab = (route,navigation)=>{

  const currentCommunity = route.route.params.currentCommunity;
  return(
    
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#fff' }}
      >
  
      <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color, size }) => (
              <Icon name="basket" color="#14F" size={25} />
            ),
          }}
          initialParams={{currentCommunity: currentCommunity}}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({ color, size }) => (
              <Icon name="book" color="#14F" size={25} />
            ),
          }}
        />
      </Tab.Navigator>
  )
} 
export default ActivityTab;
