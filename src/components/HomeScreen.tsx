import {StyleSheet} from 'react-native';
import {config} from '@/config';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: 20,
  },
  coin: {
    flex: 1,
    backgroundColor: config().themeParams.bg_color,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    padding: 20,
  },
});
