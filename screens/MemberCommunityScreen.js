import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";

export default class MemberCommunityScreen extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            data: [],
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

    render() {
      return (
        <SafeAreaView>
        {this.state.load && <ActivityIndicator size="large" color="#115f9b" />}

          <FlatList
            data={this.state.data}
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
    margin: 1,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },
});
