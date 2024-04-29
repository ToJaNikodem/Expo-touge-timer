import React from 'react'
import {StyleSheet, View, Text } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function index() {
  return (
    
        <SafeAreaView>
          <Link href="/home">Welcome, click to home</Link>
        </SafeAreaView>
        
    
    )
}

