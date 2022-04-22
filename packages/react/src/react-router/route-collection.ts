import { flattenDeep } from 'lodash';
import { RouteConfig } from 'react-router-config';
import { Inject, Injectable, InversifyContainer } from '@dotdev/inversify';

export const ROUTES_TOKEN = 'ROUTES_TOKEN';

@Injectable()
export class RouteCollection {
  @Inject(InversifyContainer)
  private container: InversifyContainer;

  getRoutes(): RouteConfig[] {
    let routes: RouteConfig[] = [];
    try {
      routes = flattenDeep(
        this.container.getAllTagged(ROUTES_TOKEN, ROUTES_TOKEN, [])
      );
    } catch (e) {
      console.log(`[App] Skip routes`);
    }

    return routes;
  }
}
