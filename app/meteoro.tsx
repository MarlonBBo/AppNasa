import { TabNavigation } from '@/components/TabNavigation';
import { Meteor } from '@/interface/MeterorsInterface';
import { apiMeteoro } from '@/service/api';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';


export default function Meteors () {
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeteors = async () => {
      try {

        const today = new Date().toISOString().split('T')[0];

        const response = await apiMeteoro(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}`
        );
        if (!response.ok) {
            throw new Error("Falha ao buscar dados");
        }
        const data = await response.json();
        const meteorList = data.near_earth_objects[today] || [];
        setMeteors(meteorList);
      }
      finally {
        setLoading(false);
      }
    };

    fetchMeteors();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={meteors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.text}>
                Tamanho: {item.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km
              </Text>
              <Text style={styles.text}>
                Velocidade: {Number(item.close_approach_data[0]?.relative_velocity.kilometers_per_hour).toFixed(2)} km/h
              </Text>
              <Text style={styles.text}>
                Distância: {Number(item.close_approach_data[0]?.miss_distance.kilometers).toFixed(2)} km
              </Text>
              <Text style={[styles.text, item.is_potentially_hazardous_asteroid ? styles.danger : styles.safe]}>
                {item.is_potentially_hazardous_asteroid ? '🚨 Perigoso' : '✅ Seguro'}
              </Text>
            </View>
          )}
        />
      )}
      <TabNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    marginBottom: 10 ,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  danger: {
    color: '#FF6347',
    fontWeight: 'bold',
  },
  safe: {
    color: '#32CD32',
    fontWeight: 'bold',
  },
});


