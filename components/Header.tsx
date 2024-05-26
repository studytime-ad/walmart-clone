import { StyleSheet, Image, Text, TextInput, View, SafeAreaView } from "react-native";

// Components
import { SearchBar } from "./SearchBar";
import { Cart } from "./Cart";



export function Header() {
  return (
    <View style={styles.header}>
      <SafeAreaView>
        {/* Header Text */}
        <View style={styles.greetingRow}>
          <Text style={styles.headerText}>Hi, Emilia</Text>          
          <Image style={styles.walmartImage} source={require('../assets/images/walmart_logo_icon.png')} />
          <Cart />
        </View>

        {/* TODO: Search Bar */}
        <View style={styles.searchBarView}>
          <SearchBar />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "40%",
    backgroundColor: "#0071dc",
  },
  greetingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    width: "90%",
  },
  headerText: {
    color: "white",
  },
  walmartImage: {
    width: 30,
    height: 30
  },
  searchBarView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
});
