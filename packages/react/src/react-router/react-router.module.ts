import { ContainerModule, interfaces } from 'inversify';
import { RouteConfig } from 'react-router-config';

import { RouteCollectionService } from './route-collection';
export const ROUTES_TOKEN = 'ROUTES_TOKEN';

export interface ReactRouterFactoryProps {
  routes?: RouteConfig[];
}
export const ReactRouterFactory = (
  props: ReactRouterFactoryProps = {}
): ContainerModule => {
  return new ContainerModule(
    (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
      bind(ROUTES_TOKEN).toConstantValue(props.routes || []);
      bind(RouteCollectionService).to(RouteCollectionService);
    }
  );
};

export const ReactRouterModule = ReactRouterFactory();
