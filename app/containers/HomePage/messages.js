/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Styled Components + Styled System 超方便！',
  },
  isMobile: {
    id: `${scope}.isMobile`,
    defaultMessage: '手機版',
  },
  about: {
    id: `${scope}.buttons.about`,
    defaultMessage: '關於',
  },
  good: {
    id: `${scope}.buttons.good`,
    defaultMessage: '範例Button',
  },
  bad: {
    id: `${scope}.buttons.bad`,
    defaultMessage: '不可點',
  },
});
