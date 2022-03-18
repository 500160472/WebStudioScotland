// Hooks configuration file
import React from 'react';
import globalHook from 'use-global-hook';

import * as actions from '../actions';
import initialState from '../states/initial.state';

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
