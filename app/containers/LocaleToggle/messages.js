/*
 * LocaleToggle Messages
 *
 * This contains all the text for the LanguageToggle component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.LocaleToggle';

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'English',
  },
  'zh-Hant-TW': {
    id: `${scope}.zh-Hant-TW`,
    defaultMessage: '繁體中文(台灣)',
  },
});
