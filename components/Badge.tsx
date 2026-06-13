import React from 'react';
import { Text, View } from 'react-native';

interface BadgeProps {
  value: number;
}

export const Badge = ({ value }: BadgeProps): React.JSX.Element => {
  if (value <= 0) return <View />;

  return (
    <View className="absolute -right-1 -top-1 bg-danger-light dark:bg-danger-dark rounded-full px-1.5 py-0.5">
      <Text className="text-[10px] text-white font-semibold">{value}</Text>
    </View>
  );
};
