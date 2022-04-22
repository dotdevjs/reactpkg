import { flattenDeep } from 'lodash';
// import { RouteProps } from 'react-router';
import { Inject, Injectable, InversifyContainer } from '@dotdevjs/inversify';

import { RouteConfig } from 'react-router-config';
import { ROUTES_TOKEN } from './react-router.module';

@Injectable()
export class RouteCollectionService {
  @Inject(InversifyContainer)
  private container: InversifyContainer;

  getRoutes(): RouteConfig[] {
    let routes: RouteConfig[] = [];
    try {
      routes = flattenDeep(
        this.container.getAllTagged(ROUTES_TOKEN, ROUTES_TOKEN, [])
      );
    } catch (e) {
      console.error(e);
    }
    return routes;
  }
}
