import { useRef, useState } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import { useSelector, useDispatch } from "react-redux";

const VideoBox = ( props ) => {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const topVideoUri = useSelector((state) => state.video.topVideoUri);
    return (
        <View style={props.styles.body}>
            <Pressable
            onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
            >
                <Video
                    ref={video}
                    style={props.styles.video}
                    source={{
                    uri: topVideoUri,
                    }}
                    useNativeControls={false}
                    resizeMode="contain"
                    isLooping
                    shouldPlay
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </Pressable>
        </View>
    );
}

export default VideoBox;