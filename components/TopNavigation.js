import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import useFetch from '../API/useFetch';
import { getNewsAPI, getSourceAPI } from '../API/api';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewsScreen from "../Screens/NewsScreen";

const TopNavigation = ({ index, setIndex, category }) => {
  //const { darkTheme, setDarkTheme, fetchNews } = useContext(NewsContext);

  const header = category[0].toUpperCase() + category.slice(1)

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor:  "#282C35",
      }}
    >
      {index === 0 ? (
        <TouchableOpacity
          //onPress={() => setDarkTheme(!darkTheme)}
          style={styles.left}
        >
          <Text
            style={{ ...styles.text, color: /*darkTheme ? */"lightgrey" /*: "black"*/ }}
          >
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#007FFF"
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
          <Text
            style={{ ...styles.text, color: /*darkTheme ?*/ "lightgrey" /*: "black" */}}
          >
            Discover
          </Text>
        </TouchableOpacity>
      )}

      <Text style={{ ...styles.center, color: /*darkTheme ? */"white" /*: "black"*/ }}>
        {index ? header : "Discover"}
      </Text>
      {index ? (
        <TouchableOpacity
          style={styles.right}
          //onPress={() => /*useFetch(getNewsAPI(category, source))*/ <NewsScreen/>}
        >
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <Text
            style={{ ...styles.text, color: /*darkTheme ? */"white" /*: "black"*/ }}
          >
            All News
          </Text>
          <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    // paddingTop: 30,
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  right: {
    width: 80,
    alignItems: "flex-end",
  },
});