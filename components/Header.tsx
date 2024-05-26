import { StyleSheet, Text, TextInput, View, SafeAreaView } from "react-native";

// Components
import { SearchBar } from "./SearchBar";
import { Cart } from "./Cart";

export function Header() {
  return (
    <View style={styles.header}>
      <SafeAreaView>

        {/* TODO: Header Text */}
        <View >
          <Text style={styles.headerText}>Hi, Emilia</Text>
          <Text style={styles.headerText}>Member since 2022</Text>
        </View>

        {/* TODO: Search Bar */}
        <View style={styles.searchBarView}>
          <SearchBar />
          <Cart />
        </View>

        {/* TODO: Cart */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "40%",
    backgroundColor: "#0071dc",
  },
  headerText: {
    color: "white",
    paddingLeft: 10,
  },
  searchBarView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },

});
