import { merge } from 'lodash';

const translations: Record<string, any> = {};

export class Translator {
  static merge(locale: string, messages: Record<string, any>) {
    const current = translations[locale] ?? {};

    translations[locale] = merge(current, messages);
  }

  static all() {
    const messages: Record<string, { translation: any }> = {};

    Object.keys(translations).forEach((locale) => {
      messages[locale] = {
        translation: translations[locale],
      };
    });

    return messages;
  }
}
