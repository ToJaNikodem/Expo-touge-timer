import { StyleSheet, View,Text } from 'react-native';
import {Tabs, Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomePage = () => {
    return(
        
            <SafeAreaView style={styles.container}>
                <Text>Home</Text>    
            </SafeAreaView>
       
        
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex: 1,
        alignItems:'center',
    }
})
export default HomePage;