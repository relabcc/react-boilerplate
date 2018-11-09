/*
 * RepoFetcher Messages
 *
 * This contains all the text for the RepoFetcher component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.RepoFetcher';

export default defineMessages({
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: '來試試!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: '檢視Github repositories，使用者帳號：',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
