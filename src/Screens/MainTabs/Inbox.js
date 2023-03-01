import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Message from "../../Components/Message";
import { setUsername, setPassword } from "../../redux/userSlice";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Colors";

const Inbox = () => {
  const navigation = useNavigation;
  const username = useSelector((state) => state.user.username);
  const profilePicUri = useSelector((state) => state.user.profilePicUri);
  const myListings = useSelector((state) => state.user.myListings);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.unreadIcon}>3</Text>
        <Text style={styles.usernameText}>{username}</Text>
        <AntDesign
          name="form"
          size={24}
          color="black"
          style={styles.composeIcon}
        />
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  accountInfo: {
    width: "100%",
    height: "50%",
    alignItems: "flex-start",
    borderBottomWidth: 1,
  },
  accountInfoTop: {
    height: "35%",
    width: "100%",
    flexDirection: "row",
  },
  accountInfoBottom: {
    height: "65%",
    width: "100%",
    flexDirection: "column",
  },
  unreadIcon: {
    position: "relative",
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: Colors.errorRed,
    color: Colors.white,
    textAlign: "center",
    paddingTop: 1,
    backgroundColor: Colors.errorRed,
    overflow: "hidden",
    margin: 10,
  },
  bio: {
    marginLeft: 10,
    marginRight: 10,
  },
  body: {
    height: "93%",
    width: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttons: {
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
    margin: 5,
  },
  composeIcon: {
    position: "absolute",
    right: 30,
  },
  container: {
    width: "100%",
    height: "100%",
  },

  numbers: {
    margin: 0,
  },
  profilePic: {
    width: 100,
    height: 100,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 5,
    borderRadius: 100,
    borderWidth: 3,
  },
  topBar: {
    height: "7%",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "600",
  },
  followersContainer: {
    width: "65%",
    marginTop: 30,
    flexDirection: "row",
  },
  followers: {
    width: "33.3333%",
    height: "100%",
    alignItems: "center",
  },

  flatList: {
    height: "50%",
    width: "100%",
  },
});

export default Inbox;
