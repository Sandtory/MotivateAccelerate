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

      <View style={{ flexDirection: "row" }}>
        <Value label="Steps" value="1200" />
        <Value label="Distance" value="0,75km" />
      </View>
      <Value label="Flights climbed" value="35" />

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
  label: {
    color: "#AFB3BE",
    fontSize: 20,
  },
  value: {
    fontSize: 35,
    color: "#AFB3BE",
    fontWeight: "500",
  },
  valueContainer: {
    marginRight: 50,
    marginVertical: 10,
  },
});
