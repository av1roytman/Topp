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

function GridPost(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const clickHandle = () => {};
  return (
    <TouchableHighlight style={styles.container} onPress={clickHandle}>
      <View>
        <Image style={styles.image} source={props.listing.uri} />
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "33.33%",
    aspectRatio: 1,
    borderWidth: "1",
  },
  description: {
    position: "absolute",
    width: "100%",
    height: "15%",
    zIndex: 1,
    bottom: 0,
    paddingLeft: 5,
  },
  image: {
    height: "100%",
    width: "100%",
    aspectRatio: 1,
  },
});

export default GridPost;
