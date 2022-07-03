import { ContainerModule, interfaces } from '@dotdev/inversify';

// TODO: remove
export const TEST_SERVICE = 'TEST';

export const AppModule = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind(TEST_SERVICE).toConstantValue('Hello World');
  }
);
