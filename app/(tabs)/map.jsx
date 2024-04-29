import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    alignItems:'center',
  },
  map: {
    width: '100%',
    height: '60%',
  },

});