import { StyleSheet, Text, View, Button, SafeAreaView, Pressable } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';
import Colors from '../../../Colors';
import { useDispatch } from 'react-redux';
import { setTopVideo } from "../../../redux/videoSlice";

const Recording = () => {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();
  const [status, setStatus] = useState({});
  const videoPlayback = useRef(null);
  const [zoom, setZoom] = useState(0);
  const dispatch = useDispatch();

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
          resizeMode="cover"
          isLooping
          shouldPlay
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        >
          <View style={styles.topVideo}>
            <Icon 
              name="check-circle"
              size={35}
              style={styles.doneButton}
              type="feather"
              color={Colors.lightGrey}
              onPress={() => {
                dispatch(setTopVideo(video.uri));
                setVideo(undefined);
              }}
            />
          </View>
          <View style={styles.bottomVideo}>
            <Icon 
              name="trash-2"
              size={35}
              type="feather"
              color={Colors.lightGrey}
              onPress={() => setVideo(undefined)}
            />
            {hasMediaLibraryPermission ? 
              <Icon
                name="download"
                size={35}
                type="feather"
                color={Colors.lightGrey}
                onPress={saveVideo}
              /> : undefined}
            <Icon 
              name="share"
              size={35}
              type="feather"
              color={Colors.lightGrey}
              onPress={shareVideo}
            />
          </View>
        </Video>
      </Pressable>
    );
  }

  const changeZoom = (event) => {
    if (event.nativeEvent.scale > 1 && zoom < 0.995) {
      setZoom(zoom + 0.005);
    }
    if (event.nativeEvent.scale < 1 && zoom > 0.005) {
      setZoom(zoom - 0.005);
    }
  };

  return (
    <PinchGestureHandler onGestureEvent={(event) => changeZoom(event)}>
      <Camera 
        style={styles.container} 
        ref={cameraRef}
        zoom={zoom}
      >
        <View style={styles.topCamera}>

        </View>
        <View style={styles.buttonContainer}>
          <Icon
            name="circle"
            size={50}
            type="material"
            color={isRecording? "#f50" : "#fff"}
            onPress={isRecording ? stopRecording : recordVideo}
          />
        </View>
      </Camera>
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    alignSelf: "center",
  },
  doneButton: {
    margin: 10
  },
  topCamera: {
    height: "90%"
  },
  topVideo: {
    alignItems: "flex-end",
    height: "93%",
    zIndex: 1
  },
  bottomVideo: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  video: {
    flex: 1,
  }
});

export default Recording;
