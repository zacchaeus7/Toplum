import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from 'react-native-paper';

class StepOne extends React.Component {

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
      <Text>asasa</Text>
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

});

export default withTheme(StepOne);