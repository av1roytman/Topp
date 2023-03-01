import { useRef, useState } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoBox = ( props ) => {
        const video = useRef(null);
        const [status, setStatus] = useState({});
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
    );
}

export default VideoBox;