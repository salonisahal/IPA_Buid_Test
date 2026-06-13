import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { lessons, weekDays } from '../../data/mockData';
import { useTheme } from '../../hooks/useTheme';
import { useHaptics } from '../../hooks/useHaptics';

export default function Schedule(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const haptics = useHaptics();
  const scheduleLessons = lessons.slice(0, 3);

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 bg-surface-light dark:bg-surface-dark">
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
        <View className="px-6 pt-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Text className="text-[34px] font-bold text-label-light dark:text-label-dark mr-3">24</Text>
              <View>
                <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark">Wed</Text>
                <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark">Jan 2020</Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              className="rounded-xl bg-success-light/20 px-4 py-2"
              onPress={() => {
                haptics.tap();
                router.push('/(tabs)/dashboard');
              }}
            >
              <Text className="text-[15px] font-semibold text-success-light">Today</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-6 bg-card-light dark:bg-card-dark rounded-2xl px-4 py-3 flex-row justify-between">
            {weekDays.map((day) => (
              <TouchableOpacity
                key={day.id}
                activeOpacity={0.7}
                className="items-center"
                onPress={() => {
                  haptics.select();
                }}
              >
                <Text className="text-[12px] text-secondaryLabel-light dark:text-secondaryLabel-dark">
                  {day.label}
                </Text>
                <View
                  className={`mt-2 h-9 w-9 items-center justify-center rounded-full ${
                    day.isActive ? 'bg-primary-light' : 'bg-transparent'
                  }`}
                >
                  <Text
                    className={`text-[15px] font-semibold ${
                      day.isActive ? 'text-white' : 'text-label-light dark:text-label-dark'
                    }`}
                  >
                    {day.date}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mt-6 px-6">
          <View className="flex-row items-center justify-between">
            <View className="flex-row flex-1">
              <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark w-16">Time</Text>
              <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark">Course</Text>
            </View>
            <Ionicons name="list" size={18} color={theme.muted} />
          </View>

          <View className="mt-4 space-y-4">
            {scheduleLessons.map((lesson, index) => (
              <View key={lesson.id} className="flex-row">
                <View className="w-16">
                  <Text className="text-[15px] font-semibold text-label-light dark:text-label-dark">
                    {lesson.startTime}
                  </Text>
                  <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-1">
                    {lesson.endTime}
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  className={`flex-1 rounded-2xl p-4 ${
                    index === 0 ? 'bg-accent-light' : 'bg-card-light dark:bg-card-dark'
                  }`}
                  onPress={() => {
                    haptics.tap();
                    router.push(`/detail/${lesson.id}`);
                  }}
                >
                  <View className="flex-row items-center justify-between">
                    <Text
                      className={`text-[17px] font-semibold ${
                        index === 0 ? 'text-white' : 'text-label-light dark:text-label-dark'
                      }`}
                    >
                      {lesson.title}
                    </Text>
                    <Ionicons
                      name="ellipsis-vertical"
                      size={16}
                      color={index === 0 ? '#FFFFFF' : theme.muted}
                    />
                  </View>
                  <Text
                    className={`text-[13px] mt-1 ${
                      index === 0 ? 'text-white/80' : 'text-secondaryLabel-light dark:text-secondaryLabel-dark'
                    }`}
                  >
                    {lesson.chapter}
                  </Text>
                  <View className="mt-3 flex-row items-center">
                    <Ionicons
                      name="location"
                      size={14}
                      color={index === 0 ? '#FFFFFF' : theme.muted}
                    />
                    <Text
                      className={`text-[13px] ml-2 ${
                        index === 0 ? 'text-white/80' : 'text-secondaryLabel-light dark:text-secondaryLabel-dark'
                      }`}
                    >
                      {lesson.room}
                    </Text>
                  </View>
                  <View className="mt-2 flex-row items-center">
                    <Ionicons
                      name="person-circle"
                      size={18}
                      color={index === 0 ? '#FFFFFF' : theme.muted}
                    />
                    <Text
                      className={`text-[13px] ml-2 ${
                        index === 0 ? 'text-white/80' : 'text-secondaryLabel-light dark:text-secondaryLabel-dark'
                      }`}
                    >
                      {lesson.teacher}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
