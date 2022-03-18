import TrackPlayer from 'react-native-track-player';
import SystemSetting from 'react-native-system-setting';

export const updateAllRadioState = (store, value) => {
  try {
    const radio = {
      ...store.state.radio,
      ...value,
    };
    store.setState({ ...store.state, radio });
  } catch (error) {
    console.log(error);
  }
};

export const updateRadioState = (store, property, value) => {
  try {
    const radio = {
      ...store.state.radio,
      [property]: value,
    };
    store.setState({ ...store.state, radio });
  } catch (error) {
    console.log(error);
  }
};

export const clearRadioState = store => {
  try {
    const radio = {
      ...store.state.radio,
      selected: null,
    };
    store.setState({ ...store.state, radio });
  } catch (error) {
    console.log(error);
  }
};

export const goToRadio = (store, navigation, radio) => {
  try {
    store.actions.updateRadioState('selected', radio);
    navigation.push('Radio');
  } catch (error) {
    console.log(error);
  }
};

export const playRadio = async (store, radio) => {
  const radioStream = {
    id: radio.id, // Must be a string, required
    url: radio.url, // Load media from the network
    title: radio.name,
    date: Date.now(), // RFC 3339
    artwork: radio.image, // Load artwork from the network
    artist: 'Author',
  };
  await TrackPlayer.add([radioStream]);
  TrackPlayer.play();
};

export const stopRadio = (store, clearSelected = false) => {
  try {
    const { selected } = store.state.radio;
    store.actions.updateRadioState('selected', clearSelected ? null : selected);
    TrackPlayer.reset();
  } catch (error) {
    console.log(error);
  }
};

export const setDeviceVolume = (store, value) => {
  // Set device volume
  try {
    SystemSetting.setVolume(value);
    store.actions.updateRadioState('volume', value);
  } catch (error) {
    console.log(error);
  }
};

export const audioBackgroundBehavior = store => {
  try {
    TrackPlayer.updateOptions({
      stopWithApp: true, // Run when app is in background, stop when app is closed
      capabilities: [
        // The media controls that will be enabled
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        // The buttons that it will show in the compact notification
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      notificationCapabilities: [
        // The buttons that it will show in the notification
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
