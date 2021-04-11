import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import pageCountReducer from './features/paginationSlice';
import userDataSlice from './features/userDataSlice';
const middleware = [thunk];

const rootReducer = combineReducers({
  pageCount: pageCountReducer,
  userData: userDataSlice,
});

const makeStore = () =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore);
