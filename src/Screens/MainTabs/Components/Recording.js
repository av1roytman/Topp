import { StyleSheet, Text, View, Button, SafeAreaView, Pressable } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { Icon } from '@rneui/themed';

const Recording = () => {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();
  const [status, setStatus] = useState({});
  const videoPlayback = useRef(null);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined || hasMicrophonePermission === undefined) {
    return <Text>Requestion permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted.</Text>
  }

  let recordVideo = () => {
    setIsRecording(true);
    let options = {
      quality: "1080p",
      maxDuration: 60,
      mute: false
    };

    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  let stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  if (video) {
    let shareVideo = () => {
      shareAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };

    let saveVideo = () => {
      MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };

    return (
      <View style={styles.container}>
        <Pressable
          style={styles.container}
          onPress={() =>
            status.isPlaying ? videoPlayback.current.pauseAsync() : videoPlayback.current.playAsync()
          }
        >
          <Video
            ref={videoPlayback}
            style={styles.video}
            source={{uri: video.uri}}
            resizeMode='contain'
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
        </Pressable>
        <Button title="Share" onPress={shareVideo} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={saveVideo} /> : undefined}
        <Button title="Discard" onPress={() => setVideo(undefined)} />
      </View>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.topCamera}>

      </View>
      <View style={styles.buttonContainer}>
        {/* <Button title={isRecording ? "Stop Recording" : "Record Video"} onPress={isRecording ? stopRecording : recordVideo} /> */}
        <Icon
          raised
          name="circle"
          type="material"
          color={isRecording? "#f50" : "#fff"}
          onPress={isRecording ? stopRecording : recordVideo}
        />
      </View>
    </Camera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    alignSelf: "center",
  },
  topCamera: {
    height: "90%"
  },
  video: {
    flex: 1,
    alignSelf: "stretch"
  }
});

export default Recording;
