import {applyMiddleware, combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({

})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
