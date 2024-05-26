import { StyleSheet, TextInput } from "react-native";

export function SearchBar() {
  return <TextInput style={styles.searchBar} placeholder="Search" />;
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 10,
    width: "90%",
  },
});
