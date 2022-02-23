import {persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';

import messagesReducer from './reducers/messages';

const reducers = combineReducers({
  messages: messagesReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;
