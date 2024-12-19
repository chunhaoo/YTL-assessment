import { formatAmount, toggleMasking } from "@/app/services";
import { COLORS, styles } from "@/app/style";
import { TRANSACTIONS, TransactionTypes } from "@/app/transactions";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TransactionDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [mask, setMask] = useState(true);

  // Normally we use the ID to get the details with API, since we dont have API, i will just filter out the data.
  const details = TRANSACTIONS.find((data) => data.id === id);

  async function onMaskChange() {
    setMask(await toggleMasking(mask));
  }

  return (
    <SafeAreaView style={styles.layout}>
      <ScrollView style={styles.scrollView}>
        {!details ? (
          <View>Record not found.</View>
        ) : (
          <>
            <View style={{ marginBottom: 32 }}>
              <Text
                style={{
                  ...styles.font.title,
                  marginBottom: 16,
                }}
              >
                {`You've ${
                  details.transactionType === TransactionTypes.IN
                    ? "received"
                    : "transferred"
                }`}
              </Text>
              <Text
                style={{
                  ...styles.font.title,
                  marginBottom: 16,
                  color:
                    details.transactionType === TransactionTypes.IN
                      ? COLORS.green
                      : COLORS.red,
                }}
              >
                RM{mask ? "****.**" : formatAmount(details.amount)}
              </Text>
              <Text style={{ ...styles.font.title, marginBottom: 48 }}>
                {details.transactionType === TransactionTypes.IN
                  ? `from ${details.object}`
                  : `to ${details.object}`}
              </Text>

              <Text style={{ ...styles.font.subtitle, marginBottom: 16 }}>
                Remark:
              </Text>
              <Text style={{ marginBottom: 64 }}>{details.description}</Text>

              <Text
                style={{ ...styles.font.description, textAlign: "right" }}
              >{`transaction is made at ${details.date.toLocaleString()}`}</Text>
            </View>

            <TouchableOpacity
              onPress={onMaskChange}
              style={{ ...styles.button.secondary, marginBottom: 32 }}
            >
              <Text style={styles.font.button.default}>
                {mask ? "Show Amount" : "Hide Amount"}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
