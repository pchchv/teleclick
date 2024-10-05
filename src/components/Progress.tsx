import {StyleSheet} from 'react-native';
import { config } from '@/config';

type ProgressProps = {
  max?: number;
  amount: number;
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderColor: config().themeParams.accent_text_color,
    backgroundColor: config().themeParams.section_bg_color,
    borderWidth: 2,
    borderRadius: 70,
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
  },
  progress: {
    height: "100%",
    backgroundColor: config().themeParams.accent_text_color,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    justifyContent: "center",
    overflow: "hidden",
  },
  text: {
    fontWeight: "700",
    fontSize: 24,
    color: config().themeParams.accent_text_color,
    textAlign: "center",
  },
  progressText: {
    textAlign: "center",
    color: config().themeParams.text_color,
  },
});
