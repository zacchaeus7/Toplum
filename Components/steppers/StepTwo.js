import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme,TextInput,Button } from 'react-native-paper';
import { connect } from 'react-redux';
import Confirm from '../Dialogs/Confirm';

class StepTwo extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      value:null,
      isFocus:false,
        data : [],
        faculty:null,
        activity:null,
        isShowDialog:false,
        isFinish:false,
        Title:"",
    };

  }

  addToUserStateStore(){

    this.setState({isShowDialog:true});

    const community = {

      faculty:this.state.faculty,
      activity:this.state.activity

    }

    setTimeout(() => {
      // this.setState({isShowDialog:false});
      this.setState({isFinish:true});
      this.setState({title:"ENREGISTREMENT REUSSI.."}) 
    },
    
    2000)


   const action = {type:"ADD_USER_TO_COMMUNITY", value:community}

   this.props.dispatch(action);

  }

  CancelDialog(){
   this.setState({isShowDialog:false})
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
        <Confirm 
          Visible={this.state.isShowDialog}
           isFinish={this.state.isFinish}
          Title={this.state.title}
          CancelDialog={()=>this.CancelDialog()}
        />
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