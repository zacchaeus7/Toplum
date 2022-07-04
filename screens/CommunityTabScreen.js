import React from "react";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native'
import MemberCommunityScreen from "./MemberCommunityScreen";
import FavoriteCommunityMember from "./FavoriteCommunityMember";
import AlbumCommunityScreen from "./AlbumCommunityScreen";
import ActivityTab from "./activities/ActivityTabScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import FontAweson from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AccueilCommunitySCreen from "./AccueilCommunityScreen";

const Tab = createMaterialTopTabNavigator();

function TestSCreen(){
    return(
        <View>
        <Text>Token</Text>
    </View>
    )
}
function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        backgroundColor: '#fff',
  }
    }}>
      <Tab.Screen name="Accueil" component={AccueilCommunitySCreen} options={{
       tabBarLabel: '',
      tabBarIcon: ({ color, size }) => (
        <Icon name="home" color={color} size={25} />
      ),
    }} />
      <Tab.Screen name="Membres" component={MemberCommunityScreen}
      options={{
        tabBarLabel: '',
       tabBarIcon: ({ color, size }) => (
         <FontAweson name="users" color={color} size={25} />
       ),
     }} />
      <Tab.Screen name="Album" component={AlbumCommunityScreen}
      options={{
        tabBarLabel: '',
       tabBarIcon: ({ color, size }) => (
         <Icon name="albums" color={color} size={25} />
       ),
     }} />
      <Tab.Screen name="Activités" component={ActivityTab}
      options={{
        tabBarLabel: '',
       tabBarIcon: ({ color, size }) => (
        <Feather name="activity" color={color} size={25} />

       ),
     }} />
      <Tab.Screen name="Favorits" component={FavoriteCommunityMember}
      options={{
        tabBarLabel: '',
       tabBarIcon: ({ color, size }) => (
         <MaterialIcons name="favorite" color={color} size={25} />
       ),
     }} />
    </Tab.Navigator>
  );
}

export default MyTabs
