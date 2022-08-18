import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import styles from './style';

const SingleNews = ({ item }) => {
  const onPress = () => Linking.openURL(item.url);

  return (
    <View style={styles.newsContainer}>
      <Image source={{ uri: item.urlToImage }} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>
          {item.title}
          {item.description}
        </Text>
        <Text style={styles.shortby}>
          Short by
          <Text>{item.author ?? 'unknown'}</Text>
        </Text>
        <TouchableOpacity style={styles.browseButton} onPress={onPress}>
          <Text style={styles.browseButtonText}>BROWSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleNews;
