import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Authenticator from "expo-local-authentication";
import { COLORS, styles } from "@/app/style";

export default function Index() {
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
    // navigate to homepage
  }

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.signInPage}>
        <Text style={{ ...styles.font.title, marginBottom: 32 }}>Welcome!</Text>

        <Text style={{ ...styles.font.description, marginBottom: 16 }}>
          You may sign in with your username and password.
        </Text>

        <TouchableOpacity
          style={styles.button.primary}
          onPress={onSignInWithHardwareAuthentication}
        >
          <Text style={styles.font.button.default}>Sign In</Text>
        </TouchableOpacity>

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
      </View>
    </SafeAreaView>
  );
}
