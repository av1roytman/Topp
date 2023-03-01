import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setPassword } from "../redux/userSlice";
import { useState } from "react";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [usernameText, setUsernameText] = useState("TestUsername");
  const [passwordText, setPasswordText] = useState("TestPassword");

  const login = () => {
    dispatch(setPassword(passwordText));
    dispatch(setUsername(usernameText));
    navigation.navigate("TabNav");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text>Welcome!</Text>
        <Text>Login Below</Text>
      </View>

      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={usernameText}
          onChangeText={setUsernameText}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={passwordText}
          onChangeText={setPasswordText}
        />
        <Button title="Login" onPress={login} />
      </View>
      <View style={styles.bottomBar}>
        <Button
          title="Don't have an account? Create one!"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "80%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBar: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "60%",
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    margin: 10,
  },
  topBar: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
