import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="test"
          options={{ headerTitle: '11' }}
        />
        <Stack.Screen
          name="stack/settings"
          options={{ headerTitle: 'settings' }}
        />
        <Stack.Screen
          name="stack/alarm"
          options={{ headerTitle: 'alarm' }} 
        />
        <Stack.Screen
          name="stack/login"
          options={{ headerTitle: '로그인' }}
        />
        <Stack.Screen
          name="stack/signup"
          options={{ headerTitle: '회원가입' }}
        />
        <Stack.Screen
          name="stack/write/index"
          options={{ headerTitle: '코스 등록' }}
        />
      </Stack>
    </ThemeProvider>
  );
}
