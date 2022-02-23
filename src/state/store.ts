import {createStore, compose, applyMiddleware} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import api from '../api-service/api';

import rootReducer from './rootReducer';

const thunkWithApi = thunk.withExtraArgument({api});

const store = createStore(rootReducer, compose(applyMiddleware(thunkWithApi)));
export const persistor = persistStore(store);

export default store;
