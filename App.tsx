import { StatusBar } from 'expo-status-bar';
import {  Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Sora_400Regular, Sora_700Bold } from '@expo-google-fonts/sora';
import { useEffect } from 'react';
import * as SplashScreen from "expo-splash-screen";
import { StackNavigation } from './Framework/Navigation/Stack';
import "./global.css"
import Details from './Framework/Screen/Details';





SplashScreen.preventAutoHideAsync(); 

export default function App() {
  const [fontsLoaded] = useFonts({
    SoraRegular: Sora_400Regular,
    SoraBold: Sora_700Bold,
  });

  useEffect  (() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); 
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }
  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />
      <StackNavigation/>
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
