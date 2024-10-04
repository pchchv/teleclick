import { StyleSheet } from "react-native";
import { config } from "@/config";

type HeaderProps = {
    amount: number;
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: config().themeParams?.header_bg_color,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 20,
        justifyContent: "space-between",
    },
    amountRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "600",
        color: config().themeParams?.text_color,
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    username: {
        color: config().themeParams.accent_text_color,
        fontSize: 18,
    },
    image: {
        backgroundColor: config().themeParams.button_color,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    icon: {
        height: 30,
        width: 30,
        tintColor: config().themeParams.text_color,
    },
});
