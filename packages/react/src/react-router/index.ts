// import { RouteConfig } from 'react-router-config';

import { RouteConfig } from 'react-router';

export * from './render-routes';
export * from './route-collection';
export * from './react-router.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { formatRoute } = require('react-router-named-routes');
// export { formatRoute };

export type Routes = RouteConfig[];
