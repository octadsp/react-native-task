import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

import Container from "./container"

import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProvider } from "./src/context/userContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
  })

  const fontConfig = {
    Poppins: {
      400:{
        normal: "Poppins_400Regular",
        italic: "Poppins_400Regular_Italic",
      },
    },
  };

  const customColor = {
    darky: {
      400: "#111"
    },
    blueLight: {
      400: "#81C8FF"
    }
  };

  const theme = extendTheme({
    colors: customColor,
    fontConfig,
    fonts: {
      heading: "Poppins",
      body: "Poppins",
      mono: "Poppins",
    },
    config: { initialColorMode: "dark"},
  })

  if (!fontsLoaded){
    return;
  } 

  const client = new QueryClient();

  return (
      <NavigationContainer>
        <QueryClientProvider client={client}>
          <NativeBaseProvider theme={theme}>
            <UserContextProvider>
              <Container/>
            </UserContextProvider>
          </NativeBaseProvider>
        </QueryClientProvider>
      </NavigationContainer>
    );
}