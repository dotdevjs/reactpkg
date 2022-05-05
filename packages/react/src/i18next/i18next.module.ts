import i18n, { InitOptions } from 'i18next';
import { AsyncContainerModule, interfaces } from '@dotdev/inversify';
import { initReactI18next } from 'react-i18next';
import { Translator } from './translator';

const fallbackLocale = 'en';
const locale = window.localStorage.getItem('locale') || fallbackLocale;

const I18NextModuleFactory = (options?: InitOptions) =>
  new AsyncContainerModule(
    async (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
      await i18n.use(initReactI18next).init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        lng: locale, // if you're using a language detector, do not define the lng option
        fallbackLng: fallbackLocale,
        interpolation: {
          escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        ...options,
        resources: Translator.all(),
      });
    }
  );

export const I18NextModule = I18NextModuleFactory();

// export class I18NextModule {
//   static async init(options?: InitOptions) {
//     return i18n.use(initReactI18next).init({
//       // the translations
//       // (tip move them in a JSON file and import them,
//       // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//       lng: locale, // if you're using a language detector, do not define the lng option
//       fallbackLng: fallbackLocale,
//       interpolation: {
//         escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//       },
//       ...options,
//       resources: Translator.all(),
//     });
//   }
// }
// export const I18NextModuleFactory = (
//   props: I18NextModuleFactoryProps = {}
// ): AsyncContainerModule => {
//   return new AsyncContainerModule(
//     (bind: interfaces.Bind, unbind: interfaces.Unbind) => {

//     }
//   );
// };
