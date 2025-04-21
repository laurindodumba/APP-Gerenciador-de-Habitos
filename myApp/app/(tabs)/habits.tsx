// app/habits.tsx
import React, { useState } from 'react';
import { View, FlatList, Alert, Text, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';
import HabitCard from '../components/HabitCard';

export default function HabitsScreen() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: 'Beber água',
      description: 'Beber 8 copos de água por dia',
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddHabit = () => {
    if (!newTitle.trim()) {
      Alert.alert('Erro', 'Informe o título do hábito.');
      return;
    }

    const newHabit = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
    };

    setHabits(prev => [...prev, newHabit]);
    setNewTitle('');
    setNewDescription('');
    setModalVisible(false);
  };

  const handleDelete = (id: number) => {
    Alert.alert('Confirmação', 'Deseja apagar esse hábito?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Apagar',
        style: 'destructive',
        onPress: () => setHabits(prev => prev.filter(h => h.id !== id)),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Hábitos</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HabitCard
            habit={item}
            onPress={() => {}}
            onEdit={() => Alert.alert('Editar', item.title)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
      />

      {/* Botão flutuante */}
      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* Modal para adicionar hábito */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Novo Hábito</Text>
            <TextInput
              placeholder="Título"
              style={styles.input}
              value={newTitle}
              onChangeText={setNewTitle}
            />
            <TextInput
              placeholder="Descrição"
              style={[styles.input, { height: 80 }]}
              multiline
              value={newDescription}
              onChangeText={setNewDescription}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleAddHabit} style={styles.saveButton}>
                <Text style={{ color: '#fff' }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  fab: {
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 30,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    padding: 16,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    padding: 10,
  },
  saveButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 10,
  },
});
