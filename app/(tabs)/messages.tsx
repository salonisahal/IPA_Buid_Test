import React from 'react';
import { ScrollView, View } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { lessons } from '../../data/mockData';
import { ListRow } from '../../components/ListRow';
import { ScreenHeader } from '../../components/ScreenHeader';
import { useTheme } from '../../hooks/useTheme';

export default function Messages(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 bg-surface-light dark:bg-surface-dark">
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <ScreenHeader title="Messages" subtitle="Teachers and classmates" />
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        {lessons.slice(0, 6).map((lesson) => (
          <View key={lesson.id} className="border-b border-separator-light dark:border-separator-dark">
            <ListRow
              title={lesson.teacher}
              subtitle={lesson.title}
              avatarUrl={lesson.avatar}
              onPress={() => router.push(`/detail/${lesson.id}`)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
