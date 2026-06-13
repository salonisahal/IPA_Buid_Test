import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { lessons, subjects } from '../../data/mockData';
import { useTheme } from '../../hooks/useTheme';
import { useHaptics } from '../../hooks/useHaptics';

export default function Dashboard(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const haptics = useHaptics();
  const featuredLessons = lessons.slice(1, 4);

  return (
    <View className="flex-1 bg-tealHero-light dark:bg-tealHero-dark">
      <StatusBar style="light" />
      <View style={{ paddingTop: insets.top }} className="px-6 pt-4">
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-11 w-11 rounded-xl bg-white/15 items-center justify-center"
          onPress={() => {
            haptics.tap();
            router.push('/(tabs)/messages');
          }}
        >
          <Ionicons name="search" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View className="px-6 pt-6 pb-8">
        <View className="items-center justify-center">
          <View className="h-40 w-40 rounded-full bg-white/10 items-center justify-center">
            <Ionicons name="planet" size={64} color="#9FE6C8" />
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1455470956270-4cbb357f0a16?auto=format&fit=crop&w=240&q=60' }}
            className="h-20 w-20 rounded-2xl absolute right-6 bottom-2"
          />
        </View>
      </View>

      <View className="flex-1 bg-surface-light dark:bg-surface-dark rounded-t-[32px] px-6 pt-6">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          <View>
            <Text className="text-[22px] font-bold text-label-light dark:text-label-dark">Subjects</Text>
            <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-1">
              Recommendations for you
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
            {subjects.slice(0, 4).map((subject, index) => (
              <TouchableOpacity
                key={subject.id}
                activeOpacity={0.8}
                className="mr-4 w-36 rounded-2xl p-4"
                style={{ backgroundColor: subject.color }}
                onPress={() => {
                  haptics.tap();
                  router.push(`/detail/${subject.id}`);
                }}
              >
                <View className="h-8 w-8 rounded-full bg-white/30 items-center justify-center mb-6">
                  <Ionicons name={subject.icon as keyof typeof Ionicons.glyphMap} size={16} color="#FFFFFF" />
                </View>
                <Text className="text-[15px] font-semibold text-white">{subject.name}</Text>
                <View className="absolute right-3 top-3">
                  <Ionicons name="ellipsis-horizontal" size={16} color="#FFFFFF" />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View className="mt-6">
            <Text className="text-[22px] font-bold text-label-light dark:text-label-dark">Your Schedule</Text>
            <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-1">
              Next lessons
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.9}
            className="mt-4 rounded-2xl p-5"
            style={{ backgroundColor: '#4CC788' }}
            onPress={() => {
              haptics.tap();
              router.push(`/detail/${featuredLessons[0].id}`);
            }}
          >
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-[17px] font-semibold text-white">{featuredLessons[0].title}</Text>
                <Text className="text-[13px] text-white/80 mt-1">{featuredLessons[0].chapter}</Text>
              </View>
              <Ionicons name="ellipsis-vertical" size={16} color="#FFFFFF" />
            </View>
            <View className="mt-4">
              <Text className="text-[13px] text-white/80">{featuredLessons[0].room}</Text>
            </View>
          </TouchableOpacity>

          {featuredLessons.slice(1).map((lesson) => (
            <TouchableOpacity
              key={lesson.id}
              activeOpacity={0.8}
              className="mt-4 rounded-2xl p-5 bg-card-light dark:bg-card-dark border border-separator-light dark:border-separator-dark"
              onPress={() => {
                haptics.tap();
                router.push(`/detail/${lesson.id}`);
              }}
            >
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-[17px] font-semibold text-label-light dark:text-label-dark">
                    {lesson.title}
                  </Text>
                  <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-1">
                    {lesson.chapter}
                  </Text>
                </View>
                <Ionicons name="ellipsis-vertical" size={16} color={theme.muted} />
              </View>
              <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-4">
                {lesson.room}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
