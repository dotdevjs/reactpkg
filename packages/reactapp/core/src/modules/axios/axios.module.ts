import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ContainerModule, interfaces } from '@reactpkg/inversify';
export const AXIOS_SERVICE = 'AXIOS_SERVICE_TOKEN';
export const AXIOS_OPTIONS = 'AXIOS_OPTIONS_TOKEN';

export const AxiosModuleFactory = (options?: AxiosRequestConfig) => {
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
export const AxiosModule = AxiosModuleFactory();
