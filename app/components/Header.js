import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Flex from './Flex';
import Text from './Text';
import Link from './Link';
import theme from './ThemeProvider/theme';

const Header = ({ siteTitle, ...props }) => (
  <Flex
    position="fixed"
    bg="primary"
    top={0}
    left={0}
    right={0}
    alignItems="center"
    zOrder={2}
    height={theme.headerHeight}
    {...props}
  >
    <Box px="1em">
      <Text.h1>
        <Link to="/" color="white">
          {siteTitle}
        </Link>
      </Text.h1>
    </Box>
  </Flex>
);

Header.propTypes = {
  siteTitle: PropTypes.node,
};

export default Header;
