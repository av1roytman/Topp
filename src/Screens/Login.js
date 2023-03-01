import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setPassword } from "../redux/userSlice";
import { useState } from "react";
import Colors from "../Colors";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const login = () => {
    dispatch(setPassword(passwordText));
    dispatch(setUsername(usernameText));
    navigation.navigate("TabNav");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}></View>

      <View style={styles.body}>
        <Text style={styles.logo}>Topp</Text>
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
        <Text style={{ color: Colors.linkText, paddingLeft: 200 }}>
          Forgot Password?
        </Text>
        <Pressable style={styles.login} onPress={login}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Login")}></Pressable>
      </View>
      <View style={styles.bottomBar}>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: Colors.Black }}>Don't have an account? </Text>
            <Text style={{ color: Colors.linkText }}>Create One!</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "80%",
    width: "100%",
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
    width: "80%",
    height: "7%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.greyBox,
    padding: 5,
    margin: 10,
  },
  logo: {
    fontSize: 50,
    fontWeight: "600",
    borderWidth: 1,
    borderRadius: 35,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.greyBox,
    borderColor: Colors.greyBox,
    overflow: "hidden",
    color: Colors.white,
    margin: 80,
  },
  topBar: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    width: "80%",
    height: "7%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.linkText,
    backgroundColor: Colors.linkText,
    justifyContent: "center",
    margin: 50,
    alignItems: "center",
  },
  loginText: {
    color: Colors.white,
  },
});

export default Login;
