import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import ReadMore from 'react-native-read-more-text'
import { color } from 'react-native-reanimated';


class DescriptionCard extends React.Component{

    constructor(props){
        super(props)

    }

    _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={{ marginTop: 5,fontSize:20,fontWeight:'bold'}} onPress={handlePress}>
            Lire Plus
          </Text>
        );
      }
     
      _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={{ marginTop: 5,fontSize:20,fontWeight:'bold'}} onPress={handlePress}>
            Lire moins
          </Text>
        );
      }

      render(){

        const { description } = this.props
        return(
            <View>
                <ReadMore
                numberOfLines={2}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
                onReady={this._handleTextReady}>
                <Text style={styles.cardText}>
                   {description}
              </Text>
            </ReadMore>
            </View>
        )
      }
}

export default DescriptionCard

const styles = StyleSheet.create({

    cardText:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'normal',
        fontFamily:'Roboto',
        // color:'#000'
    }
})