import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Photo } from './index';

export const PhotoContainer = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => (
          <Photo url={itemData.item.url} title={itemData.item.title} />
        )}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
  },
});
