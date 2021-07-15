import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export const Photo = ({ url, title }) => {
  return (
    <View style={styles.photo}>
      <ImageBackground style={styles.photoImage} source={url} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 5,
    margin: 30,
    width: '60%',
    height: '90%',

    position: 'relative',
  },
  photoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 30,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    transform: [{ rotate: '45deg' }],
  },
});
