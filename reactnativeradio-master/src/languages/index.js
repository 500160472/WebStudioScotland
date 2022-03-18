import * as languages from './languages';
import initialState from '../states/initial.state'; // Initial language stored in initialState file

export function getLanguage() {
  try {
    return languages[initialState.language];
  } catch (error) {
    console.log(error);
  }
}

export const language = getLanguage();
