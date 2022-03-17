import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Container, InversifyProvider } from '@reactpkg/inversify';

import App from './app/app';

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
