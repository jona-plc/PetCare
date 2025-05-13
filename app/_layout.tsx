// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
