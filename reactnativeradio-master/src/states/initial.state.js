// Import more states here when necessary
import alertBoxState from './alertBox.state';
import radioState from './radio.state';

const initialState = {
  language: 'enUS',
  initialLoading: true,
  loadingOverlay: false,
  alertBox: alertBoxState,
  radio: radioState,
  // And storage them here in order to access them from state variable
};

export default initialState;
