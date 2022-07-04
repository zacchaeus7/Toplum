import * as React from 'react';
import { StatusBar, StyleSheet, View, ScrollView, BackHandler, Text, Platform } from 'react-native';
import { FAB, Provider, Portal, Dialog, List, Button, Paragraph, withTheme } from 'react-native-paper';
import AppTopBar from '../Components/AppTopBar';
import API from '../API/API';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';

class MainScreen extends React.Component{

  constructor(props){
    super(props);
  }


  componentDidMount(){
  }

  render(){
    const { theme } = this.props;
    return(
      <React.Fragment>
        <StatusBar backgroundColor={theme.colors.primary} />
        <AppTopBar  title="TopLum" icon="account-circle" navigation={this.props.navigation} />
        <HomeScreen navigation={this.props.navigation} />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
    main_container: {
      justifyContent: "center"
    },
  
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 50,
      backgroundColor: "#0000a3"
    },
})

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
    
  }
}

export default connect(mapStateToProps)(withTheme(MainScreen));