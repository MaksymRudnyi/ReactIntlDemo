import { LOCALES } from './constants';

export default (locale) => {
  if (Object.values(LOCALES).includes(locale)) {
    return locale;
  }

  if (locale.includes('fr')) {
    return LOCALES.FRENCH;
  }

  if (locale.includes('en')) {
    return LOCALES.ENGLISH;
  }

  if (locale.includes('de')) {
    return LOCALES.GERMAN;
  }

  return 'UNKNOWN';
};
