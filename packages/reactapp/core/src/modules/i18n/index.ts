import i18n from 'i18next';
import { ContainerModule, interfaces } from '@reactpkg/inversify';
import { initReactI18next } from 'react-i18next';

export const I18nModule = new ContainerModule(
  async (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    // TODO: resources TOKEN and get from container
    i18n.use(initReactI18next).init({
      resources: {
        en: {
          translation: {},
        },
      },
      lng: 'en',
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false,
      },
    });
  }
);
