import React, { useState } from 'react';
import { View, FlatList, ActivityIndicator, Dimensions, StyleSheet, Text } from 'react-native';
import { getNewsAPI, getSourceAPI } from '../API/api';
import useFetch from '../API/useFetch';
import SingleNews from '../components/SingleNews';
import Search from '../components/Search';


function NewsScreen(props) {

  const {category, source} = props

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

const {data, loading, error} = useFetch(getNewsAPI(category, source))

const [activeIndex, setActiveIndex] = useState()
const windowHeight = Dimensions.get("window").height

  return (
      <View>
        <Search data={data} setSearchResults={setSearchResults} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        {
          data && !loading ? (
            <FlatList
            data={searchQuery ? searchResults : data.articles}
            itemHeight={windowHeight}
            ListEmptyComponent={()=> {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center', height: windowHeight/1.8}}>
                  <Text style={{color: 'white', fontSize: 20}}>Nema {searchQuery}</Text>
                </View>
              )
            }}
            renderItem={({item,index}) => (
              <SingleNews item={item} index={index} highlitedValue={searchQuery}/>
            )}
            keyExtractor={(item) => item.title}
            onSnapToItem={index => setActiveIndex(index)}
            ItemSeparatorComponent={()=> {
              return (
                <View style={{height: 5, backgroundColor: 'white'}} />
              )
            }}
            // inverted
            />
          ) : (
            <View style={{justifyContent:'center', alignItems:'center', height: windowHeight}}>
              <ActivityIndicator size="large" color="white" />
            </View>
          )
        }
        
      </View>
  )

};

const styles = StyleSheet.create({
  carousel : {
    // flex: 1,
    // backgroundColor: "black",
  },
});
export default NewsScreen