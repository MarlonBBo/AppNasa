import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Image, ImageBackground } from "expo-image"
import api from "@/service/api";
import { Data } from "@/types/Data";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

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
        <View style={styles.container} >
            <StatusBar style="dark"/>
            <ImageBackground
                source={ data?.hdurl }
                style={styles.backgroundImage}
            >
                <View style={styles.info}>
                    <Text style={styles.title}>{data?.title}</Text>
                    <Text style={styles.desc}>{data?.explanation}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    info: {
        
      flex: 1,
      padding: 20,
    },
    title: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
      paddingTop: 20,
    },
    desc: {
        marginTop: 20,
        color: "white",
        fontStyle: "italic",
        fontWeight: "regular"
    }
  });
  