import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutUs from './AboutUs';
import AdoptionRescue from './AdoptionRescue';
import ContactVet from './ContactVet';
import DailyCare from './DailyCare';
import Dashboard from './Dashboard';
import HealthConcerns from './HealthConcerns';
import InquiryPage from './InquiryPage';
import LoginScreen from './LoginScreen';
import PetDetails from './PetDetails';
import RecommendedCare from './RecommendedCare';
import SeasonalPetCare from './SeasonalPetCare';
import SignupScreen from './SignupScreen';
import TrainingTips from './TrainingTips';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/* Authentication Screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        
        {/* Main Screens */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="PetDetails" component={PetDetails} />
        <Stack.Screen name="RecommendedCare" component={RecommendedCare} />
        <Stack.Screen name="DailyCare" component={DailyCare} />
        <Stack.Screen name="AdoptionRescue" component={AdoptionRescue} />
        <Stack.Screen name="InquiryPage" component={InquiryPage} />
        <Stack.Screen name="TrainingTips" component={TrainingTips} />
        <Stack.Screen name="HealthConcerns" component={HealthConcerns} />
        <Stack.Screen name="SeasonalPetCare" component={SeasonalPetCare} />
        <Stack.Screen name="ContactVet" component={ContactVet} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
