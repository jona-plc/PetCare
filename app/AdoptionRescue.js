// app/AdoptionRescue.js
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const pets = [
  {
    name: 'Daisy',
    breed: 'Golden Retriever',
    age: '3 Years Old',
    image: 'https://placedog.net/600/400?id=20',
    action: 'Adopt Daisy',
    description: 'Daisy is a friendly, active dog looking for a loving home.',
  },
  {
    name: 'Matt',
    breed: 'German Shepherd',
    age: '2 Years Old',
    image: 'https://placedog.net/600/400?id=21',
    action: 'Rescue Matt',
    description: 'Matt is a loyal dog in need of a second chance.',
  },
  {
    name: 'Luna',
    breed: 'Labrador',
    age: '1 Year Old',
    image: 'https://placedog.net/600/400?id=22',
    action: 'Adopt Luna',
    description: 'Luna is an energetic dog ready for a new family.',
  },
  {
    name: 'Max',
    breed: 'Bulldog',
    age: '4 Years Old',
    image: 'https://placedog.net/600/400?id=23',
    action: 'Rescue Max',
    description: 'Max is a calm and loving bulldog looking for a home.',
  },
  {
    name: 'Bella',
    breed: 'Beagle',
    age: '5 Months Old',
    image: 'https://placedog.net/600/400?id=24',
    action: 'Adopt Bella',
    description: 'Bella is a playful and sweet puppy in need of a forever home.',
  },
];

const recentlyAdoptedPets = [
  { name: 'Charlie', image: 'https://placedog.net/300/200?id=60' },
  { name: 'Lucy', image: 'https://placedog.net/300/200?id=61' },
  { name: 'Rocky', image: 'https://placedog.net/300/200?id=62' },
  { name: 'Milo', image: 'https://placedog.net/300/200?id=63' },
];

const recentlyRescuedPets = [
  { name: 'Zoe', image: 'https://placedog.net/300/200?id=64' },
  { name: 'Oscar', image: 'https://placedog.net/300/200?id=65' },
  { name: 'Chloe', image: 'https://placedog.net/300/200?id=66' },
  { name: 'Jack', image: 'https://placedog.net/300/200?id=67' },
];

const AdoptionRescue = () => {
  const router = useRouter();

  const handleAdoptClick = (pet) => {
    router.push({
      pathname: '/InquiryPage',
      params: {
        name: pet.name,
        breed: pet.breed,
        age: pet.age,
        description: pet.description,
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="heart-circle-outline" size={48} color="#ff5c5c" />
        <Text style={styles.headerTitle}>Adoption & Rescue</Text>
        <Text style={styles.headerSubtitle}>Give them a second chance.</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardScroll}
      >
        {pets.map((pet, index) => (
          <View key={index} style={styles.featuredCard}>
            <Image source={{ uri: pet.image }} style={styles.featuredImage} />
            <Text style={styles.petName}>{pet.name}</Text>
            <Text style={styles.petInfo}>{pet.breed} • {pet.age}</Text>
            <Text style={styles.petDesc}>{pet.description}</Text>
            <TouchableOpacity style={styles.adoptButton} onPress={() => handleAdoptClick(pet)}>
              <Text style={styles.adoptButtonText}>{pet.action}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>How to Adopt</Text>
      <View style={styles.steps}>
        <View style={styles.step}>
          <MaterialIcons name="search" size={30} color="#4A90E2" />
          <Text style={styles.stepText}>Browse Pets</Text>
        </View>
        <View style={styles.step}>
          <Ionicons name="document-text-outline" size={30} color="#4A90E2" />
          <Text style={styles.stepText}>Submit Form</Text>
        </View>
        <View style={styles.step}>
          <Ionicons name="home-outline" size={30} color="#4A90E2" />
          <Text style={styles.stepText}>Home Visit</Text>
        </View>
        <View style={styles.step}>
          <Ionicons name="checkmark-done-circle-outline" size={30} color="#4A90E2" />
          <Text style={styles.stepText}>Get Approved</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recently Adopted</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyScroll}>
        {recentlyAdoptedPets.map((pet, index) => (
          <View key={index} style={styles.storyCard}>
            <Image source={{ uri: pet.image }} style={styles.storyImage} />
            <Text style={styles.storyText}>Adopted: {pet.name}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Recently Rescued</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyScroll}>
        {recentlyRescuedPets.map((pet, index) => (
          <View key={index} style={styles.storyCard}>
            <Image source={{ uri: pet.image }} style={styles.storyImage} />
            <Text style={styles.storyText}>Rescued: {pet.name}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Meet our Volunteers</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyScroll}>
        {[{ name: 'Anna', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
          { name: 'John', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
          { name: 'Grace', image: 'https://randomuser.me/api/portraits/women/46.jpg' },
          { name: 'Mike', image: 'https://randomuser.me/api/portraits/men/47.jpg' },
        ].map((volunteer, index) => (
          <View key={index} style={styles.storyCard}>
            <Image source={{ uri: volunteer.image }} style={styles.storyImage} />
            <Text style={styles.storyText}>Volunteer: {volunteer.name}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.adoptButton} onPress={() => alert('Browse all pets feature coming soon!')}>
        <Text style={styles.adoptButtonText}>Browse All Pets for Adoption</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 20 },
  header: { alignItems: 'center', marginBottom: 25 },
  headerTitle: { fontSize: 26, fontWeight: 'bold', marginTop: 5 },
  headerSubtitle: { fontSize: 16, color: '#666', marginTop: 4 },
  cardScroll: { marginBottom: 25 },
  featuredCard: { width: 280, backgroundColor: '#fff', borderRadius: 12, padding: 15, elevation: 3, marginRight: 20 },
  featuredImage: { width: '100%', height: 180, borderRadius: 10 },
  petName: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  petInfo: { fontSize: 14, color: '#888', marginBottom: 8 },
  petDesc: { fontSize: 14, color: '#444', marginBottom: 12 },
  adoptButton: { backgroundColor: '#4A90E2', paddingVertical: 10, borderRadius: 8, alignItems: 'center', marginTop: 5 },
  adoptButtonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginTop: 10, color: '#333' },
  steps: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  step: { alignItems: 'center', flex: 1 },
  stepText: { marginTop: 5, fontSize: 12, color: '#444', textAlign: 'center' },
  storyScroll: { marginBottom: 25 },
  storyCard: { width: 150, backgroundColor: '#fff', borderRadius: 10, marginRight: 15, elevation: 2, overflow: 'hidden' },
  storyImage: { width: '100%', height: 100 },
  storyText: { padding: 10, fontSize: 14, fontWeight: 'bold', color: '#333' },
});

export default AdoptionRescue;
