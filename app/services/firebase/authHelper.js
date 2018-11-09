import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { push } from 'react-router-redux';

import { selectFirebaseState } from 'services/firebase/selectors';
import LoadingIndicator from 'components/LoadingIndicator';

const locationHelper = locationHelperBuilder({});

const authenticatingSelector = state => {
  const { auth, isInitializing } = selectFirebaseState(state);
  return !auth.isLoaded || isInitializing === true;
};

export const UserIsAuthenticated = connectedReduxRedirect({
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/login',
  authenticatingSelector,
  authenticatedSelector: state => {
    const { auth } = selectFirebaseState(state);
    const loggedIn = auth.isLoaded && !auth.isEmpty;
    return loggedIn;
  },
  redirectAction: newLoc => push(newLoc),
  AuthenticatingComponent: LoadingIndicator,
});

export const UserIsNotAuthenticated = connectedReduxRedirect({
  wrapperDisplayName: 'UserIsNotAuthenticated',
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/',
  authenticatingSelector,
  authenticatedSelector: state => {
    const { auth } = selectFirebaseState(state);
    return auth.isLoaded && auth.isEmpty;
  },
  redirectAction: newLoc => push(newLoc),
  AuthenticatingComponent: LoadingIndicator,
});
