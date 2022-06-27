import React from "react";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native'
import HomeScreen from "./HomeScreen";
import MemberCommunityScreen from "./MemberCommunityScreen";
import FavoriteCommunityMember from "./FavoriteCommunityMember";
import AlbumCommunityScreen from "./AlbumCommunityScreen";
import ActivityScreen from "./ActivityScreen";
import ActivityTab from "./activities/ActivityTabScreen";
import MainTabScreen from "./MainTabScreen";

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
    <Tab.Navigator>
      <Tab.Screen name="Membres" component={MemberCommunityScreen} />
      <Tab.Screen name="Album" component={AlbumCommunityScreen} />
      <Tab.Screen name="Activités" component={ActivityTab} />
      <Tab.Screen name="Favorits" component={FavoriteCommunityMember} />
    </Tab.Navigator>
  );
}

export default MyTabs