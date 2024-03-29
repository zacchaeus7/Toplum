import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { FAB } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import AlbumModal from "../Components/Modals/AlbumModal";

export default class AlbumCommunityScreen extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
            isModaVisible:false,
          
        }
    }

    componentDidMount() {
        this.fetchCats();
       
    }

    componentDidUpdate(){
      console.log(this.state.avatarData)
    }

    fetchCats() {
        this.setState({ refreshing: true });
        fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                this.setState({ refreshing: false });
            }).catch(e => console.log(e));
    }

    renderItemComponent = (data) =>
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{ uri: data.item.url }} />
        </TouchableOpacity>

    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
    }

    showModal(){
      this.setState({isModalShow:true})
  }

 

    render() {
      return (
        <SafeAreaView>
          <FlatList
            data={this.state.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.ItemSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            //  numColumns={2}
          />
          <FAB
            icon="camera"
            style={styles.fab}
            onPress={() =>this.setState({isModaVisible:true})}
            />

            <AlbumModal 
            isVisible={this.state.isModaVisible}
            />
        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },
  fab: {
    position: 'absolute',
    backgroundColor:"#fd8500",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
