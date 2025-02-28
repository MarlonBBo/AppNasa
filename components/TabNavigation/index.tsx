import { View } from "react-native";
import { Link } from "expo-router";
import { styles } from "./style";
import { Tabs } from "../Tabs";

export function TabNavigation() {
    return (
        <View style={styles.container}>  
            <Link href="/meteoro">
            <Tabs icon="meteor" title="Meteor" />
            </Link>

            <Link href="/">
            <Tabs icon="rocket" title="space day photo" />
            </Link>
        </View>
    )
}