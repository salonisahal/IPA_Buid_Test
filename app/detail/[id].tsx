import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { lessons, subjects } from '../../data/mockData';
import { useTheme } from '../../hooks/useTheme';
import { useHaptics } from '../../hooks/useHaptics';

export default function Detail(): React.JSX.Element {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const haptics = useHaptics();

  const subject = subjects.find((item) => item.id === id);
  const lesson = lessons.find((item) => item.id === id);

  const title = subject?.name ?? lesson?.title ?? 'Details';
  const subtitle = subject ? 'Subject overview' : lesson?.chapter;

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="flex-1 bg-surface-light dark:bg-surface-dark px-6"
    >
      <Stack.Screen
        options={{
          title,
          headerBackTitle: '',
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: theme.bg },
          headerTintColor: theme.text,
        }}
      />
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <View className="mt-6 rounded-2xl bg-card-light dark:bg-card-dark p-5">
        <Text className="text-[17px] font-semibold text-label-light dark:text-label-dark">{title}</Text>
        {subtitle ? (
          <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-1">
            {subtitle}
          </Text>
        ) : null}
        {lesson ? (
          <View className="mt-4 space-y-2">
            <Text className="text-[15px] text-secondaryLabel-light dark:text-secondaryLabel-dark">
              {lesson.startTime} - {lesson.endTime}
            </Text>
            <Text className="text-[15px] text-secondaryLabel-light dark:text-secondaryLabel-dark">
              {lesson.room}
            </Text>
            <View className="flex-row items-center mt-3">
              <Image source={{ uri: lesson.avatar }} className="h-10 w-10 rounded-full mr-3" />
              <Text className="text-[15px] text-label-light dark:text-label-dark">{lesson.teacher}</Text>
            </View>
          </View>
        ) : null}
        {subject ? (
          <Text className="text-[15px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-4">
            Weekly recommendations and assignments tailored for {subject.name}.
          </Text>
        ) : null}
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        className="mt-6 rounded-xl bg-primary-light px-6 py-3 items-center"
        onPress={() => {
          haptics.tap();
          router.push('/(modal)/confirm');
        }}
      >
        <Text className="text-[17px] font-semibold text-white">Add to schedule</Text>
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
  );
}
