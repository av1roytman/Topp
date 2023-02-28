import { Text, View, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsername,
  setPassword,
  setProfilePicUri,
} from "../../redux/userSlice";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Home page</Text>
      <Button
        title="Go back to Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
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

export default Home;
