import { ContainerModule, interfaces } from 'inversify';

import { ROUTES_TOKEN } from './react-router.constants';
import { RouteCollectionService } from './route-collection.service';

export const ReactRouterModule = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind(ROUTES_TOKEN).toConstantValue([]);
    bind(RouteCollectionService).to(RouteCollectionService);
  }
);
