import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About Us</Text>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="paw" size={24} color="#007AFF" />
          <Text style={styles.sectionTitle}>App Description</Text>
        </View>
        <Text style={styles.bodyText}>
          PetCare is a mobile application designed to help pet owners manage the care and well-being of their pets throughout the year.
          It offers seasonal pet care tips, adoption and rescue information, and suggestions for pet accessories,  making pet care more
          accessible, informative, and organized.
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="help-circle-outline" size={24} color="#FFA500" />
          <Text style={styles.sectionTitle}>How to Use the App</Text>
        </View>
        <Text style={styles.bodyText}>
          • If you're new, tap “Sign Up” to create an account.{"\n"}
          • Already registered? Just “Login” with your credentials.{"\n"}
          • After logging in, you'll access the Dashboard with featured pets.{"\n"}
          • Use the top-right menu icon to explore options like Adoption, Accessories, Seasonal Tips, and more.{"\n"}
          • Tap on a pet to see its full details.{"\n"}
          • Read helpful tips for summer, rainy, and winter seasons to protect your pet’s health all year round.
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="code-slash" size={24} color="#28A745" />
          <Text style={styles.sectionTitle}>Developer Info</Text>
        </View>
        <Text style={styles.bodyText}>
          Developed by Jona Palacio as a school project, this app was created using React Native, React Navigation, and deployed as an APK via Expo.
          It serves as a practical demonstration of mobile app development and is intended for academic purposes only.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 25,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    color: '#333',
  },
  bodyText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});
