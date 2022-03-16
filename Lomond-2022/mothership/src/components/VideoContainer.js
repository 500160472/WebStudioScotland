
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

// THEME
import S from '../constants/c1--Styles';
import C from '../constants/c2--Colours';
import O from '../constants/c3--Objects';
import T from '../constants/c4--Text';
import L from '../constants/c5--Links';
import A from '../constants/c6--Actions';
import N from '../constants/c7--Navigation';
import D from '../constants/c8--Data';
// create a functional component called VideoContainer that will be used in the Roof component.
export default function VideoContainer(props){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    // [, {width: width, height: height}]]
    return (
    <View style={S.boxedContainerHighlight}>
      <Video source={{uri: props.url}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        style={S.video}
        useNativeControls
        // shouldPlay
        isLooping
        ref={video}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
                    <TouchableOpacity  style={S.buttonDark} onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                  }>
                <Text style={S.boldSubTitle}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
              </TouchableOpacity>
    </View>
  );
}   


