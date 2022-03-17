export * from './react-router.module';
export * from './render-routes';
export * from './route-collection.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { formatRoute } = require('react-router-named-routes');
export { formatRoute };
