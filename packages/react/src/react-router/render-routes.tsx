import lodash from 'lodash';
import { SwitchProps } from 'react-router-dom';
import {
  renderRoutes as renderRoutesBase,
  RouteConfig,
} from 'react-router-config';
import { Container } from '@dotdev/inversify';

import { RouteCollection } from './route-collection';

export function renderRoutes(
  routes: RouteConfig[] | undefined = [],
  extraProps?: any,
  switchProps?: SwitchProps
): JSX.Element {
  try {
    routes = lodash.merge(Container.get(RouteCollection).getRoutes(), routes);
  } catch (e) {
    console.error(e);
  }
  return renderRoutesBase(routes, extraProps, switchProps);
}
