import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in"></Stack.Screen>
      <Stack.Screen name="home"></Stack.Screen>
    </Stack>
  );
}
