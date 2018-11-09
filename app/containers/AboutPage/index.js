import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Link from 'components/Link';
import { selectFirebase } from 'services/firebase/selectors';

import messages from './messages';

const AboutPage = ({ profile }) => (
  <Container py="2em">
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
    <p>
      <FormattedMessage
        values={{ name: profile.displayName }}
        {...messages.welcome}
      />
    </p>
    <Link to="/">
      <FormattedMessage {...messages.backHome} />
    </Link>
  </Container>
);

AboutPage.propTypes = {
  profile: PropTypes.object,
};

export default selectFirebase(['profile'])(AboutPage);
