import React from 'react';

import { ThemeProvider } from 'styled-components';
// import { useFonts } from 'expo-font';

import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';

import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';
import theme from './src/styles/theme';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    // Inter_400Regular: require('./src/assets/fonts/Inter-Regular.ttf'),
    // Inter_500Medium: require('./src/assets/fonts/Inter-Medium.ttf'),
    // Archivo_400Regular: require('./src/assets/fonts/Archivo-Regular.ttf'),
    // Archivo_500Medium: require('./src/assets/fonts/Archivo-Medium.ttf'),
    // Archivo_600SemiBold: require('./src/assets/fonts/Archivo-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
