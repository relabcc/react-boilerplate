import {
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
} from 'styled-system';
import styled from 'styled-components';

import Box from './Box';

const Flex = styled(Box)`
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`;

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';

export default Flex;
