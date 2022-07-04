import * as React from 'react';
import { StyleSheet, ScrollView, View, StatusBar, Platform } from 'react-native';
import { Appbar, Badge, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { withTheme } from 'react-native-paper';


class AppTopBar extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    const { theme, navigation,title,icon } = this.props;
    return (
      <View style={{marginTop: -StatusBar.currentHeight + 20}}>
        <Appbar.Header style={{ height: 120 }}>
          <Appbar.Action icon={icon} size={50} onPress={() => console.log("pressed")} />
          {/* <IconButton
            style={{marginTop: 45, marginLeft: -55, backgroundColor: theme.colors.secondary}}
            icon="information-outline"
            size={17}
            color={theme.colors.white}
            onPress={() => navigation.navigate("AccountScreen")}
          /> */}
          <Appbar.Content  title={title}/>
          <Badge style={{ left: "35%", top: "-18%", backgroundColor: "#000", color: "#fff" }}>2</Badge>
          <Appbar.Action  icon="bell-ring" onPress={ () => this.props.navigation.navigate('NotificationsScreen') } />
        </Appbar.Header>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  ringBadge: {
    left: "30%",
    top: "-18%"
  }
})

const mapStateToProps = (state) => {
  return {
    notifications: state.notificationsReducer.notifications
  }
}

export default withTheme(AppTopBar);