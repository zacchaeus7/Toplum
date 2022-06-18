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
import { Provider } from 'react-redux';
import RootStackScreen from "./navigations/RootStackScreen";
import { Store } from './store/configStore';



const Drawer = createDrawerNavigator();


class App extends React.Component {
 
  
  render(){
   return (
     <NavigationContainer>
       <Provider store={Store}>
          <RootStackScreen /> 
       </Provider>
     </NavigationContainer>
   );
  }

}


export default App;
