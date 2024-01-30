// store.js
import { createStore, combineReducers,applyMiddleware } from 'redux';
import cartReducer from '../reducer/Reducers';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers if any
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
