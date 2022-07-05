/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
 import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
 import { Provider as ReduxProvider } from 'react-redux';
 import { Store } from './store/configStore';
 import RootStackScreen from './navigations/RootStackScreen';
 import merge from 'deepmerge';
 import { Appearance } from 'react-native';
 
 const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
 const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
  
 function App(){
 
   const colorScheme = Appearance.getColorScheme();
   const isDarkMode = colorScheme === 'dark' ? true : false;
   const [isThemeDark, setIsThemeDark] = React.useState(isDarkMode);
 
   let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
 
   theme = {
     ...theme,
     roundness: 2,
     colors: {
       ...theme.colors,
       primary: '#fd8500',
       secondary: '#000',
       accent: '#F77F41',
       white: '#fff',
       black:"#000"
     },
   };
   
   return (
     <PaperProvider theme={theme}>
       <ReduxProvider store={Store}>
         <NavigationContainer theme={theme}>
           <RootStackScreen theme={theme}/>
         </NavigationContainer>
       </ReduxProvider>
     </PaperProvider>
   );
 }
 export default App;