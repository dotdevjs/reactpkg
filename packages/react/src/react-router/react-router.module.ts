import { ContainerModule, interfaces } from 'inversify';
import { RouteConfig } from 'react-router';

import { RouteCollection, ROUTES_TOKEN } from './route-collection';

export interface ReactRouterFactoryProps {
  routes?: RouteConfig[];
}
export const ReactRouterFactory = (
  props: ReactRouterFactoryProps = {}
): ContainerModule => {
  return new ContainerModule(
    (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
      bind(ROUTES_TOKEN).toConstantValue(props.routes || []);
      bind(RouteCollection).to(RouteCollection);
    }
  );
};

export const ReactRouterModule = ReactRouterFactory();
