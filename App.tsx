import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RingProgress from "./src/components/RingProgress";
import Value from "./src/components/value";

{
  /* <RingProgress progress={(0.8)} />; */
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Health tracker!</Text>

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
  },
  // valueContainer: {
  //   marginVertical: 10,
  //   minWidth: "40%",
  // },
});
