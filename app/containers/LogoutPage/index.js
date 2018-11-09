/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { firebaseConnect } from 'react-redux-firebase';

class LoginPage extends React.PureComponent {
  componentDidMount() {
    const { firebase, history } = this.props;
    firebase.logout().then(() => history.replace('/login'));
  }

  render() {
    return null;
  }
}

LoginPage.propTypes = {
  firebase: PropTypes.shape({
    logout: PropTypes.func,
  }),
  history: PropTypes.shape({
    replace: PropTypes.func,
  }),
};

export default firebaseConnect()(LoginPage);
