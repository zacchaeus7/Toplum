import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const SearchBar = ({ onSearching, navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
        <View style={styles.main_container}>
            <Searchbar
                style={styles.searchBar}
                placeholder="Vous cherchez...?"
                onFocus={() => navigation.navigate("SearchScreen")}
                onChangeText={() => navigation.navigate("SearchScreen")}
                value={searchQuery}/>
        </View>
  );
};

const styles = StyleSheet.create({
    searchBar: {
        opacity: 0.85,
        width: 345,
        marginTop: 20
    },

    main_container: {
        alignItems: "center"
    }
})

export default SearchBar;