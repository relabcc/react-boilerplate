import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Link from 'components/Link';

import { selectFirebase } from 'services/firebase/selectors';

const AboutPage = ({ profile }) => (
  <Container py="2em">
    <h1>Hi from the second page</h1>
    <p>{profile.displayName}, Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Link mx="1em" to="/logout">
      Logout
    </Link>
  </Container>
);

AboutPage.propTypes = {
  profile: PropTypes.object,
};

export default selectFirebase(['profile'])(AboutPage);
