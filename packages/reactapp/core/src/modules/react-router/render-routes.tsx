import lodash from 'lodash';
import { Container } from '@reactpkg/inversify';
import { SwitchProps } from 'react-router';
import {
  renderRoutes as renderRoutesBase,
  // RouteConfig,
} from 'react-router-config';

import { RouteCollectionService } from './route-collection.service';

export function renderRoutes(
  routes: any[] | undefined = [],
  extraProps?: any,
  switchProps?: SwitchProps
): JSX.Element {
  try {
    routes = lodash.merge(
      Container.get(RouteCollectionService).getRoutes(),
      routes
    );
  } catch (e) {
    console.error(e);
  }
  return renderRoutesBase(routes, extraProps, switchProps);
}
