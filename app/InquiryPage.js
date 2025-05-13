import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const InquiryPage = ({ route, navigation }) => {
  const { pet } = route.params;

  const handleSubmit = () => {
    // Here, you can send the form data to your backend or show a confirmation
    Alert.alert('Inquiry Submitted', `Thank you for your interest in ${pet.name}!`);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{pet.action}</Text>
      <Image source={{ uri: pet.image }} style={styles.petImage} />
      <Text style={styles.petInfo}>{pet.breed} • {pet.age}</Text>
      <Text style={styles.petDescription}>{pet.description}</Text>

      <TextInput placeholder="Your Name" style={styles.input} />
      <TextInput placeholder="Contact Number" keyboardType="phone-pad" style={styles.input} />
      <TextInput placeholder="Address" style={styles.input} />
      <TextInput
        placeholder="Why do you want to adopt/rescue?"
        multiline
        numberOfLines={4}
        style={[styles.input, { height: 100 }]}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Inquiry</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#4A90E2',
  },
  petImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  petInfo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },
  petDescription: {
    fontSize: 14,
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default InquiryPage;
