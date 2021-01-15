import I18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

import en from './Locales/en';
import es from './Locales/es';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  AsyncStorage.getItem('@language', (language) => {
    if (language) {
      I18n.locale = language;
    } else {
      I18n.locale = locales[0].languageTag;
      AsyncStorage.setItem('@language', locales[0].languageTag);
    }
  });
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  es,
};

export default I18n;
