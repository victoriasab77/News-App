import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoveryScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from './TopNavigation';
const InshortTabs = () => {
    const layout = useWindowDimensions();
    

    const [index, setIndex] = useState(1);
    const [category, setCategory] = useState('general');
    const [source, setSource] = useState('');

    const [routes] = useState([
        {key:"first", title:"Discover"},
        {key:"second", title:"News"},
    ]);

    const renderScene = ({ route }) => {
      switch (route.key) {
        case 'first':
           return <DiscoverScreen source={source} setCategory={setCategory} setIndex={setIndex} setSource={setSource}/>;
        case 'second':
          return <NewsScreen category={category} source={source}/>;
        default:
          return null;
    }
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={()=> 
        <TopNavigation
          index={index}
          category={category}
          setIndex={setIndex}
         />}
    />
  )
}

export default InshortTabs