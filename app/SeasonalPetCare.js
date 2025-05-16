import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const seasonalTips = {
  summer: [
    "Always provide fresh water, especially after exercise.",
    "Walk your pet early morning or late afternoon to avoid the heat.",
    "Avoid hot pavements to prevent paw burns.",
    "Keep your pets groomed to help stay cool, especially long-haired breeds.",
    "Use pet-safe sunscreen to protect their skin from sunburn.",
    "Take extra care with senior pets, as they may be more sensitive to heat.",
    "Consider purchasing a cooling mat to keep your pets comfortable.",
  ],
  rainy: [
    "Dry your pet after walks to avoid fungal infections and skin irritation.",
    "Use pet raincoats or boots to keep them comfortable.",
    "Watch out for ticks and fleas, especially after rain.",
    "Keep their ears dry, especially for floppy-eared breeds, to avoid ear infections.",
    "Ensure their bedding is dry to prevent them from catching a cold.",
  ],
  winter: [
    "Provide warm bedding indoors and consider using heated pet pads.",
    "Limit outdoor time in freezing temperatures to prevent frostbite.",
    "Protect paws from salt, snow, and ice by using booties or paw balm.",
    "Feed your pet slightly more (with vet approval) for added energy during the colder months.",
    "Keep your pet active indoors with toys and activities to prevent winter blues.",
  ],
};

const SeasonalPetCare = () => {
  const [isSummerModalVisible, setIsSummerModalVisible] = useState(false);
  const [isRainyModalVisible, setIsRainyModalVisible] = useState(false);
  const [isWinterModalVisible, setIsWinterModalVisible] = useState(false);

  const toggleSummerModal = () => {
    setIsSummerModalVisible(!isSummerModalVisible);
  };

  const toggleRainyModal = () => {
    setIsRainyModalVisible(!isRainyModalVisible);
  };

  const toggleWinterModal = () => {
    setIsWinterModalVisible(!isWinterModalVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Seasonal Pet Care Tips</Text>
      <Text style={styles.subtitle}>Ensure your pet stays happy and healthy throughout the year!</Text>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="sunny" size={32} color="#FF6347" />
          <Text style={styles.sectionTitle}>Summer Tips</Text>
        </View>
        {seasonalTips.summer.slice(0, 3).map((tip, index) => (
          <Text key={index} style={styles.tipText}>• {tip}</Text>
        ))}
        <TouchableOpacity style={styles.button} onPress={toggleSummerModal}>
          <Text style={styles.buttonText}>See More Summer Tips</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="rainy" size={32} color="#1E90FF" />
          <Text style={styles.sectionTitle}>Rainy Season Tips</Text>
        </View>
        {seasonalTips.rainy.slice(0, 3).map((tip, index) => (
          <Text key={index} style={styles.tipText}>• {tip}</Text>
        ))}
        <TouchableOpacity style={styles.button} onPress={toggleRainyModal}>
          <Text style={styles.buttonText}>See More Rainy Tips</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="snow" size={32} color="#00BFFF" />
          <Text style={styles.sectionTitle}>Winter Tips</Text>
        </View>
        {seasonalTips.winter.slice(0, 3).map((tip, index) => (
          <Text key={index} style={styles.tipText}>• {tip}</Text>
        ))}
        <TouchableOpacity style={styles.button} onPress={toggleWinterModal}>
          <Text style={styles.buttonText}>See More Winter Tips</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isSummerModalVisible}
        onRequestClose={toggleSummerModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleSummerModal}>
              <Ionicons name="close" size={30} color="#333" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>More Summer Tips</Text>
            {seasonalTips.summer.map((tip, index) => (
              <Text key={index} style={styles.modalTipText}>• {tip}</Text>
            ))}
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isRainyModalVisible}
        onRequestClose={toggleRainyModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleRainyModal}>
              <Ionicons name="close" size={30} color="#333" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>More Rainy Tips</Text>
            {seasonalTips.rainy.map((tip, index) => (
              <Text key={index} style={styles.modalTipText}>• {tip}</Text>
            ))}
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isWinterModalVisible}
        onRequestClose={toggleWinterModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleWinterModal}>
              <Ionicons name="close" size={30} color="#333" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>More Winter Tips</Text>
            {seasonalTips.winter.map((tip, index) => (
              <Text key={index} style={styles.modalTipText}>• {tip}</Text>
            ))}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default SeasonalPetCare;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 15,
    color: '#333',
  },
  tipText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
    paddingLeft: 10,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  modalTipText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
    paddingLeft: 10,
    lineHeight: 22,
  },
});
