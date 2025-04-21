// app/components/HabitCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface HabitCardProps {
  habit: {
    id: number;
    title: string;
    description: string;
  };
  onPress: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function HabitCard({ habit, onPress, onEdit, onDelete }: HabitCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{habit.title}</Text>
      <Text style={styles.description}>{habit.description}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit}>
          <Text style={styles.edit}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.delete}>Apagar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f3f3f3',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    color: '#007bff',
  },
  delete: {
    color: '#ff4444',
  },
});
