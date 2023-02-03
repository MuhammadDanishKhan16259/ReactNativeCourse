import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NetflixCard from "./src/components/NetflixCard";
import FlatListDemo from "./src/components/screens/FlatListDemo";

export default function App() {
  return (
    <View>
      <FlatListDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
