import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../hooks/useTheme';
import { useHaptics } from '../../hooks/useHaptics';

export default function Confirm(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const haptics = useHaptics();

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="flex-1 bg-surface-light dark:bg-surface-dark px-6"
    >
      <Stack.Screen
        options={{
          title: 'Confirm',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: theme.bg },
          headerTintColor: theme.text,
        }}
      />
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <View className="items-center">
        <View className="h-1 w-10 rounded-full bg-separator-light dark:bg-separator-dark mt-2" />
      </View>
      <View className="flex-1 justify-center">
        <Text className="text-[22px] font-bold text-label-light dark:text-label-dark text-center">
          Add this lesson?
        </Text>
        <Text className="text-[15px] text-secondaryLabel-light dark:text-secondaryLabel-dark text-center mt-2">
          We will add the lesson to your personal schedule.
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          className="mt-8 rounded-xl bg-primary-light px-6 py-3 items-center"
          onPress={() => {
            haptics.success();
            router.back();
          }}
        >
          <Text className="text-[17px] font-semibold text-white">Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className="mt-4 rounded-xl border border-separator-light dark:border-separator-dark px-6 py-3 items-center"
          onPress={() => {
            haptics.tap();
            router.back();
          }}
        >
          <Text className="text-[17px] font-semibold text-label-light dark:text-label-dark">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
