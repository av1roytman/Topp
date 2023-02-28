import { Text, View, StyleSheet, Button } from "react-native";

const Inbox = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Inbox page</Text>
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

export default Inbox;
