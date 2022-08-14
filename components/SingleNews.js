import { View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground,
    TouchableOpacity,
    Linking } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SingleNews = ({item, index, highlitedValue}) => {

//     const highlight = ( string) =>
//   string.replace(
//       new RegExp( highlitedValue, 'gi'),
//       (str) => {
//         return (
//             <Text style={{color: 'yellow'}}> {str} </Text>
//         )
//       }
//   );

//   const highlight = string =>
//     string.split(' ').map((word, i) => (
//       <Text key={i}>
//         <Text style={{color: 'yellow'}}>{word} </Text>
//       </Text>
//     ));

    // const  highlight = (word) => {
    //     const match = _.words(word, RegExp(highlitedValue)); // "Aku"
    //     const notMatch = _.replace(word, match, ""); // "rana"
    //     return (
    //       <View style={{ flexDirection: "row" }}>
    //         <Text style={{ backgroundColor: "yellow" }}>{match}</Text>
    //         <Text>{notMatch}</Text>
    //       </View>
    //     );
    //   };
   
  return (
    <View
    style={{
        height: windowHeight / 1.5,
        width: windowWidth,
        paddingBottom: 20
        
    }}>

        <Image 
        source={{uri: item.urlToImage}}
        style={{height:"45%", resizeMode:"cover", width: windowWidth}}
        />
        <View
        style={{
            ...styles.description,
            // backgroundColor: "#282C35",
        }}>
      <Text style={{...styles.title, color: "white"}}>{item.title}</Text>
       <Text style={{...styles.content, color: "white"}}>{item.title}
       {item.description}
       </Text>
       <Text style={{color:'white'}}>
        Short by
        <Text>
            {item.author ?? "unknown"}
        </Text>
       </Text>
       <TouchableOpacity style={{position: 'absolute', bottom: 20, right: 20, backgroundColor: 'white', height: 35, width: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 50}} onPress={()=>Linking.openURL(item.url)}>
            <Text style={{fontSize:13, color:"black", fontWeight:"bold"}}>
                BROWSE
            </Text>
        </TouchableOpacity>
       </View>
    </View>
  )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        paddingTop: 0,
        color: "white",
    },
    content: {
        fontSize: 15,
        paddingBottom: 10,
    },
    description: {
        padding:15,
        flex: 1,
    },
})

export default SingleNews