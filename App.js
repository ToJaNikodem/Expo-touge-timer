// import React, { useState, useEffect } from 'react';
// import { Platform, Text, View, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import MapView from 'react-native-maps';

// import * as Location from 'expo-location';

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
      
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     //text = JSON.stringify(location);
//     text = "lol";
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.paragraph}>{text}</Text>
//     </SafeAreaView>
//   );
// }

