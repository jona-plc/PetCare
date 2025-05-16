import { Ionicons } from '@expo/vector-icons';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ContactVet = () => {
  const openPhoneDialer = () => {
    Linking.openURL('tel:+639123456789');
  };

  const openEmail = () => {
    Linking.openURL('mailto:vetcare@example.com?subject=Pet Consultation&body=Hello, I would like to inquire about...');
  };

  const openMap = () => {
    Linking.openURL('https://www.google.com/maps/search/veterinary+clinic+near+me/');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contact a Veterinarian</Text>
      <Text style={styles.subtitle}>Reach out to a vet for health concerns, emergencies, or general care advice.</Text>

      <View style={styles.card}>
        <Ionicons name="call" size={28} color="#007AFF" />
        <View style={styles.info}>
          <Text style={styles.label}>Call a Vet</Text>
          <Text style={styles.description}>+63 956 037 6568</Text>
        </View>
        <TouchableOpacity onPress={openPhoneDialer}>
          <Ionicons name="arrow-forward" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Ionicons name="mail" size={28} color="#FFA500" />
        <View style={styles.info}>
          <Text style={styles.label}>Email Support</Text>
          <Text style={styles.description}>jonapalacio06@gmail.com</Text>
        </View>
        <TouchableOpacity onPress={openEmail}>
          <Ionicons name="arrow-forward" size={24} color="#FFA500" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Ionicons name="location" size={28} color="#28A745" />
        <View style={styles.info}>
          <Text style={styles.label}>Find Nearby Clinics</Text>
          <Text style={styles.description}>View veterinary clinics near your area.</Text>
        </View>
        <TouchableOpacity onPress={openMap}>
          <Ionicons name="arrow-forward" size={24} color="#28A745" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ContactVet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F9FF',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 25,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
