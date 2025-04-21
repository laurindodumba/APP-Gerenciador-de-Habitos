import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Atualiza data e hora a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Imagem */}
      <Image
        source={require('.././../assets/images/habito.png')}
        style={styles.image}
      />

      {/* Título */}
      <Text style={styles.title}>GERENCIADOR DE HÁBITOS</Text>

      {/* Data e hora */}
      <Text style={styles.datetime}>
        {currentDateTime.toLocaleDateString()} - {currentDateTime.toLocaleTimeString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  datetime: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});
