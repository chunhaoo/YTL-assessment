import SignInForm from "@/app/screens/sign-in/sign-in-form";
import { COLORS, styles } from "@/app/style";
import * as Authenticator from "expo-local-authentication";
import { Link, router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignInScreen() {
  async function onSignInWithHardwareAuthentication() {
    const hasAuthentication =
      (await Authenticator.hasHardwareAsync()) &&
      (await Authenticator.isEnrolledAsync());

    if (!hasAuthentication) {
      alert("There is no authentication set up in this device.");
      return;
    }
    const result: any = await Authenticator.authenticateAsync();

    if (!result.success && result?.error === "user_cancel") {
      return;
    }

    if (!result.success) {
      alert(
        "Authentication failed. You may try to sign in with your username and password instead."
      );
      return;
    }
    router.replace("/transactions");
  }

  return (
    <SafeAreaView style={styles.layout}>
      <ScrollView
        contentContainerStyle={{
          ...styles.scrollView,
          justifyContent: "center",
        }}
      >
        <Text style={{ ...styles.font.title, marginBottom: 32 }}>Welcome!</Text>

        <Text style={{ ...styles.font.description, marginBottom: 16 }}>
          You may sign in with your username and password.
        </Text>

        <SignInForm></SignInForm>

        {/* Separtor */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{ flex: 1, height: 1, backgroundColor: COLORS.navy }}
          ></View>

          <View>
            <Text
              style={{
                marginVertical: 32,
                ...styles.font.subtitle,
                color: "#020085",
                fontWeight: "bold",
                width: 48,
                textAlign: "center",
              }}
            >
              OR
            </Text>
          </View>

          <View
            style={{ flex: 1, height: 1, backgroundColor: COLORS.navy }}
          ></View>
        </View>

        <TouchableOpacity
          style={styles.button.secondary}
          onPress={onSignInWithHardwareAuthentication}
        >
          <Text style={styles.font.button.default}>
            Sign In with Device Authentication
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
