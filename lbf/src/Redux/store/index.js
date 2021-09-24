import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../Reducers/index';
import apiMiddleware from '../Middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [apiMiddleware];

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancers);

export default store;