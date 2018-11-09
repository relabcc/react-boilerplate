import React from 'react';
import PropTypes from 'prop-types';
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

const IndexPage = ({ isMobile }) => (
  <Container py="2em">
    <Box>
      <Flex>
        <Text>Styled Components + Styled System is cool!</Text>
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
        isMobile: {String(isMobile)}
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
        Go to About
      </Button>
      <Button.secondary m="0.5em">Good Button !</Button.secondary>
      <Button m="0.5em" disabled>
        Not Good
      </Button>
    </Box>
  </Container>
);

IndexPage.propTypes = {
  isMobile: PropTypes.bool,
};

export default withResponsive(IndexPage);
