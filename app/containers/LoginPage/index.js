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

import { FormattedMessage } from 'react-intl';

import { selectFirebase } from 'services/firebase/selectors';
import Container from 'components/Container';
import Button from 'components/Button';

import messages from './messages';

class LoginPage extends React.PureComponent {
  login = () => {
    const { firebase } = this.props;
    firebase.login({ provider: 'google' });
  };

  render() {
    return (
      <Container py="2em">
        <Button onClick={this.login}>
          <FormattedMessage {...messages.login} />
        </Button>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func,
  }),
};

export default selectFirebase(['auth'])(LoginPage);
