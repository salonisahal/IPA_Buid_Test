import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../hooks/useTheme';
import { useHaptics } from '../hooks/useHaptics';

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  actionIcon?: keyof typeof Ionicons.glyphMap;
  onActionPress?: () => void;
}

export const ScreenHeader = ({
  title,
  subtitle,
  actionIcon,
  onActionPress,
}: ScreenHeaderProps): React.JSX.Element => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const haptics = useHaptics();

  return (
    <View
      style={{ paddingTop: insets.top + 8 }}
      className="px-6 pb-4 bg-surface-light dark:bg-surface-dark"
    >
      <View className="flex-row items-center justify-between">
        <View>
          <Text
            className="text-[34px] font-bold text-label-light dark:text-label-dark"
            style={{ color: theme.text }}
          >
            {title}
          </Text>
          {subtitle ? (
            <Text className="text-[15px] text-secondaryLabel-light dark:text-secondaryLabel-dark mt-1">
              {subtitle}
            </Text>
          ) : null}
        </View>
        {actionIcon ? (
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-11 w-11 rounded-xl items-center justify-center bg-card-light dark:bg-card-dark"
            onPress={() => {
              haptics.tap();
              onActionPress?.();
            }}
          >
            <Ionicons name={actionIcon} size={20} color={theme.text} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
