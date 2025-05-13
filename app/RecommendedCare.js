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

const RecommendedCare = () => {
  const route = useRoute();
  const { pet } = route.params;

  const careTopics = {
    Bella: [
      {
        title: 'Vitamins',
        detail:
          'Bella needs daily multivitamins with Omega-3 and calcium. Administer after morning meals. Here are some recommended vitamins:\n\n• Nutri-Vet Multi-Vite Chewables\n• Zesty Paws Omega Bites\n• Pet-Tabs Plus Daily Vitamin\n\nConsult your vet before introducing new supplements.',
      },
      {
        title: 'Bath',
        detail:
          'Give Bella a bath every 2 weeks using gentle, dog-friendly shampoo. Always dry her coat thoroughly.\n\nSuggested Products:\n• Burt’s Bees Oatmeal Shampoo\n• Earthbath All Natural Pet Shampoo\n• Vet’s Best Hypo-Allergenic Shampoo',
      },
      {
        title: 'Exercise',
        detail:
          'Bella needs physical activity daily for both mental and physical health.\n\nSuggestions:\n• 30-minute walk in the morning\n• Fetch using soft ball or toy\n• Hide & Seek indoors\n• Tug-of-war with a rope toy',
      },
      {
        title: 'Hydration',
        detail:
          'Ensure Bella drinks clean, fresh water throughout the day. Tips:\n\n• Change water 2x daily\n• Add ice cubes on hot days\n• Consider a pet water fountain for flowing water\n• Monitor signs of dehydration: dry gums, lethargy, sunken eyes',
      },
    ],
    Charlie: [
      {
        title: 'Vitamins',
        detail:
          'Charlie benefits from joint-support vitamins and multivitamins.\n\nSuggested Vitamins:\n• Dasuquin Joint Health Chewables\n• VetriScience Laboratories Multivitamin\n\nConsult with a vet for dosage specifics.',
      },
      {
        title: 'Bath',
        detail:
          'Charlie\'s coat should be bathed once every 3 weeks.\n\nRecommended Shampoos:\n• Pet Pleasant Lavender & Oatmeal\n• TropiClean Hypo-Allergenic Shampoo\n\nBe sure to dry completely after the bath.',
      },
      {
        title: 'Exercise',
        detail:
          'Charlie loves his daily run around the yard. Suggestions for exercise:\n• 20-minute walk in the morning\n• 10 minutes of fetch\n• Tug-of-war with his favorite toy\n• Playtime in the yard',
      },
      {
        title: 'Hydration',
        detail:
          'Keep fresh water available at all times.\n\n• Change water every day\n• Place water bowl in a shaded area on hot days\n• Observe for signs of dehydration (dry mouth, lethargy)',
      },
    ],
    Max: [
      {
        title: 'Vitamins',
        detail:
          'Max needs a daily multivitamin to support his health.\n\nSuggested Vitamins:\n• Nutri-Vet Senior Vitamins\n• Zesty Paws Omega Bites\n\nConsult with a vet for exact dosage.',
      },
      {
        title: 'Bath',
        detail:
          'Max enjoys his bath time and should be bathed once every 4 weeks.\n\nRecommended Products:\n• PetCare Oatmeal Shampoo\n• Vet’s Best Hypoallergenic Shampoo\n• Earthbath Natural Pet Shampoo',
      },
      {
        title: 'Exercise',
        detail:
          'Max loves outdoor activities.\n\nSuggestions:\n• 30-minute walk in the morning\n• Running in the backyard\n• Playing with toys like a frisbee',
      },
      {
        title: 'Hydration',
        detail:
          'Max stays hydrated with fresh water at all times.\n\n• Change water every 24 hours\n• Monitor his drinking habits for dehydration signs like dry gums',
      },
    ],
    Luna: [
      {
        title: 'Vitamins',
        detail:
          'Luna needs a special blend of vitamins to keep her coat shiny.\n\nSuggested Vitamins:\n• Pet Naturals of Vermont Daily Multivitamin\n• Omega-3 Fish Oil\n• Zesty Paws All-in-One Multivitamin',
      },
      {
        title: 'Bath',
        detail:
          'Luna requires a bath once a month to maintain her fluffy coat.\n\nRecommended Shampoos:\n• Earthbath All Natural Pet Shampoo\n• Burt’s Bees Natural Dog Shampoo\n• Vet’s Best Hypoallergenic Shampoo',
      },
      {
        title: 'Exercise',
        detail:
          'Luna enjoys a balanced routine of play and exercise.\n\nSuggestions:\n• 20-minute morning walk\n• Interactive play with toys\n• Tug-of-war and fetch',
      },
      {
        title: 'Hydration',
        detail:
          'Luna should always have access to fresh water.\n\n• Change her water twice daily\n• Add ice cubes in the summer for added coolness\n• Keep her water bowl in a shaded spot',
      },
    ],
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = careTopics[pet.name] || [];

  const openModal = (topic) => {
    setSelectedTopic(topic);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedTopic(null);
  };

  const formatText = (text) => {
    // Split the text by newlines and return an array of Text components
    return text.split('\n').map((line, index) => (
      <Text key={index} style={styles.modalText}>{line}</Text>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recommended Care for {pet.name}</Text>
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
          <Text style={styles.noTopics}>No care topics available for {pet.name}</Text>
        )}
      </View>

      {/* Modal for topic details */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{selectedTopic?.title || 'No Title Available'}</Text>
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

export default RecommendedCare;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5FAFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B3B3B',
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
    backgroundColor: '#007AFF',
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
    color: '#007AFF',
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
