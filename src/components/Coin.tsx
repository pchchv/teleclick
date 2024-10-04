import { Platform, Pressable } from "react-native";
import Animated from "react-native-reanimated";


// Animated component to have ability use animated style from Reanimated package.
const AnimatedButton = Animated.createAnimatedComponent(Pressable);
const sensitivity = Platform.OS == "web" ? 0.1 : 0.2;
const animationConfig = {
    duration: 100,
};

/**
* @prop onClick - what happened on click the coin
* @prop disabled - when coin can be clicked or not
*/
type CoinProps = {
    onClick: () => void;
    disabled?: boolean;
};
