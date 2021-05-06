import { flattenDeep } from 'lodash';
// import { RouteProps } from 'react-router';
import { Inject, Injectable, InversifyContainer } from '@reactpkg/inversify';
import { RouteConfig } from 'react-router-config';

import { AUTH_ROUTES_TOKEN, ROUTES_TOKEN } from './react-router.constants';

@Injectable()
export class RouteCollectionService {
  @Inject(InversifyContainer)
  private container: InversifyContainer;

  getRoutes(isLogged = true): RouteConfig[] {
    let routes: RouteConfig[] = [];
    const tagName = isLogged ? ROUTES_TOKEN : AUTH_ROUTES_TOKEN;
    try {
      routes = [
        ...flattenDeep(this.container.getAllTagged(tagName, tagName, [])),
      ];
    } catch (e) {
      console.error(e);
    }
    return routes;
  }
}
