import {Platform} from 'react-native';
import {useEffect, useState} from 'react';
import {
  impactAsync,
  notificationAsync,
  NotificationFeedbackType,
  ImpactFeedbackStyle,
} from 'expo-haptics';

type Haptics = {
  impactOccurred: (style: ImpactFeedbackStyle) => Promise;
  notificationOccurred: (type: NotificationFeedbackType) => Promise;
};

export const useHaptics = () => {
  const [haptics, setHaptics] = useState({
    impactOccurred: async _ => {},
    notificationOccurred: async _ => {},
  });

  useEffect(() => {
    if (Platform.OS == 'web') {
      if (window.Telegram?.WebApp.HapticFeedback) {
        setHaptics(window.Telegram.WebApp.HapticFeedback);
        return;
      }
    }

    const impact = async (style: ImpactFeedbackStyle) =>
      await impactAsync(style);
    const notification = async (type: NotificationFeedbackType) =>
      await notificationAsync(type);
    setHaptics({impactOccurred: impact, notificationOccurred: notification});
  }, []);

  return haptics;
};
