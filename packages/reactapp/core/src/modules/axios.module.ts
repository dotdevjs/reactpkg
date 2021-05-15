import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ContainerModule, interfaces } from '@reactpkg/inversify';

import { AXIOS_SERVICE } from '../constants';

// export const AxiosClientModule = new ContainerModule(
//   (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
//     bind<AxiosInstance>(AXIOS_SERVICE).toFactory(
//       ({ container }: interfaces.Context) => {
//         let axiosConfig: AxiosRequestConfig = {};
//         try {
//           axiosConfig = container.get(AXIOS_OPTIONS);
//           // eslint-disable-next-line no-empty
//         } catch (e) {}

//         return axios.create(axiosConfig);
//       }
//     );
//   }
// );

export const AxiosClientModuleFactory = (options: AxiosRequestConfig = {}) => {
  return new ContainerModule(
    (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
      bind<AxiosInstance>(AXIOS_SERVICE).toFactory(
        ({ container }: interfaces.Context) => {
          return axios.create(options);
        }
      );
    }
  );
};
export const AxiosClientModule = AxiosClientModuleFactory();
