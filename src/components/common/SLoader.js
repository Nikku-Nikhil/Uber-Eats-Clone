import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SText from './SText';

const SLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ActivityIndicator size="large" color="#000000" />
        <SText text={'Please wait...'} size={12} />
      </View>
    </View>
  );
};

export default SLoader;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
});
