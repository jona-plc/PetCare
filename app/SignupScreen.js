// SignupScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Asset } from 'expo-asset';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const signupImage = Asset.fromModule(require('../assets/images/signup.png')).uri;

  const handleSignup = async () => {
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      setModalVisible(true);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setModalVisible(true);
      return;
    }
    try {
      const user = { username, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setError('Signup successful! Redirecting...');
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('LoginScreen');
      }, 2000);
    } catch (err) {
      setError('Signup failed');
      setModalVisible(true);
    }
  };

  return (
    <ImageBackground
      source={{ uri: signupImage }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>
        <Text style={styles.subtitle}>Just a few quick things to get started</Text>

        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={[styles.error, error === 'Signup successful! Redirecting...' && styles.success]}>
                {error}
              </Text>
            </View>
          </View>
        </Modal>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.togglePassword}>
            {showPassword ? 'Hide Password' : 'Show Password'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  success: {
    color: 'green',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  togglePassword: {
    color: '#fff',
    textAlign: 'right',
    marginBottom: 15,
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
