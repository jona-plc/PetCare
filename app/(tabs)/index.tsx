import { Asset } from 'expo-asset';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  // Load asset and get URI (works for web and native)
  const logoAsset = Asset.fromModule(require('../../assets/images/logo.png'));

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/LoginScreen');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: logoAsset.uri }} style={styles.logo} />
      <Text style={styles.title}>Welcome to PetCare</Text>
      <Text style={styles.tagline}>
        Discover everything you need to raise a happy, healthy pet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 20,
  },
  logo: {
    width: 200, height: 200, marginBottom: 30, resizeMode: 'contain',
  },
  title: {
    fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10,
  },
  tagline: {
    fontSize: 16, textAlign: 'center', color: '#555',
  },
});
