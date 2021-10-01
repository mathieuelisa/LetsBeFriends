import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './index.scss';

import App from '../src/Components/App/App';
import createPersistor from './Redux/store';

import { BrowserRouter } from 'react-router-dom';

const { persistor, store } = createPersistor();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

