import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const accessories = [
  {
    title: 'Grooming Kit',
    detail: `• Pet brush for shedding\n• Nail clippers\n• Shampoo for sensitive skin\n\nHelps keep coat clean and healthy. Regular grooming prevents matting, reduces shedding, and promotes healthy skin.`,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Feeding Essentials',
    detail: `• Stainless steel food & water bowls\n• Airtight food storage\n• Measuring scoop\n\nPrevents overfeeding and keeps food fresh. Proper feeding tools encourage healthy eating habits and hygiene.`,
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Walking Gear',
    detail: `• Adjustable harness\n• Reflective leash\n• Waste bag holder\n\nEnsures safe and comfortable outdoor walks. Reflective gear increases visibility at night for safety.`,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Pet Bed & Blankets',
    detail: `• Orthopedic foam bed\n• Washable soft blankets\n• Anti-slip bottom\n\nPromotes better rest and joint support. A cozy bed improves pet comfort and sleep quality.`,
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Toys & Mental Stimulation',
    detail: `• Chew toys\n• Puzzle feeders\n• Tug ropes\n\nReduces boredom and encourages active play. Mental stimulation promotes behavioral health and reduces anxiety.`,
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Travel Carrier',
    detail: `• Ventilated soft-sided carrier\n• Seat belt loops for car safety\n• Lightweight and airline-approved\n\nKeeps your pet secure while traveling. Provides comfort and safety during trips.`,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=80',
  },
];

const essentials = [
  {
    title: 'First Aid Kit',
    detail: `• Bandages & gauze\n• Antiseptic wipes\n• Tweezers & scissors\n\nEssential for treating minor injuries and emergencies. Having a kit handy ensures prompt care.`,
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Pet ID Tags & Collars',
    detail: `• Personalized ID tags\n• Durable collars\n\nHelps identify your pet if lost. A proper collar with ID is a must for every pet.`,
    // Updated URL that should work reliably
    image: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Cleaning Supplies',
    detail: `• Pet-safe disinfectants\n• Stain & odor removers\n\nKeeps your home clean and hygienic. Safe cleaning prevents health issues for pets and humans.`,
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Litter Box & Scoop',
    detail: `• Easy-to-clean litter box\n• Odor control litter\n• Durable scoop\n\nNecessary for cat owners. Maintains cleanliness and reduces odors.`,
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Training Pads',
    detail: `• Absorbent pads\n• Leak-proof backing\n\nUseful for puppies or indoor training. Helps keep floors clean and dry.`,
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=400&q=80',
  },
];

export default function AccessoriesEssentials() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <Text style={styles.heading}>Recommended Pet Accessories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {accessories.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDetail}>{item.detail}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.heading}>Essential Items for All Pets</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {essentials.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDetail}>{item.detail}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    paddingTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 12,
    color: '#333',
  },
  horizontalScroll: {
    paddingLeft: 15,
    paddingBottom: 20,
  },
  card: {
    width: windowWidth * 0.7,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 15,
    elevation: 3,
    padding: 15,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#222',
  },
  cardDetail: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
