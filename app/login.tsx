import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../hooks/useTheme';
import { useHaptics } from '../hooks/useHaptics';

export default function Login(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const haptics = useHaptics();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="bg-surface-light dark:bg-surface-dark"
    >
      <Stack.Screen
        options={{
          title: 'Login',
          headerBackTitle: '',
          headerLargeTitle: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: theme.bg },
          headerTintColor: theme.text,
        }}
      />
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <View className="flex-1 px-6 pt-10">
        <Text className="text-[28px] font-bold text-label-light dark:text-label-dark">Welcome back</Text>
        <Text className="text-[15px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-2">
          Sign in to continue your learning journey.
        </Text>

        <View className="mt-8 space-y-4">
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={theme.muted}
            autoCapitalize="none"
            keyboardType="email-address"
            className="rounded-xl bg-card-light dark:bg-card-dark px-4 py-3 text-[17px] text-label-light dark:text-label-dark border border-separator-light dark:border-separator-dark"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor={theme.muted}
            secureTextEntry
            className="rounded-xl bg-card-light dark:bg-card-dark px-4 py-3 text-[17px] text-label-light dark:text-label-dark border border-separator-light dark:border-separator-dark"
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className="mt-8 rounded-xl bg-primary-light px-6 py-3 items-center"
          onPress={() => {
            haptics.success();
            router.replace('/(tabs)/dashboard');
          }}
        >
          <Text className="text-[17px] font-semibold text-white">Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="mt-4"
          onPress={() => {
            haptics.tap();
            router.back();
          }}
        >
          <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark text-center">
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
