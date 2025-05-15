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

const HealthConcerns = () => {
  const route = useRoute();
  const { pet } = route.params;

  const healthInfo = {
  Bella: [
    {
      title: 'Allergies',
      detail: 'Bella is allergic to:\n• Chicken-based food\n• Dust mites\nSymptoms include itchy paws, red eyes, or skin rashes.',
    },
    {
      title: 'Vet Visits',
      detail: 'Next checkup: June 2025.\nLast vaccine: March 2025 (Rabies, Parvo).\nAnnual heartworm test recommended.',
    },
    {
      title: 'Weight Monitoring',
      detail: 'Bella tends to gain weight quickly.\nDaily walks and a low-fat diet are essential.\nAvoid table scraps.',
    },
  ],
  Charlie: [
    {
      title: 'Ear Infections',
      detail: 'Charlie is prone to ear infections.\nClean ears weekly using vet-approved solution.\nVisit vet if ears are red, smelly, or itchy.',
    },
    {
      title: 'Dental Health',
      detail: 'Brush Charlie\'s teeth twice a week.\nHe enjoys dental chews—offer after meals.\nWatch for bleeding gums or bad breath.',
    },
    {
      title: 'Seasonal Allergies',
      detail: 'During spring, Charlie may sneeze or have watery eyes.\nLimit time outside during high pollen days.',
    },
  ],
  Max: [
    {
      title: 'Joint Health',
      detail: 'Max has mild arthritis symptoms.\nAdd glucosamine supplements and keep him active with light exercises.',
    },
    {
      title: 'Digestive Issues',
      detail: 'Max has a sensitive stomach:\n• Avoid fatty treats\n• No table scraps\n• Stick to prescribed kibble',
    },
    {
      title: 'Skin Irritation',
      detail: 'Occasional dry patches around elbows.\nUse oatmeal shampoo and monitor during hot weather.',
    },
  ],
  Luna: [
    {
      title: 'Flea Sensitivity',
      detail: 'Luna has allergic reactions to flea bites.\nApply flea prevention monthly.\nWash bedding weekly and vacuum carpets.',
    },
    {
      title: 'Vaccination Records',
      detail: 'All core vaccines are up to date.\nNext heartworm test: August 2025.\nDeworming due: July 2025.',
    },
    {
      title: 'Eye Discharge',
      detail: 'Occasional mild discharge in mornings.\nWipe gently with damp cloth.\nConsult vet if it turns green or thick.',
    },
  ],
};


  const [modalVisible, setModalVisible] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState(null);

  const concerns = healthInfo[pet.name] || [];

  const openModal = (concern) => {
    setSelectedConcern(concern);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedConcern(null);
  };

  const formatText = (text) => {
    return text.split('\n').map((line, index) => (
      <Text key={index} style={styles.modalText}>{line}</Text>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Health Concerns for {pet.name}</Text>
      <Image source={{ uri: pet.image }} style={styles.image} />
      <View style={styles.card}>
        {concerns.length > 0 ? (
          concerns.map((concern, index) => (
            <View key={index} style={styles.topicRow}>
              <Text style={styles.topicTitle}>{concern.title}</Text>
              <TouchableOpacity style={styles.readButton} onPress={() => openModal(concern)}>
                <Text style={styles.readButtonText}>Read</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noTopics}>No health info available for {pet.name}</Text>
        )}
      </View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{selectedConcern?.title}</Text>
            {selectedConcern?.detail && formatText(selectedConcern.detail)}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default HealthConcerns;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FCEFF9',
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
    color: '#EB5757',
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
