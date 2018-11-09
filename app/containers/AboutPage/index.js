import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Link from 'components/Link';
import messages from './messages';

const AboutPage = () => (
  <Container py="2em">
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
    <p>
      <FormattedMessage {...messages.welcome} />
    </p>
    <Link to="/">
      <FormattedMessage {...messages.backHome} />
    </Link>
  </Container>
);

export default AboutPage;
