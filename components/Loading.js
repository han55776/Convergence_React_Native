import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.loading}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
