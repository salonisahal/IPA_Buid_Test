import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../hooks/useTheme';
import { useHaptics } from '../hooks/useHaptics';

export default function NotFound(): React.JSX.Element {
  const theme = useTheme();
  const haptics = useHaptics();

  return (
    <View className="flex-1 items-center justify-center bg-surface-light dark:bg-surface-dark px-6">
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <Text className="text-[28px] font-bold text-label-light dark:text-label-dark">Page not found</Text>
      <Text className="text-[15px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-2 text-center">
        The screen you are looking for does not exist.
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        className="mt-6 rounded-xl bg-primary-light px-6 py-3"
        onPress={() => {
          haptics.tap();
          router.replace('/(tabs)/dashboard');
        }}
      >
        <Text className="text-[17px] font-semibold text-white">Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}
