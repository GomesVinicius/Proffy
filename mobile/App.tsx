import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';

//import AppStack from './src/routes/AppStack';
import AsyncStorage from '@react-native-community/async-storage';
import InstructionPage from './src/components/InstructionPage';

export default function App() {
  const [isFirstOpen, setIsFirstOpen] = useState(false);

  AsyncStorage.setItem('firstOpen', 'true', () => {
    setIsFirstOpen(true);
  });

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    
    return (
      <>
        <StatusBar style="light" />
        <InstructionPage />
      </>
    )
  }
}
