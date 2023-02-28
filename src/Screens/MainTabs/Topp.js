import { Text, View, StyleSheet, Button, SafeAreaView, Pressable } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import { useRef, useState } from "react";

const Topp = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text>This is the Topp page</Text>
      </View>
      <View style={styles.body}>
        <Pressable
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        >
          <Video
            ref={video}
            style={styles.video}
            source={{
              // uri: 'https://www.youtube.com/watch?v=5gPvi3iXIdM&list=PLxabZQCAe5fjzyawndGLeP1GkJTAjZlKL&index=10'
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls={false}
            resizeMode="contain"
            isLooping
            shouldPlay
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#aff",
    height: "90%",
    width: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    backgroundColor: "#bbb",
    width: "100%",
    height: "10%"
  },
  video: {
    width: "100%",
    height: "100%",
  }
});

export default Topp;
