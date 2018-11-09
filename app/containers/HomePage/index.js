import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { FaThumbsUp } from 'react-icons/fa';

import Container from 'components/Container';
import Box from 'components/Box';
import Flex from 'components/Flex';
import Circle from 'components/Circle';
import Text from 'components/Text';
import BackgroundImage from 'components/BackgroundImage';
import Button from 'components/Button';
import Link from 'components/Link';
import withResponsive from 'hoc/withResponsive';
import { mobileOrDesktop } from 'components/ThemeProvider/theme';

import RepoFetcher from '../RepoFetcher';
import messages from './messages';

const IndexPage = ({ isMobile }) => (
  <Container py="2em">
    <Box>
      <Flex>
        <Text>
          <FormattedMessage {...messages.startProjectHeader} />
        </Text>
        <Circle
          width="2em"
          bg="blue"
          color="white"
          display="inline-block"
          mx="1em"
          verticalAlign="middle"
        >
          <FaThumbsUp />
        </Circle>
      </Flex>
      <Text fontSize={mobileOrDesktop('1em', '1.5em')}>
        <FormattedMessage {...messages.isMobile} />: {String(isMobile)}
      </Text>
    </Box>
    <BackgroundImage
      my="2em"
      src="https://loremflickr.com/1920/1080"
      ratio={9 / 16}
    />
    <RepoFetcher />
    <Box mx="-1em">
      <Button m="0.5em" is={Link} to="/about">
        <FormattedMessage {...messages.about} />
      </Button>
      <Button.secondary m="0.5em">
        <FormattedMessage {...messages.good} />
      </Button.secondary>
      <Button m="0.5em" disabled>
        <FormattedMessage {...messages.bad} />
      </Button>
    </Box>
  </Container>
);

IndexPage.propTypes = {
  isMobile: PropTypes.bool,
};

export default withResponsive(IndexPage);
