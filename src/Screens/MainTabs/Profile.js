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
import { setUsername, setPassword } from "../../redux/userSlice";

const Profile = () => {
  const navigation = useNavigation;
  const username = useSelector((state) => state.user.username);
  const profilePicUri = useSelector((state) => state.user.profilePicUri);
  const myListings = useSelector((state) => state.user.myListings);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.usernameText}>{username}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.accountInfo}>
          <View style={styles.accountInfoTop}>
            <Image style={styles.profilePic} source={profilePicUri} />
            <View style={styles.followersContainer}>
              <View style={styles.followers}>
                <Text style={styles.numbers}>100</Text>

                <Text style={styles.numbers}>Posts</Text>
              </View>
              <View style={styles.followers}>
                <Text style={styles.numbers}>100</Text>

                <Text style={styles.numbers}>Followers</Text>
              </View>
              <View style={styles.followers}>
                <Text style={styles.numbers}>100</Text>

                <Text style={styles.numbers}>Following</Text>
              </View>
            </View>
          </View>
          <View style={styles.accountInfoBottom}>
            <Text style={styles.nameText}>Evan Emsley</Text>
            <Text style={styles.bio}>
              1/3 of Arboretum, Phi Delta Theta{"\n"}
              evan.emsley.us
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable>
                <Text style={styles.buttons}>Edit Profile</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.buttons}>Share Profile</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.flatList}>
          <FlatList
            numColumns={3}
            horizontal={false}
            contentContainerStyle={styles.flatList}
            scrollEnabled={false}
            data={myListings}
            renderItem={({ item }) => <GridListing listing={item} />}
          />
        </View>
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
    alignItems: "flex-start",
    justifyContent: "center",
  },
  usernameText: {
    marginLeft: 20,
    fontSize: 18,
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

export default Profile;
