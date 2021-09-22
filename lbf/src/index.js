import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from '../src/Components/App/App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

