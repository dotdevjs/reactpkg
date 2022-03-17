import {
  injectable as Injectable,
  inject as Inject,
  interfaces,
  Container as InversifyContainer,
  ContainerModule,
  AsyncContainerModule,
} from 'inversify';

function containerFactory(containerOptions?: interfaces.ContainerOptions) {
  return new InversifyContainer({
    autoBindInjectable: true,
    ...containerOptions,
  });
}

const Container = containerFactory();

Container.bind<InversifyContainer>(InversifyContainer).toConstantValue(
  Container
);

export {
  Container,
  InversifyContainer,
  containerFactory,
  Injectable,
  Inject,
  ContainerModule,
  interfaces,
  AsyncContainerModule,
};
