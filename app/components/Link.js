import React from 'react';
import styled, { css } from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  letterSpacing,
  display,
} from 'styled-system';
import tag from 'clean-tag';
import { Link as RouterLink } from 'react-router-dom';

import blacklist from './utils/blacklist';
import { customColor } from './utils/getColor';

const linkStyle = css`
  ${fontSize}
  ${space}
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${display}
  text-decoration: none;
  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
  `}
  &:hover {
    ${customColor('hoverColor')};
  }
`;

const NomalLink = styled(tag)`
  ${linkStyle};
`;

const RouterStyledLink = styled(RouterLink)`
  ${linkStyle};
`;

const Link = ({ to, button, blacklist: bl, ...props }) => {
  if (to) {
    return <RouterStyledLink to={to} {...props} />;
  }
  return <NomalLink is="a" target="_blank" blacklist={bl} {...props} />;
};

Link.displayName = 'Link';

Link.defaultProps = {
  blacklist,
  fontWeight: 'bold',
};

export default Link;
