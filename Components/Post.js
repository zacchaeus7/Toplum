
import React from "react";
import { ImageBackground } from "react-native";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    TouchableOpacity,
    Text,
    Linking
} from "react-native";
 import { FAB, Paragraph,Card,Title,ActivityIndicator } from 'react-native-paper';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DescriptionCard from "./DescriptionCard";

class Post extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data:[],
            refreshing: true,
            load:true,
        }
    }

    fetchCats() {
        this.setState({ refreshing: true });
        fetch('https://api.thecatapi.com/v1/images/search?limit=30&page=1')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                this.setState({ refreshing: false });
                this.setState({load:false})
            }).catch(e => console.log(e));
    }

    componentDidMount(){
        this.fetchCats();
    }
    renderItemComponent = (data) =>
        <View style={styles.content}>
          <Card mode="outlined">
            <Card.Title title="Zachaeus Kabemba">
            </Card.Title>
            <Card.Content>
              <Title>Fin de la guerre à l'est de la RDC</Title>
              <DescriptionCard />
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>

            <MaterialIcons name="favorite" color="#fd8500"  size={30} />
            <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'http://api.whatsapp.com/send?text=TopLum est pret à répondre à toutes vos préocupations&phone=243974375371?'
                  );
                }}>
              <MaterialIcons name="comment"  size={30} />
                  
              </TouchableOpacity>
            <MaterialIcons name="share"  size={30} />
              {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        
        </View>

        render(){
           return(
            <SafeAreaView style={{marginTop:10}}>
        {this.state.load ?
        <ActivityIndicator size="large" color="#115f9b" />
            :
            <FlatList
            data={this.state.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.ItemSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            numColumns={1}
            ListHeaderComponent={<Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>PUBLICATIONS RECENTES</Text>}
        />
        }
                
               
            </SafeAreaView>
           )
        }
}

export default Post

const styles =  StyleSheet.create({
    container: {
      flex:1,
      width:"100%",
       backgroundColor:"#fff"
    },
    content:{
      flex:1,
       width:"100%",
      padding:3
      // backgroundColor:"#fff"
    },
})