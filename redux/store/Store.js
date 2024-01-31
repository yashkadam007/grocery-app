// import { createStore, combineReducers, applyMiddleware } from "redux";
// import cartReducer from "../reducer/Reducers";
// import  { thunk } from "redux-thunk";
// import favoriteReducer from "../reducer/FavouriteReducers";

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   favorite: favoriteReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
import { configureStore} from '@reduxjs/toolkit';
import cartReducer from '../reducer/Reducers';
import favoriteReducer from '../reducer/FavouriteReducers';


const store = configureStore({
  reducer:{
    cart: cartReducer,
  favorite: favoriteReducer,
  }
});

export default store;
