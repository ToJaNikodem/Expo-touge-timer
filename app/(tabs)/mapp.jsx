import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Link href="/home">Home</Link>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
});