import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from '../reducers/index';
import authMiddleware from '../middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [authMiddleware];

const persistConfig = {
  key: 'profil',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const createPersistor =  () => {
  let store = createStore(persistedReducer, enhancers)
  let persistor = persistStore(store)
  return { store, persistor }
}

export default createPersistor;