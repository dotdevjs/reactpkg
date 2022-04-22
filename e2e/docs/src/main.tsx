import 'reflect-metadata';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Container, InversifyProvider } from '@dotdev/inversify';

import { AppModule } from './app/app.module';

import App from './app/app';

Container.load(AppModule);

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
