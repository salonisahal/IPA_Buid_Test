import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { useHaptics } from '../hooks/useHaptics';

interface ListRowProps {
  title: string;
  subtitle?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  avatarUrl?: string;
  onPress: () => void;
}

export const ListRow = ({ title, subtitle, icon, avatarUrl, onPress }: ListRowProps): React.JSX.Element => {
  const theme = useTheme();
  const haptics = useHaptics();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        haptics.select();
        onPress();
      }}
      className="min-h-[44px] flex-row items-center px-6 py-3"
    >
      {avatarUrl ? (
        <Image source={{ uri: avatarUrl }} className="h-9 w-9 rounded-full mr-3" />
      ) : icon ? (
        <View className="h-9 w-9 rounded-full bg-card-light dark:bg-card-dark items-center justify-center mr-3">
          <Ionicons name={icon} size={18} color={theme.text} />
        </View>
      ) : null}
      <View className="flex-1">
        <Text className="text-[17px] font-semibold text-label-light dark:text-label-dark">
          {title}
        </Text>
        {subtitle ? (
          <Text className="text-[13px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-1">
            {subtitle}
          </Text>
        ) : null}
      </View>
      <Ionicons name="chevron-forward" size={18} color={theme.muted} />
    </TouchableOpacity>
  );
};
