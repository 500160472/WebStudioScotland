

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';

import App from './src/App';
import {name as appName} from './app.json';
function MainApp() {
            
    TrackPlayer.registerPlaybackService(() => require('./service'));
    <App></App>
;
}
    export default App;
    
// React.registerComponent(appName, () => App);
