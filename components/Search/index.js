import { View, TextInput } from 'react-native';
import React from 'react';

import styles from './style';

function Search(props) {
  const { data, setSearchResults, searchQuery, setSearchQuery } = props;

  const arrayOfData = data?.articles;

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (!text) {
      setSearchResults([]);
      return;
    }
    setSearchResults(arrayOfData.filter((item) => item.description.includes(text)));
  };

  return (
    <View style={styles.searchbar}>
      <TextInput
        style={styles.search}
        onChangeText={(text) => handleSearch(text)}
        placeholder="Search for news"
        placeholderTextColor="white"
        value={searchQuery}
      />
    </View>
  );
}

export default Search;
