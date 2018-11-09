/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import fromPairs from 'lodash/fromPairs';
import zip from 'lodash/zip';
import { createResponsiveStateReducer } from 'redux-responsive';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { breakpoints } from 'components/ThemeProvider/theme';

const names = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    browser: createResponsiveStateReducer(
      fromPairs(zip(names, breakpoints.map(bp => parseInt(bp, 10) - 1))),
    ),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
