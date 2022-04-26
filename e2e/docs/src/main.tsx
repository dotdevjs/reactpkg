import 'reflect-metadata';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Container, InversifyProvider } from '@dotdev/inversify';
import { I18NextModule } from '@dotdev/react';

import { AppModule } from './app/app.module';

import App from './app/app';

Container.load(AppModule);

async function bootstrap() {
  await I18NextModule.init();

  ReactDOM.render(
    <StrictMode>
      <InversifyProvider container={Container}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InversifyProvider>
    </StrictMode>,
    document.getElementById('root')
  );
}

bootstrap();
