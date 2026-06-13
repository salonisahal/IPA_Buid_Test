import React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { useHaptics } from '../hooks/useHaptics';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  className?: string;
}

export const Card = ({ children, onPress, style, className }: CardProps): React.JSX.Element => {
  const theme = useTheme();
  const haptics = useHaptics();

  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          haptics.tap();
          onPress();
        }}
        style={style}
        className={`rounded-2xl bg-card-light dark:bg-card-dark shadow-sm ${className ?? ''}`}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[{ backgroundColor: theme.card }, style]}
      className={`rounded-2xl shadow-sm ${className ?? ''}`}
    >
      {children}
    </View>
  );
};
