// import { flattenDeep } from 'lodash';
import { RouteProps } from 'react-router';
import { Inject, Injectable, InversifyContainer } from '@reactpkg/inversify';

// import { ROUTES_TOKEN } from './react-router.constants';

@Injectable()
export class RouteCollectionService {
  @Inject(InversifyContainer)
  private container: InversifyContainer;

  getRoutes(isLogged = true): RouteProps[] {
    const routes: RouteProps[] = [];
    // const tagName = isLogged ? ROUTES_TOKEN : ROUTES_TOKEN; // CoreService.AUTH_ROUTES;
    try {
      // routes = [
      //...flattenDeep(this.container.getAllTagged(tagName, tagName, [])),
      // ];
    } catch (e) {
      // TODO: refactor
      console.error(e);
    }
    return routes;
  }
}
