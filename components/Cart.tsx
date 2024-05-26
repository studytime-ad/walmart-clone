import { StyleSheet, Pressable, Text } from "react-native";

// Icons
import { Ionicons } from "@expo/vector-icons";

export function Cart() {
  return (
    <Pressable style={styles.cartStyle}>
      <Text>
        <Ionicons size={28} style={styles.icon} name="cart-outline" />
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cartStyle: {
    marginLeft: 10,
  },
  icon: {
    color: "#FFFFFF",
  },
});
