import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, withTheme } from 'react-native-paper';
import { connect } from 'react-redux'

class StepOne extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      value:null,
      isFocus:false,
        data : [],
        full_name:"AMURI KABEMBA ZACHEE",
        dateIn:"2020 -2022"
    };

  }

  getFullName(val){

    if(val.length > 12){

      this.setState({full_name:val})

      const action = {type:"ADD_USER_TO_COMMUNITY",value:this.state.full_name}

      this.props.dispatch(action)

    }
   
  }

  getYears(val){

    if(val.length > 12){

      let val = {val,...val}
      this.setState({dateIn:val})

      const action = {type: "ADD_USER_TO_COMMUNITY",value:this.state.dateIn}

      this.props.dispatch(action)

    }

  }


  componentDidMount(){
    console.log(this.props)


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
            onChangeText={(value)=>this.getFullName(value)}
            label="Votre nom complet"
            
          />
          <TextInput 
            style={styles(theme).Inputs}
            label="Année d'adhesion"
            value={this.state.dateIn}
            onChangeText={(value) =>this.getYears(value)}
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

const mapStateToProps = (state) =>{

  return{
    community: state.joinCommunityReducer
  }
}

export default connect(mapStateToProps)(withTheme(StepOne));