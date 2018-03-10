import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import './index.css';
import AppRoutes from './AppRoutes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppRoutes/>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker();

developer2 added