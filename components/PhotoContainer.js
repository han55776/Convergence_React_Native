import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Photo } from './index';
import { Loading } from './index';

export const PhotoContainer = ({ items }) => {
  const loading = useSelector((state) => state.photos.loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={items}
        showsHorizontalScrollIndicator={false}
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
