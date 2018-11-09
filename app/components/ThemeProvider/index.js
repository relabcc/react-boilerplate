import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global-styles';
import theme from './theme';
import Box from '../Box';

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Box height="100%" fontSize={[14, null, 16]}>
      {children}
      <GlobalStyles />
    </Box>
  </ThemeProvider>
);

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
