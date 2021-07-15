import React, { useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoContainer } from '../components/index';
import { Loading } from '../components/index';
import * as photoActions from '../store/actions/photos';

export const MainScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.loading);

  // useEffect for calling dispatch method from Redux actions
  useEffect(() => {
    dispatch(photoActions.fetchData());
  }, []);

  // If the app is loading for fetching data, shows loading component
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.screen}>
      <PhotoContainer items={items} />
      <Button
        style={styles.button}
        title='Start Mixing'
        onPress={(e) => {
          e.preventDefault();
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
