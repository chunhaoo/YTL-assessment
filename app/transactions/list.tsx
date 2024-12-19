import { COLORS } from "@/app/style";
import { ITransaction, TransactionTypes } from "@/app/transactions";
import { Link } from "expo-router";
import { Text, TextStyle, View } from "react-native";
import { StyleProps } from "react-native-reanimated";

export default function TransactionList(props: any) {
  return props.data.map((data: ITransaction, index: number) => (
    <Link
      href="/transactions"
      key={data.id}
      style={{
        fontWeight: "bold",
        marginBottom: index === props.data.length - 1 ? 0 : 32,
      }}
    >
      <View style={STYLE_CARD}>
        <View>
          <Text style={STYLE_CARD_FONT.from}>{data.from}</Text>
          <Text style={STYLE_CARD_FONT.description}>{data.description}</Text>
          <Text>{data.date.toLocaleString()}</Text>
        </View>

        <Text
          style={{
            ...STYLE_CARD_FONT.amount,
            color:
              data.transactionType === TransactionTypes.IN
                ? "#31cc65"
                : "#cc3131",
          }}
        >
          {data.transactionType === TransactionTypes.IN ? "+" : "-"}RM{" "}
          {props.enableMask ? "****.**" : formatAmount(data.amount)}
        </Text>
      </View>
    </Link>
  ));
}

function formatAmount(value: number): string {
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(value);
}

interface IStyleCardFonts {
  amount: TextStyle;
  description: TextStyle;
  from: TextStyle;
}

const STYLE_CARD: StyleProps = {
  backgroundColor: COLORS.white,
  borderRadius: 16,
  elevation: 8,
  fontSize: 20,
  fontWeight: "bold",
  padding: 16,
  shadowColor: COLORS.grey,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.5,
  shadowRadius: 10,
  width: "100%",
  flexDirection: "row",
};

const STYLE_CARD_FONT: IStyleCardFonts = {
  amount: {
    fontSize: 16,
    flex: 1,
    fontWeight: "bold",
    textAlign: "right",
  },
  description: {
    marginBottom: 8,
  },
  from: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
};
