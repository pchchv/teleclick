import {
 NotificationFeedbackType,
 ImpactFeedbackStyle,
} from "expo-haptics";


type Haptics = {
    impactOccurred: (style: ImpactFeedbackStyle) => Promise;
    notificationOccurred: (type: NotificationFeedbackType) => Promise;
};
