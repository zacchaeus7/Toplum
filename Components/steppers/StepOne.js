import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput, withTheme } from 'react-native-paper';
import { connect } from 'react-redux'
import Confirm from '../Dialogs/Confirm';

class StepOne extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      value:null,
      isFocus:false,
        data : [],
        full_name:null,
        end_date:null,
        isShowDialog:false,
        isFinish:false,
        title:""
    };

  }

  componentDidMount(){

    // console.log(this.props)

  }


  render(){
    const { theme } = this.props;

    // console.log(this.props)
    return (
      <View style={styles(theme).container}>
        <Text style={{flexWrap: 'wrap', alignSelf: 'flex-start', color: theme.colors.primary}}>{this.props.title}</Text>
        <View style={styles(theme).form}>
          <TextInput 
            style={styles(theme).Inputs}
            value={this.props.community.full_name}
          onChangeText={(val)=> {
            this.setState({ full_name: val });
            this.props.dispatch({type: "ADD_USER_TO_COMMUNITY", value: { full_name: val }});
        }}
            label="Nom complet"
            
          />
          <TextInput 
            style={styles(theme).Inputs}
            label="Date de fin"
            value={this.props.community.end_date}
            onChangeText={(val)=> {
              this.setState({ end_date: val });
              this.props.dispatch({type: "ADD_USER_TO_COMMUNITY", value: { end_date: val }});
          }}
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
  Button:{

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

const mapStateToProps = (state) =>{

  return{
    community: state.joinCommunityReducer.community
  }
}

export default connect(mapStateToProps)(withTheme(StepOne));