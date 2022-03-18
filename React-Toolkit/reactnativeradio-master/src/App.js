import {useEffect} from 'react';
import TrackPlayer from 'react-native-track-player';
import SystemSetting from 'react-native-system-setting';

import appNavigator from './routes';
import useGlobal from './store';

function App() {
  const [, actions] = useGlobal(null, actions);

  useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      actions.audioBackgroundBehavior();
    });
    SystemSetting.getVolume().then(volume => {
      actions.updateRadioState('volume', volume);
    });
    const volumeListener = SystemSetting.addVolumeListener(data => {
      const volume = data.value;
      actions.updateRadioState('volume', volume);
    });
    actions.setInitialLoading(false);
    return () => {
      SystemSetting.removeVolumeListener(volumeListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return appNavigator();
}

export default App;
