import { useColorScheme } from "react-native";

const Colors = {
  light: {
    primary: "#0071dc",
    background: "#FFFFFF",
    card: "#FFFFFF",
    text: "#000000",
    border: "none",
    notification: "#ffc220",
  },
  //   TODO: add dark color theme
  dark: {
    background: "black",
    text: "white",
  },
};

const useThemeColors = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return colors;
};

export default useThemeColors;
