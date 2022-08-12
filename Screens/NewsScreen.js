import React, { useState } from 'react';
import { View, FlatList, ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import { getNewsAPI, getSourceAPI } from '../API/api';
import useFetch from '../API/useFetch';
import SingleNews from '../components/SingleNews';


function NewsScreen(props) {

  const {category, source} = props

const {data, loading, error} = useFetch(getNewsAPI(category, source))

const [activeIndex, setActiveIndex] = useState()
const windowHeight = Dimensions.get("window").height
  return (
      <View>
        {
          data && !loading ? (
            <FlatList
            data={data.articles.slice(0,10)}
            itemHeight={windowHeight}
            renderItem={({item,index}) => (
              <SingleNews item={item} index={index}/>
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