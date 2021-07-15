import React, { useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoContainer } from '../components/index';
import * as photoActions from '../store/actions/photos';

export const MainScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.photos.photos);

  useEffect(() => {
    dispatch(photoActions.fetchData());
  }, []);

  return (
    <View style={styles.screen}>
      <PhotoContainer items={items} />
      <Button
        style={styles.button}
        title='Start Mixing'
        onPress={() => {
          dispatch(photoActions.shuffleArray(items));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});