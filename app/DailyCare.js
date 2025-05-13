import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const DailyCare = () => {
  const route = useRoute();
  const { pet } = route.params;

  const dailyCareInfo = {
    Bella: [
      {
        title: 'Feeding Schedule',
        detail:
          'Feed Bella twice a day:\n• Morning: 1 cup dry food\n• Evening: 1/2 can wet food\nAlways ensure fresh water is available.',
      },
      {
        title: 'Grooming Checklist',
        detail:
          'Daily grooming routine:\n• Brush coat every morning with a slicker brush\n• Clean ears with pet-safe wipes every 3 days\n• Trim nails every 2 weeks',
      },
      {
        title: 'Potty Routine',
        detail:
          'Take Bella out:\n• Morning walk: 7:00 AM\n• Evening walk: 6:30 PM\nReward good potty behavior with treats.',
      },
      {
        title: 'Mental Stimulation',
        detail:
          'Keep Bella mentally active:\n• 10 minutes puzzle toy in the afternoon\n• Practice basic commands (sit, stay, come)\n• Rotate toys every few days',
      },
      {
        title: 'Sleep Schedule',
        detail:
          'Bella naps after lunch and sleeps by 9 PM in her bed.\nKeep her area quiet and dim for better rest.',
      },
      {
        title: 'Hygiene Maintenance',
        detail:
          'Hygiene essentials:\n• Clean food/water bowls daily\n• Brush teeth every 2 days using pet-safe toothpaste',
      },
    ],
    Charlie: [
      {
        title: 'Feeding Schedule',
        detail:
          'Charlie eats twice daily:\n• 1.5 cups of kibble in the morning\n• 1 cup of rice and meat in the evening',
      },
      {
        title: 'Grooming Checklist',
        detail:
          'Brush coat every other day.\nClean ears weekly with vet-approved solution.',
      },
      {
        title: 'Potty Routine',
        detail:
          'Walk outside:\n• Morning: 6:30 AM\n• After lunch: 1:00 PM\n• Evening: 7:00 PM',
      },
      {
        title: 'Mental Stimulation',
        detail:
          'Give him a treat ball daily.\nTeach new commands on weekends.',
      },
      {
        title: 'Sleep Schedule',
        detail:
          'Charlie naps for 1 hour post-lunch.\nBedtime is 9:30 PM.',
      },
      {
        title: 'Hygiene Maintenance',
        detail:
          'Brush teeth twice a week.\nWipe paws after each walk.',
      },
    ],
    Max: [
      {
        title: 'Feeding Schedule',
        detail:
          'Max eats 3 small meals daily:\n• Morning, Noon, and Evening.\nUse grain-free food for better digestion.',
      },
      {
        title: 'Grooming Checklist',
        detail:
          'Brush Max’s coat daily.\nCheck for ticks weekly.',
      },
      {
        title: 'Potty Routine',
        detail:
          'Potty times:\n• 7 AM, 1 PM, and 8 PM.\nUse positive reinforcement.',
      },
      {
        title: 'Mental Stimulation',
        detail:
          'Hide treats around the house.\nShort obedience sessions daily.',
      },
      {
        title: 'Sleep Schedule',
        detail:
          'Max prefers sleeping near the window.\nLights off by 10 PM.',
      },
      {
        title: 'Hygiene Maintenance',
        detail:
          'Clean bowls daily.\nWipe eyes with damp cloth every 2 days.',
      },
    ],
    Luna: [
      {
        title: 'Feeding Schedule',
        detail:
          'Feed Luna twice a day with high-protein food.\nAdd carrots or sweet potato occasionally.',
      },
      {
        title: 'Grooming Checklist',
        detail:
          'Luna has a short coat – brush every 3 days.\nNail trims every 3 weeks.',
      },
      {
        title: 'Potty Routine',
        detail:
          'Luna goes out at 8 AM and 7 PM.\nKeep potty area clean.',
      },
      {
        title: 'Mental Stimulation',
        detail:
          'Luna enjoys puzzle feeders.\nRotate new toys weekly.',
      },
      {
        title: 'Sleep Schedule',
        detail:
          'Luna naps around noon.\nShe’s most active before bedtime at 9 PM.',
      },
      {
        title: 'Hygiene Maintenance',
        detail:
          'Brush teeth every other day.\nWipe paws and belly after walks.',
      },
    ],
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = dailyCareInfo[pet.name] || [];

  const openModal = (topic) => {
    setSelectedTopic(topic);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedTopic(null);
  };

  const formatText = (text) => {
    return text.split('\n').map((line, index) => (
      <Text key={index} style={styles.modalText}>{line}</Text>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daily Care for {pet.name}</Text>
      <Image source={{ uri: pet.image }} style={styles.image} />
      <View style={styles.card}>
        {topics.length > 0 ? (
          topics.map((topic, index) => (
            <View key={index} style={styles.topicRow}>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <TouchableOpacity
                style={styles.readButton}
                onPress={() => openModal(topic)}
              >
                <Text style={styles.readButtonText}>Read</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noTopics}>No daily care info available for {pet.name}</Text>
        )}
      </View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{selectedTopic?.title || 'No Title'}</Text>
            {selectedTopic?.detail && formatText(selectedTopic.detail)}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default DailyCare;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF9F0',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 12,
    padding: 20,
    elevation: 4,
  },
  topicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  topicTitle: {
    fontSize: 18,
    color: '#333',
  },
  readButton: {
    backgroundColor: '#2F80ED',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  readButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalCard: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2F80ED',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#999',
    paddingVertical: 10,
    borderRadius: 6,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noTopics: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});
