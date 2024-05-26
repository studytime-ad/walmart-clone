import { StyleSheet, Pressable, Text } from "react-native";

// Icons
import { Ionicons } from "@expo/vector-icons";

export function Cart() {
  return (
    <Pressable>
      <Text>
        <Ionicons size={28} style={styles.icon} name="cart-outline" />
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: "#FFFFFF",
  },
});
