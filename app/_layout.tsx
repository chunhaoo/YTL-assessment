import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in"></Stack.Screen>
      <Stack.Screen name="transactions"></Stack.Screen>
    </Stack>
  );
}
