import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Load custom fonts
const fetchFonts = () => {
  return Font.loadAsync({
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("../assets/fonts/Manrope-ExtraBold.ttf"),
    "Manrope-ExtraLight": require("../assets/fonts/Manrope-ExtraLight.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-SemiBold": require("../assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Medium": require("../assets/fonts/Manrope-Medium.ttf"),
  });
};

export default function RootLayout() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const prepareData = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await fetchFonts();

        setDataLoaded(true);
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error("Error loading resources: ", error);
      }
    };

    prepareData();
  }, []);

  if (!dataLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
