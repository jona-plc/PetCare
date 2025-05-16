import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const PetDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { pet } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
   
      <Image source={{ uri: pet.image }} style={styles.image} />

      <Text style={styles.name}>{pet.name}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecommendedCare', { pet })}
      >
        <Text style={styles.buttonText}>Recommended Care</Text>
      </TouchableOpacity>

      {/* Daily Care Button - Navigate to DailyCare Screen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DailyCare', { pet })}
      >
        <Text style={styles.buttonText}>Daily Care</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('TrainingTips', { pet })}
     >     
     <Text style={styles.buttonText}>Training Tips</Text>
     </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HealthConcerns', { pet })}
      >
        <Text style={styles.buttonText}>Health Concerns</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PetDetails;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 80,
    backgroundColor: '#EAF6FF',
    minHeight: '100%',
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30,
  },
  button: {
    width: '80%',
    backgroundColor: '#B0B0B0',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Cochin',
    color: '#000',
  },
});
