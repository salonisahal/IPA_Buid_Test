import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';

interface EmptyStateProps {
  title: string;
  message: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export const EmptyState = ({ title, message, icon = 'calendar' }: EmptyStateProps): React.JSX.Element => {
  const theme = useTheme();

  return (
    <View className="items-center justify-center py-12">
      <View className="h-14 w-14 rounded-full bg-card-light dark:bg-card-dark items-center justify-center mb-4">
        <Ionicons name={icon} size={24} color={theme.muted} />
      </View>
      <Text className="text-[17px] font-semibold text-label-light dark:text-label-dark">
        {title}
      </Text>
      <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-2 text-center px-8">
        {message}
      </Text>
    </View>
  );
};
