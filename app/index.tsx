import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, SafeAreaView } from "react-native";
import { ImageBackground } from "react-native"
import api from "@/service/api";
import { Data } from "../types/Data";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Model } from '@/components/Model';
import { TabNavigation } from "@/components/TabNavigation";

export default function Home() {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api("https://api.nasa.gov/planetary/apod");
                if (!response.ok) {
                    throw new Error("Falha ao buscar dados");
                }
                const result: Data = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Erro: {error}</Text>;
    }

    return (
        <View style={styles.container}>
            <StatusBar style="inverted"/>
            <ImageBackground
                source={{ uri: data?.hdurl }}
                style={styles.backgroundImage}
            >
                <SafeAreaView style={styles.info}>
                    <Model item={{
                        content: data?.explanation || '',
                        title: data?.title || '',
                        date: data?.date || '',
                        id: "1"
                    }} />
                </SafeAreaView>

                <TabNavigation />

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    info: {
        marginTop: 35,
        padding: 20,
        justifyContent: 'flex-start',
    }
});
  