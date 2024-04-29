import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View,Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Login</Text>    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    alignItems:'center',
  },
  

});