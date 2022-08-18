import React, { useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { getNewsAPI } from '../../API/api';
import useFetch from '../../API/useFetch';
import SingleNews from '../../components/SingleNews';
import Search from '../../components/Search';
import styles from './style';

function NewsScreen(props) {
  const { category, source } = props;

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const { data, loading } = useFetch(getNewsAPI(category, source));

  const [, setActiveIndex] = useState();

  const listEmptyComponent = () => (
    <View style={styles.articleList}>
      <Text style={styles.failSearch}>There are no matches for {searchQuery}</Text>
    </View>
  );

  const renderItem = () => <SingleNews item={item} index={index} highlitedValue={searchQuery} />;

  const itemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <View>
      <Search
        data={data}
        setSearchResults={setSearchResults}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {data && !loading ? (
        <FlatList
          data={searchQuery ? searchResults : data.articles}
          ListEmptyComponent={listEmptyComponent}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          onSnapToItem={(index) => setActiveIndex(index)}
          ItemSeparatorComponent={itemSeparatorComponent}
        />
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
    </View>
  );
}

export default NewsScreen;
