import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import useFetch from '../API/useFetch'
import { getNewsAPI } from '../API/api'

const Search = (props) => {
    const { data, setSearchResults, searchQuery, setSearchQuery} = props

    const arrayOfData = data?.articles

    const handleSearch = (text) => {
        setSearchQuery(text)
        if (!text) {
            setSearchResults([]);
            return;
        }
        setSearchResults(arrayOfData.filter(item => item.description.includes(text)))
    };
  return (
    <View style={{ width:"98%", position:"relative", alignSelf: 'center'}}>
        <TextInput 
            style={{
                ...styles.search,
                backgroundColor: "black",
                color: "white",
            }}
            onChangeText={(text) => handleSearch(text)}
            placeholder="Search for news"
            placeholderTextColor={"white"}
            value={searchQuery}
        />
    </View>
  );
};
 
const styles = StyleSheet.create({
    search: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius:10, 
        fontSize: 15,
        marginBottom: 15,
    },
    searchResults: {
        position: "absolute",
        zIndex: 1,
        top:50,
    },
    singleResult: {
        borderRadius: 5,
        padding:10,
        margin: 0.5,
        shadowColor: "black",
        elevation: 5,
    },
});
export default Search