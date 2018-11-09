/*
 * AboutPage Messages
 *
 * This contains all the text for the AboutPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.AboutPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: '這是關於頁',
  },
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: '歡迎來到這一頁',
  },
  backHome: {
    id: `${scope}.backHome`,
    defaultMessage: '回到首頁',
  },
});
