import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function InquiryPage() {
  const { name, breed, age, description } = useLocalSearchParams();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);

  const handleSubmit = () => {
    if (!fullName.trim() || !email.trim() || !reason.trim()) {
      setModalMessage('Please fill out all fields.');
      setModalSuccess(false);
    } else {
      setModalMessage('Thank you for your interest! Your inquiry has been submitted.');
      setModalSuccess(true);
     
      setFullName('');
      setEmail('');
      setReason('');
    }
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.petTitle}>{name}</Text>
        <Text style={styles.petSubInfo}>{breed} • {age}</Text>
        <Text style={styles.petDescription}>{description}</Text>
      </View>

      <Text style={styles.formHeader}>Adoption/Rescue Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Full Name"
        placeholderTextColor="#888"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email Address"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Why are you interested in this pet?"
        placeholderTextColor="#888"
        multiline
        value={reason}
        onChangeText={setReason}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Inquiry</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={[styles.modalContainer, modalSuccess ? styles.successModal : styles.failModal]}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    elevation: 3,
  },
  petTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  petSubInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  petDescription: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  formHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    fontSize: 16,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
  },
  successModal: {
    backgroundColor: '#D4EDDA',
  },
  failModal: {
    backgroundColor: '#F8D7DA',
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
