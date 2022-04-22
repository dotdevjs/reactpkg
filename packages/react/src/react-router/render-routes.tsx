import lodash from 'lodash';
import { Container } from '@dotdev/inversify';
import { SwitchProps } from 'react-router';
import {
  renderRoutes as renderRoutesBase,
  RouteConfig,
} from 'react-router-config';

import { RouteCollectionService } from './route-collection';

export function renderRoutes(
  routes: RouteConfig[] | undefined = [],
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
