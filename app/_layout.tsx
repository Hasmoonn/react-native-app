import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useCallback, useEffect } from "react";

SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (fontError) {
      console.warn("Font loading error:", fontError);
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const handleHideSplash = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null;

    if (fontError) {
      console.warn("Font loading error:", fontError);
      handleHideSplash();
      return;
    }

    if (fontsLoaded) {
      handleHideSplash();
      return;
    }

    // Fallback timeout 5s
    timeoutId = setTimeout(() => {
      console.warn("Fonts not loaded after 5s, hiding splash anyway");
      handleHideSplash();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [fontsLoaded, fontError, handleHideSplash]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
