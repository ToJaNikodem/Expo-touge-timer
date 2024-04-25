import { View, Text } from "react-native";
import {Tabs, Redirect } from 'expo-router';
import { Link } from 'expo-router';
const TabsLayout = () => {
    return(
        <>
            <Tabs>
                <Tabs.Screen
                    name="home"
                    options={{
                        title:"Homee",
                        headerShown: false,
                    }}
                />
            </Tabs>
                 
        </>
    )
}
export default TabsLayout;