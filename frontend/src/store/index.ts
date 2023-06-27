import {applyMiddleware, combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
