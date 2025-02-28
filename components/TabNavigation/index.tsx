import { View, Text } from "react-native";
import { styles } from "./style";
export function TabNavigation() {
    return (
        <View style={styles.container}>
            <Text style={styles.tabTitle}>Tab 1</Text>
            <Text style={styles.tabTitle}>Tab 2</Text>
            <Text style={styles.tabTitle}>Tab 3</Text>
        </View>
    )
}