import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListRow } from '../../components/ListRow';
import { ScreenHeader } from '../../components/ScreenHeader';
import { useTheme } from '../../hooks/useTheme';
import { useHaptics } from '../../hooks/useHaptics';

export default function Profile(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const haptics = useHaptics();

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 bg-surface-light dark:bg-surface-dark">
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <ScreenHeader title="Profile" subtitle="Student account" />
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="px-6">
          <View className="rounded-2xl bg-card-light dark:bg-card-dark p-5 flex-row items-center">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=96&h=96' }}
              className="h-16 w-16 rounded-full mr-4"
            />
            <View>
              <Text className="text-[17px] font-semibold text-label-light dark:text-label-dark">Alex Morgan</Text>
              <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-1">
                Grade 11 • 4 Courses
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <View className="border-b border-separator-light dark:border-separator-dark">
            <ListRow title="My Subjects" subtitle="8 active" icon="book" onPress={() => router.push('/detail/math')} />
          </View>
          <View className="border-b border-separator-light dark:border-separator-dark">
            <ListRow title="Notifications" subtitle="Lesson reminders" icon="notifications" onPress={() => router.push('/(modal)/confirm')} />
          </View>
          <View className="border-b border-separator-light dark:border-separator-dark">
            <ListRow title="Settings" subtitle="Appearance & privacy" icon="settings" onPress={() => router.push('/detail/geo')} />
          </View>
        </View>

        <View className="px-6 mt-6">
          <TouchableOpacity
            activeOpacity={0.8}
            className="rounded-xl border border-separator-light dark:border-separator-dark px-6 py-3 items-center"
            onPress={() => {
              haptics.tap();
              router.push('/login');
            }}
          >
            <Text className="text-[17px] font-semibold text-label-light dark:text-label-dark">Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
