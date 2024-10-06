import {StyleSheet} from 'react-native';
import {config} from '@/config';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: config().themeParams?.secondary_bg_color,
  },
});
