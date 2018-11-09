import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${theme.font};
  }

  body.fontLoaded {
    font-family: 'Open Sans', ${theme.font};
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
