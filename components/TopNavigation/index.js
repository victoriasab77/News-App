import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import styles from './style';

const TopNavigation = ({ index, setIndex, category }) => {
  const header = category[0].toUpperCase() + category.slice(1);

  const onSetIndex = () => setIndex(index === 0 ? 1 : 0);

  return (
    <View style={styles.container}>
      {index === 1 && (
        <TouchableOpacity style={styles.left} onPress={onSetIndex}>
          <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
          <Text style={styles.text}>Discover</Text>
        </TouchableOpacity>
      )}
      <Text style={[styles.center, index === 0 && styles.marginLeft150]}>
        {index ? header : 'Discover'}
      </Text>
      {index ? (
        <TouchableOpacity style={styles.right}>
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.left} onPress={onSetIndex}>
          <Text style={[styles.text, styles.textColorWhite]}>All News</Text>
          <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavigation;
