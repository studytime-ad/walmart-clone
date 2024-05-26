import { StyleSheet, View, Text } from "react-native";

// Components
import { Header } from "@/components/Header";

export default function Search() {
  return (
    <View>
      <Header pageName={"search"} />
      <Text>xxxxx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
