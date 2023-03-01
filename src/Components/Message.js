import React from "react";

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";

function Message(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const clickHandle = () => {};
  return (
    <TouchableHighlight onPress={clickHandle}>
      <View style={styles.container}>
        <Image style={styles.profilePic}></Image>
        <Text>Avi {"\n"}What's crackin'?... 1 hr</Text>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 6,
    borderBottomWidth: "1",
    flexDirection: "row",
    alignItems: "center",
  },

  profilePic: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 50,
    margin: 10,
  },
});

export default Message;
