import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import InshortTabs from './components/InshortTabs';
import React, { useState } from "react";

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      {/* <View> */}
        <InshortTabs />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#282C35',
    paddingTop: 25
  },
});
