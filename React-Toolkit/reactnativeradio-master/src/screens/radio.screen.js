import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Pressable, BackHandler} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BarIndicator} from 'react-native-indicators';
import {useFocusEffect} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import {
  useTrackPlayerEvents,
  TrackPlayerEvents,
  STATE_PLAYING,
  STATE_BUFFERING,
  STATE_PAUSED,
} from 'react-native-track-player';

import Text from '../components/text.component';
import Header from '../components/header.component';
import {language} from '../languages';
import colors from '../styles/colors.style';
import useGlobal from '../store';
import metricsStyle from '../styles/metrics.style';

const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greys[4],
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    maxHeight: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 24,
    color: colors.greys[0],
    fontSize: 22,
  },
  image: {
    height: metricsStyle.width / 2,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  playPausePressable: {
    marginTop: 24,
    height: 96,
    width: 96,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
    borderWidth: 2,
    borderColor: colors.primaries[2],
  },
  indicator: {
    flex: 0,
  },
  status: {
    color: colors.primaries[2],
    fontSize: 16,
  },
  volumeContainer: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    marginTop: 12,
    width: metricsStyle.width / 2,
  },
});

function RadioScreen({navigation}) {
  const {radio: radioLanguage} = language;
  const [radio, actions] = useGlobal(state => state.radio, actions);
  const {selected, volume} = radio;
  const [playerState, setPlayerState] = useState(null);
  const isPlaying = playerState === STATE_PLAYING;
  const isBuffering = playerState === STATE_BUFFERING;
  const isPaused = playerState === STATE_PAUSED;
  const statusText = isPlaying
    ? radioLanguage.playing
    : isBuffering
    ? radioLanguage.buffering
    : isPaused
    ? radioLanguage.paused
    : radioLanguage.stopped;

  useEffect(() => {
    if (selected !== null && !isPlaying) {
      actions.playRadio(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useTrackPlayerEvents(events, event => {
    if (event.type === TrackPlayerEvents.PLAYBACK_ERROR) {
      actions.setAlertBox(
        true,
        radioLanguage.errorTitle,
        radioLanguage.errorMessage.replace(
          '{{name}}',
          selected.name.toUpperCase(),
        ),
      );
    }
    if (event.type === TrackPlayerEvents.PLAYBACK_STATE) {
      setPlayerState(event.state);
    }
  });

  const onBackPress = () => {
    actions.stopRadio(true);
    navigation.goBack();
    return true; // Override backButton statndard behavior, return false if you do not want to override
  };

  useFocusEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );
    return () => subscription.remove();
  });

  return (
    <>
      <Header back onBackPress={onBackPress} disabled={isBuffering} />
      <View style={styles.container}>
        {selected !== null && (
          <>
            <Image style={styles.image} source={{uri: selected.image}} />
            <Text style={styles.title}>{selected.name}</Text>
            <Text style={styles.status}>{statusText.toUpperCase()}</Text>
            {isBuffering ? (
              <View style={styles.playPausePressable}>
                <BarIndicator
                  color={colors.primaries[2]}
                  count={5}
                  size={28}
                  style={styles.indicator}
                />
              </View>
            ) : (
              <Pressable
                onPress={
                  isPlaying
                    ? () => actions.stopRadio()
                    : () =>
                        isBuffering ? () => {} : actions.playRadio(selected)
                }
                style={styles.playPausePressable}
                android_ripple={{
                  color: colors.white,
                  borderless: false,
                  radius: 18,
                }}>
                <FontAwesome
                  name={isPlaying ? 'stop' : 'play'}
                  size={48}
                  color={colors.primaries[2]}
                />
              </Pressable>
            )}
            <View style={styles.volumeContainer}>
              <FontAwesome
                name={
                  volume === 1
                    ? 'volume-up'
                    : volume === 0
                    ? 'volume-off'
                    : 'volume-down'
                }
                size={28}
                color={colors.greys[0]}
              />
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={colors.primaries[2]}
              thumbTintColor={colors.primaries[2]}
              maximumTrackTintColor={colors.greys[2]}
              onValueChange={value => actions.setDeviceVolume(value)}
              disabled={isBuffering}
              value={volume}
            />
          </>
        )}
      </View>
    </>
  );
}

export default RadioScreen;
