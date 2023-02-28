import { Text, View, StyleSheet, Button } from "react-native";

const Topp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Topp page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Topp;
