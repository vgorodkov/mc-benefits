import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabNav } from 'navigation/BottomTabNav';
import { colors } from '@constants/colors';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

SplashScreen.preventAutoHideAsync();

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'SF-UI-Display-Bold': require('@assets/fonts/SF-UI-Display-Bold.ttf'),
    'SF-UI-Display-Semibold': require('@assets/fonts/SF-UI-Display-Semibold.ttf'),
    'SF-UI-Display-Medium': require('@assets/fonts/SF-UI-Display-Medium.ttf'),
    'SF-UI-Display-Regular': require('@assets/fonts/SF-UI-Display-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer theme={customTheme}>
      <Provider store={store}>
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <StatusBar style="auto" />
          <BottomTabNav />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
