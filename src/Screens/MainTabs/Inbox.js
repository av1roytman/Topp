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
import GridListing from "../../Components/GridListing";
import Message from "../../Components/Message";
import { setUsername, setPassword } from "../../redux/userSlice";

const Inbox = () => {
  const navigation = useNavigation;
  const username = useSelector((state) => state.user.username);
  const profilePicUri = useSelector((state) => state.user.profilePicUri);
  const myListings = useSelector((state) => state.user.myListings);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Image style={styles.unreadIcon}></Image>
        <Text style={styles.usernameText}>{username}</Text>
        <Image style={styles.composeIcon}></Image>
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
    position: "absolute",
    left: 20,
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 50,
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
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  container: {
    width: "100%",
    height: "100%",
  },
  nameText: {
    fontWeight: "600",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
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
  },
  usernameText: {
    fontSize: 18,
    position: "absolute",
    left: 60,
    bottom: 15,
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
