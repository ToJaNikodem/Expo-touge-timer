import { View, Text } from "react-native";
import {Tabs, Redirect } from 'expo-router';
import { Link } from 'expo-router';
import { SplashScreen, Stack } from "expo-router";
const CokolwiekLayout = () => {
    return(
        <>
           <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>    
        </>
    )
}
export default CokolwiekLayout;