import React from "react";
import { StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextInput,Button,Text,ActivityIndicator, withTheme } from "react-native-paper";

class Confirm extends React.Component{

    constructor(props){
        super(props)

    }

    render(){

    const { Visible,Title,isFinish,CancelDialog,theme } = this.props;
        
        return(
            <View>
                <Dialog.Container visible={Visible}>
                    <Dialog.Title>{Title}</Dialog.Title>
                    <Dialog.Description>
                        <View >
                            {!isFinish ? 
                            <ActivityIndicator animating={true} color={theme.colors.blue} size="large" style={{marginLeft:85}}/>
                                :
                                <FontAwesome5 
                                    name="check-double"
                                    size={100}
                                    color={theme.colors.blue}
                                />
                            }
                        </View>
                    </Dialog.Description>
                    {!isFinish ? 
                    <Text></Text>
                    :<Dialog.Button label="Fermer" onPress={CancelDialog} />}
                </Dialog.Container>    
            </View>
        )

    }
}

export default withTheme(Confirm)

const styles =  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    TextInputs:{
      height:50,
      width:300,
      borderRadius:10,
      borderBottomWidth:1,
      borderBottomColor:'#000',
      backgroundColor:"#fff",
      margin:5
    }
})