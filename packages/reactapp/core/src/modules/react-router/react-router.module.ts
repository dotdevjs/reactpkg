import { ContainerModule, interfaces } from 'inversify';
import { RouteConfig } from 'react-router-config';

import { ROUTES_TOKEN } from './react-router.constants';
import { RouteCollectionService } from './route-collection.service';

export interface ReactRouterModuleFactoryProps {
  routes?: RouteConfig[];
}
export const ReactRouterModuleFactory = (
  props: ReactRouterModuleFactoryProps = {}
): ContainerModule => {
  return new ContainerModule(
    (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
      bind(ROUTES_TOKEN).toConstantValue(props.routes || []);
      bind(RouteCollectionService).to(RouteCollectionService);
    }
  );
};

export const ReactRouterModule = ReactRouterModuleFactory();

//  export const ReactRouterModule = new ContainerModule(
//    (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
//      bind(ROUTES_TOKEN).toConstantValue([]);
//      bind(RouteCollectionService).to(RouteCollectionService);
//    }
//  );
