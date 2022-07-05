import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme,TextInput } from 'react-native-paper';

class StepTwo extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      value:null,
      isFocus:false,
        data : []
    };

  }



  render(){
    const { theme } = this.props;

    return (
      <View style={styles(theme).container}>
        <Text style={{flexWrap: 'wrap', alignSelf: 'flex-start', color: theme.colors.primary}}>{this.props.title}</Text>
        <View style={styles(theme).form}>
          <TextInput 
            style={styles(theme).Inputs}
            value={this.state.full_name}
            onChangeText={(value)=>this.setState({full_name:"dsds"})}
            label="FACULTE"
            
          />
          <TextInput 
            style={styles(theme).Inputs}
            label="Autre activité"
            value={this.state.dateIn}
            onChangeText={(value)=>this.setState({dateIn:value})}
          />
        </View>
      </View>
    );
  }
}

const styles = (theme) => StyleSheet.create({

  dropdown: {
    height: 60,
    margin: 20,
    borderColor: 'gray',
    marginTop: 40,
    borderWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 20,
  },

  form:{
    marginVertical:20,
    padding:10,
    marginTop:10
  },
  Inputs:{
    marginVertical:20,
    borderRadius:10,
    borderWidth:1,
    borderColor:theme.colors.primary

  }

});

export default withTheme(StepTwo);