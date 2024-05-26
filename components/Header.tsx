import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";

// Components
import { SearchBar } from "./SearchBar";
import { Cart } from "./Cart";

// Hooks
import useThemeColors from "@/hooks/useThemeColors";

interface HeaderProps {
  pageName: string;
}

export function Header({ pageName }: HeaderProps) {
  const colors = useThemeColors();

  return (
    <View style={[styles.header, { backgroundColor: colors.primary }]}>
      <SafeAreaView>
        {pageName === "shop" ? (
          <>
            {/* Header Text */}
            <View style={styles.greetingRow}>
              <Text style={styles.headerText}>Hi, Emilia</Text>
              <Image
                style={styles.walmartImage}
                source={require("../assets/images/walmart_logo_icon.png")}
              />
            </View>
          </>
        ) : (
          <></>
        )}
        {/* TODO: Search Bar */}
        <View style={styles.searchBarView}>
          <SearchBar />
          <Cart />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "40%",
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
    height: 30,
    right: "500%",
  },
  searchBarView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
  },
});
