import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ContainerModule, interfaces } from '@reactpkg/inversify';

export interface I18NextModuleOptions {
  locale?: string;
}

export const SERVICE_TRANSLATOR = 'translator';

export function I18NextModuleFactory(options: I18NextModuleOptions) {
  return new ContainerModule(
    async (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
      i18n.use(initReactI18next).init({
        resources: {
          // en: {
          //   translation: {},
          // },
        },
        lng: options.locale ?? 'en',
        fallbackLng: options.locale ?? 'en',
        interpolation: {
          escapeValue: false,
        },
      });

      bind(SERVICE_TRANSLATOR).toConstantValue(i18n);
    }
  );
}
