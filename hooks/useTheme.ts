import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return {
    isDark,
    bg: isDark ? '#000000' : '#F7F7FA',
    card: isDark ? '#1C1C1E' : '#FFFFFF',
    text: isDark ? '#FFFFFF' : '#111111',
    muted: isDark ? '#8E8E93' : '#A9A9B0',
    border: isDark ? '#38383A' : '#E6E6EA',
  };
};
