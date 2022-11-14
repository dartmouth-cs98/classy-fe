import {
  configureStore, applyMiddleware, thunkMiddleware, compose,
} from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const composeEnhancers = '' || compose;

const store = configureStore(
  { reducer: rootReducer },
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
  ),
);
export default store;
