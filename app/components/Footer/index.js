import React from 'react';
import { FormattedMessage } from 'react-intl';

import Flex from 'components/Flex';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

function Footer() {
  return (
    <Flex
      px="1em"
      py="3em"
      borderTop="1px solid #666"
      justifyContent="space-between"
    >
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
    </Flex>
  );
}

export default Footer;
