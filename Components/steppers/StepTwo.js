import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme,TextInput,Button } from 'react-native-paper';
import { connect } from 'react-redux'

class StepTwo extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      value:null,
      isFocus:false,
        data : [],
        faculty:null,
        activity:null
    };

  }

  addToUserStateStore(){

   const community2 = {

    faculty:this.state.faculty,
    activity:this.state.activity

   }


   const action = {type:"ADD_USER_TO_COMMUNITY", value:community2}

   this.props.dispatch(action);

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
            value={this.state.faculty}
            onChangeText={(value)=>this.setState({faculty:value})}
            label="FACULTE"
            
          />
          <TextInput 
            style={styles(theme).Inputs}
            label="Autre activité"
            value={this.state.activity}
            onChangeText={(value)=>this.setState({activity:value})}
          />
           <Button icon="loading"
            style={styles.Button}
            mode="contained"
              onPress={()=>this.addToUserStateStore()}>
            Enregistrer
        </Button>
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

export default connect(mapStateToProps)(withTheme(StepTwo));