import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RingProgress from "./src/components/RingProgress";
import Value from "./src/components/value";

export default function App() {
  return (
    <View style={styles.container}>
      <RingProgress radius={150} strokeWidth={50} progress={0.1} />

      <View style={styles.values}>
        <Value label="Steps" value="1200" />
        <Value label="Distance" value="0,75km" />
        <Value label="Flights climbed" value="35" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 12,
  },
  values: {
    flexDirection: "row",
    gap: 25,
    flexWrap: "wrap",
    marginTop: 100,
  },
  // valueContainer: {
  //   marginVertical: 10,
  //   minWidth: "40%",
  // },
});
