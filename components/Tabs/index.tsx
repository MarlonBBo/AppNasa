import { Text, View } from "react-native";
import { styles } from "./style";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type TabsProps = {
    icon: keyof typeof FontAwesome5.glyphMap;
    title: string;
}

export function Tabs({ icon, title }: TabsProps) {
    return (
        <View style={styles.container}>
            <FontAwesome5 name={icon} size={23} color="#fff" />
            <Text style={styles.tabTitle}>{title}</Text>
        </View>
    )
}
