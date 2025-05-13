import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdoptionRescue from './AdoptionRescue';
import DailyCare from './DailyCare';
import Dashboard from './Dashboard';
import InquiryPage from './InquiryPage'; // Import your InquiryPage component
import LoginScreen from './LoginScreen';
import PetDetails from './PetDetails';
import RecommendedCare from './RecommendedCare';
import SignupScreen from './SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PetDetails" component={PetDetails} />
        <Stack.Screen name="RecommendedCare" component={RecommendedCare} />
        <Stack.Screen name="DailyCare" component={DailyCare} />
        <Stack.Screen name="AdoptionRescue" component={AdoptionRescue} />
        <Stack.Screen name="InquiryPage" component={InquiryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
