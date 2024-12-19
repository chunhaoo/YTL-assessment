import { styles } from "@/app/style";
import TransactionList from "@/app/transactions/list";
import * as Authenticator from "expo-local-authentication";
import { useState } from "react";
import { Button, RefreshControl, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TransactionScreen() {
  const [mask, setMask] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  function onRefresh() {
    setRefreshing(true);

    const timeout = setTimeout(() => {
      //call api to get latest data
      setRefreshing(false);

      clearTimeout(timeout);
    }, 500);
  }

  async function toggleMasking() {
    if (!mask) {
      setMask(true);
      return;
    }

    // authorize user with device authentication to disable masking
    const hasAuthentication =
      (await Authenticator.hasHardwareAsync()) &&
      (await Authenticator.isEnrolledAsync());

    if (!hasAuthentication) {
      setMask(false);
      return;
    }
    const result: any = await Authenticator.authenticateAsync();

    if (!result.success && result?.error === "user_cancel") {
      return;
    }

    if (!result.success) {
      alert("Authentication failed.");
      return;
    }
    setMask(false);
  }

  return (
    <SafeAreaView style={styles.layout}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          ></RefreshControl>
        }
        contentContainerStyle={styles.scrollView}
        scrollEnabled={true}
      >
        <Text style={{ ...styles.font.title, marginBottom: 48 }}>
          Recent Transactions
        </Text>
        <Button onPress={toggleMasking} title="show" />

        <TransactionList data={TRANSACTIONS} enableMask={mask} />
      </ScrollView>
    </SafeAreaView>
  );
}

export enum TransactionTypes {
  IN,
  OUT,
}

export interface ITransaction {
  amount: number;
  date: Date;
  description: string;
  from: string;
  id: string;
  transactionType: TransactionTypes;
}

export const TRANSACTIONS: ITransaction[] = [
  {
    amount: 1234.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 1",
    id: "T1",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 2345.67,
    date: new Date("2020-10-02T115:00"),
    description: "Grocery",
    from: "User 2",
    id: "T2",
    transactionType: TransactionTypes.OUT,
  },
  {
    amount: 34567.56,
    date: new Date("2020-10-02T10:00"),
    description: "Grocery",
    from: "User 3",
    id: "T3",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 45678.9,
    date: new Date("2020-10-02T14:00"),
    description: "Grocery",
    from: "User 4",
    id: "T4",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 5678.9,
    date: new Date("2020-10-02T15:30"),
    description: "Grocery",
    from: "User 5",
    id: "T5",
    transactionType: TransactionTypes.OUT,
  },
  {
    amount: 6789.0,
    date: new Date("2020-10-02T13:59"),
    description: "Grocery",
    from: "User 6",
    id: "T6",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 78900.12,
    date: new Date("2020-10-02T16:15"),
    description: "Grocery",
    from: "User 7",
    id: "T7",
    transactionType: TransactionTypes.OUT,
  },
  {
    amount: 8901234.22,
    date: new Date("2020-10-02T17:00"),
    description: "Grocery",
    from: "User 8",
    id: "T8",
    transactionType: TransactionTypes.OUT,
  },
  {
    amount: 90123.45,
    date: new Date("2020-10-02T18:00"),
    description: "Grocery",
    from: "User 9",
    id: "T9",
    transactionType: TransactionTypes.OUT,
  },
  {
    amount: 12345.56,
    date: new Date("2020-10-02T18:45"),
    description: "Grocery",
    from: "User 10",
    id: "T10",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 234567.98,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 11",
    id: "T11",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 135236.56,
    date: new Date("2020-10-02T15:00"),
    description: "Grocery",
    from: "User 12",
    id: "T12",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 4312.56,
    date: new Date("2020-10-02T09:00"),
    description: "Grocery",
    from: "User 13",
    id: "T13",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 5867.43,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 14",
    id: "T14",
    transactionType: TransactionTypes.OUT,
  },
  {
    amount: 6784.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 15",
    id: "T15",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 253.23,
    date: new Date("2020-10-02T19:00"),
    description: "Grocery",
    from: "User 16",
    id: "T16",
    transactionType: TransactionTypes.OUT,
  },
  {
    amount: 1234.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 17",
    id: "T17",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 1234.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 18",
    id: "T18",
    transactionType: TransactionTypes.OUT,
  },
  {
    amount: 1234.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 19",
    id: "T19",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 1234.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 20",
    id: "T20",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 1234.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 21",
    id: "T21",
    transactionType: TransactionTypes.OUT,
  },
  {
    amount: 1234.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 22",
    id: "T22",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 1234.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 23",
    id: "T23",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 1234.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 24",
    id: "T24",
    transactionType: TransactionTypes.IN,
  },
  {
    amount: 1234.56,
    date: new Date("2020-10-02T13:00"),
    description: "Grocery",
    from: "User 25",
    id: "T25",
    transactionType: TransactionTypes.OUT,
  },
];
