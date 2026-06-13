import '../global.css';
import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(modal)/confirm" options={{ presentation: 'modal', headerShown: true }} />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
