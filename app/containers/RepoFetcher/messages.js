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
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
