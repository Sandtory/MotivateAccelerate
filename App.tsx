import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type ValueProps = {
  label: string;
  value: string;
};

const Value = ({ label, value }) => (
  <View style={styles.valueContainer}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

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
  valueContainer: {
    // marginVertical: 10,
    // minWidth: "40%",
  },
  label: {
    color: "#AFB3BE",
    fontSize: 20,
  },
  value: {
    fontSize: 45,
    color: "#AFB3BE",
    fontWeight: "500",
  },
});
