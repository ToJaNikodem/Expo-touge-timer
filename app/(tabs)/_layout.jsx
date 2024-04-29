import { View, Text } from "react-native";
import {Tabs, Redirect } from 'expo-router';
import { Link } from 'expo-router';
const TabsLayout = () => {
    return(
        <>
            <Tabs>
                {/* <Tabs.Screen
                    name="home"
                    options={{
                        title:"Home",
                        headerShown: false,
                    }}
                /> */}
                {/* <Tabs.Screen
                    name="login"
                    options={{
                        title:"Login",
                        headerShown: false,
                    }}
                /> */}
                {/* <Tabs.Screen
                    name="map"
                    options={{
                        title:"Map",
                        headerShown: false,
                    }}
                /> */}
            </Tabs>
                 
        </>
    )
}
export default TabsLayout;