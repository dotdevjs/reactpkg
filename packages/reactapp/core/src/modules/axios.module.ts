import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ContainerModule, interfaces } from '@reactpkg/inversify';

import { AXIOS_OPTIONS, AXIOS_SERVICE } from '../constants';

export const AxiosClientModule = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<AxiosInstance>(AXIOS_SERVICE).toFactory(
      ({ container }: interfaces.Context) => {
        let axiosConfig: AxiosRequestConfig = {};
        try {
          axiosConfig = container.get(AXIOS_OPTIONS);
          // eslint-disable-next-line no-empty
        } catch (e) {}

        return axios.create(axiosConfig);
      }
    );
  }
);
