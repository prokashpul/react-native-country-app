import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Countries from "./Components/Countries";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", fontSize: 18 }}>
        Wow My First React Apps
      </Text>
      <Countries></Countries>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
