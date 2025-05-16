import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TrainingTips = () => {
  const route = useRoute();
  const { pet } = route.params;

  const trainingData = {
  Bella: [
    {
      title: 'Basic Obedience',
      detail: 'Start with basic commands: Sit, Stay, Come. Use a calm tone and reward her immediately with a treat or praise after she follows the command.',
    },
    {
      title: 'Loose Leash Walking',
      detail: 'Train Bella to walk beside you. Stop moving when she pulls, and reward her only when the leash is slack. Consistency is key.',
    },
    {
      title: 'Crate Comfort',
      detail: 'Make the crate a safe and happy space. Feed Bella inside, leave toys there, and never use the crate as punishment. Keep sessions short at first.',
    },
    {
      title: 'Focus & Attention',
      detail: 'Teach her to respond to her name. Say "Bella!" in a cheerful tone. When she looks at you, reward immediately. This builds trust and recall.',
    },
  ],
  Charlie: [
    {
      title: 'Impulse Control',
      detail: 'Practice commands like “Wait” or “Leave it” before meals or play. This teaches Charlie patience and prevents food aggression.',
    },
    {
      title: 'Greeting Manners',
      detail: 'When Charlie jumps up, turn away and ignore him. Reward only when he greets politely with all paws on the ground.',
    },
    {
      title: 'Short Training Bursts',
      detail: 'Keep sessions 5-10 minutes long, 2-3 times a day. Dogs learn best in short, fun sessions rather than long drills.',
    },
    {
      title: 'Handling Desensitization',
      detail: 'Gently touch Charlie’s paws, ears, and tail while offering treats. This prepares him for vet exams or grooming.',
    },
  ],
  Max: [
    {
      title: 'Clicker Conditioning',
      detail: 'Clicker training uses a sound (click) to mark good behavior, followed by a reward. Start by clicking and giving Max a treat to build association.',
    },
    {
      title: 'Controlled Socialization',
      detail: 'Introduce Max to new people, environments, and pets gradually. Watch his body language. Reward calm and confident behavior.',
    },
    {
      title: 'Calm Greetings',
      detail: 'Train Max to sit when meeting someone. Use treats or a favorite toy to reinforce this calm behavior instead of jumping.',
    },
    {
      title: 'Quiet Training',
      detail: 'When Max barks unnecessarily, say “Quiet” in a firm voice. Wait for silence, then reward. Never shout or punish, just be consistent.',
    },
  ],
  Luna: [
    {
      title: 'Potty Routine',
      detail: 'Take Luna out first thing in the morning, after meals, and before bedtime. Use the same phrase like “Go potty” and praise immediately after.',
    },
    {
      title: 'Fun Trick Sessions',
      detail: 'Luna is a fast learner! Teach her tricks like “Spin,” “High Five,” or “Bow.” Keep it playful and end on a positive note.',
    },
    {
      title: 'Noise Confidence',
      detail: 'Expose Luna to household sounds (vacuum, doorbell) gradually. Reward calm reactions. This prevents future fear or anxiety.',
    },
    {
      title: 'Stay & Recall',
      detail: 'Practice “Stay” at short distances. Slowly increase the distance and time. For “Come,” always reward enthusiastically to make it rewarding.',
    },
  ],
};



  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTip, setSelectedTip] = useState(null);

  const tips = trainingData[pet.name] || [];

  const openModal = (tip) => {
    setSelectedTip(tip);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedTip(null);
  };

  const formatText = (text) => {
    return text.split('\n').map((line, index) => (
      <Text key={index} style={styles.modalText}>{line}</Text>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Training Tips for {pet.name}</Text>
      <Image source={{ uri: pet.image }} style={styles.image} />
      <View style={styles.card}>
        {tips.length > 0 ? (
          tips.map((tip, index) => (
            <View key={index} style={styles.topicRow}>
              <Text style={styles.topicTitle}>{tip.title}</Text>
              <TouchableOpacity style={styles.readButton} onPress={() => openModal(tip)}>
                <Text style={styles.readButtonText}>Read</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noTopics}>No training tips available for {pet.name}</Text>
        )}
      </View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{selectedTip?.title}</Text>
            {selectedTip?.detail && formatText(selectedTip.detail)}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default TrainingTips;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E8F0FF',
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
