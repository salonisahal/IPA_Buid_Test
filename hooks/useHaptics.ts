import * as Haptics from 'expo-haptics';

export const useHaptics = () => {
  const tap = () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  const select = () => Haptics.selectionAsync();
  const success = () =>
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  const warning = () =>
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  const error = () =>
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

  return { tap, select, success, warning, error };
};
