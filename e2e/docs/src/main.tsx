import 'reflect-metadata';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Container, InversifyProvider } from '@dotdev/inversify';
import { I18NextModule, Translator } from '@dotdev/react';

import { AppModule } from './app/app.module';

import App from './app/app';

Translator.merge('en', {
  test: 'Test hello',
});

Container.load(I18NextModule, AppModule);

async function bootstrap() {
  // await I18NextModule.init();

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
