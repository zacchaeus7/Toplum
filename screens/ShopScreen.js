import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";

export default class ShopScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            datas: [
                {
                    id:1,
                    title:"Article 1",
                    description:'lorem'
                },
                {
                    id:2,
                    title:"Article 2",
                    description:'lorem'
                },
                {
                    id:3,
                    title:"Article 3",
                    description:'lorem'
                },
                {
                    id:4,
                    title:"Article 4",
                    description:'lorem'
                },
                {
                    id:5,
                    title:"Article 3",
                    description:'lorem'
                },
                {
                    id:6,
                    title:"Article 4",
                    description:'lorem'
                },
                {
                    id:7,
                    title:"Article 3",
                    description:'lorem'
                },
                {
                    id:8,
                    title:"Article 4",
                    description:'lorem'
                }
            ],
            refreshing: true,
            load:true
        }
    }

    componentDidMount() {
        this.fetchCats();
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

    renderItemComponent = (data) =>
        <TouchableOpacity style={styles.container}>
            <View style={styles.post_infos}>
                <Image style={styles.image} source={require('../assets/images/phone.jpg')} />
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',marginLeft:5}}>50.000 CDF</Text>
                    <Text style={{fontWeight:'bold'}}>Title</Text>
                </View>
            </View>
        </TouchableOpacity>

    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        // marginLeft: 10,
        // marginRight: 10,
    }}
    />

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
    }

    render() {
      return (
        <SafeAreaView style={styles.content}>
        {this.state.load && <ActivityIndicator size="large" color="#115f9b" />}

          <FlatList
            data={this.state.datas}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.ItemSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            numColumns={2}
          />
        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: 300,
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  content:{
    margin:2,
  },
  image: {
    height: '80%',
    margin:10,
    borderRadius: 4,
  },
  post_infos:{
    // flexDirection:'row',
    // backgroundColor:'#ccc'
  }
});
