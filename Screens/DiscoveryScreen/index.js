import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import { categories, sources } from '../../API/api';
import styles from './style';

function DiscoverScreen(props) {
  const { setIndex, setCategory, setSource, source } = props;

  const onChooseCategory = (category) => {
    setCategory(category);
    setIndex(1);
  };

  const onChooseSource = (source) => {
    setSource(source);
  };

  const renderItemSource = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.category, item.id === source && styles.borderColorWhite]}
        onPress={() => onChooseSource(item.id)}>
        <Image source={{ uri: item.pic }} style={styles.categoryImage} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderItemCategory = ({ item }) => {
    return (
      <TouchableOpacity style={styles.category} onPress={() => onChooseCategory(item.name)}>
        <Image source={{ uri: item.pic }} style={styles.categoryImage} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.discover}>
      <Text style={styles.subtitle}>Sources</Text>
      <FlatList
        data={sources}
        contentContainerStyle={styles.marginTop20}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItemSource}
      />
      <Text style={styles.subtitle}>Categories</Text>
      <FlatList
        data={categories}
        numColumns={3}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        renderItem={renderItemCategory}
      />
    </View>
  );
}

export default DiscoverScreen;
