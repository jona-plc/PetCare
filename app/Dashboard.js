import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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

const pets = [
  { id: 1, name: 'Bella', image: 'https://placedog.net/300/200?id=1' },
  { id: 2, name: 'Charlie', image: 'https://placedog.net/300/200?id=2' },
  { id: 3, name: 'Max', image: 'https://placedog.net/300/200?id=3' },
  { id: 4, name: 'Luna', image: 'https://placedog.net/300/200?id=4' },
  { id: 5, name: 'Rocky', image: 'https://placedog.net/300/200?id=5' },
  { id: 6, name: 'Daisy', image: 'https://placedog.net/300/200?id=6' },
  { id: 7, name: 'Milo', image: 'https://placedog.net/300/200?id=7' },
  { id: 8, name: 'Buddy', image: 'https://placedog.net/300/200?id=8' },
];

const Dashboard = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const goToDetails = (pet) => {
    navigation.navigate('PetDetails', { pet });
  };

  const goToAdoption = () => {
    toggleMenu();
    navigation.navigate('AdoptionRescue');
  };

  const goToAccessories = () => {
    toggleMenu();
    navigation.navigate('PetAccessories');
  };

  const goToSeasonalTips = () => {
    toggleMenu();
    navigation.navigate('SeasonalPetCare');
  };

  const goToAboutUs = () => {
    toggleMenu();
    navigation.navigate('AboutUs');
  };

  const goToContactVet = () => {
    toggleMenu();
    navigation.navigate('ContactVet'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Ionicons name="menu" size={32} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Welcome to PetCare Dashboard</Text>

      <ScrollView contentContainerStyle={styles.cardContainer}>
        {pets.map((pet) => (
          <View key={pet.id} style={styles.card}>
            <Image source={{ uri: pet.image }} style={styles.image} />
            <Text style={styles.petName}>{pet.name}</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => goToDetails(pet)}
            >
              <Text style={styles.detailsButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Modal
        visible={menuVisible}
        transparent
        animationType="slide"
        onRequestClose={toggleMenu}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.drawer}>
            <TouchableOpacity onPress={toggleMenu} style={styles.closeBtn}>
              <Ionicons name="close" size={30} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity onPress={goToAccessories}>
              <Text style={styles.menuItem}>Pet Accessories & Essentials</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToAdoption}>
              <Text style={styles.menuItem}>Adoption & Rescue</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToSeasonalTips}>
              <Text style={styles.menuItem}>Seasonal Pet Care Tips</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToAboutUs}>
              <Text style={styles.menuItem}>About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToContactVet}>
              <Text style={styles.menuItem}>Contact Vet</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.backdrop}
            onPress={toggleMenu}
            activeOpacity={1}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF',
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    alignSelf: 'center',
    color: '#333',
  },
  cardContainer: {
    paddingBottom: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  detailsButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    borderRadius: 8,
  },
  detailsButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
  },
  drawer: {
    width: 250,
    backgroundColor: '#fff',
    padding: 20,
    elevation: 5,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: '#333',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
