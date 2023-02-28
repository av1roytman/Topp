import { Text, View, StyleSheet, Button } from "react-native";

const Upload = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Upload page</Text>
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

export default Upload;
