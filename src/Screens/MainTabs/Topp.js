import { Text, View, StyleSheet, Button, SafeAreaView, Pressable } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import { useRef, useState } from "react";
import VideoBox from "./Components/VideoBox";

const Topp = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text>This is the Topp page</Text>
      </View>
      <VideoBox styles={videoStyles}/>
    </SafeAreaView>
  );
};

const videoStyles = StyleSheet.create({
  body: {
    backgroundColor: "#aff",
    height: "90%",
    width: "100%"
  },
  video: {
    width: "100%",
    height: "100%",
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    backgroundColor: "#bbb",
    width: "100%",
    height: "10%"
  },
});

export default Topp;
