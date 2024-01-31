import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "../reducer/Reducers";
import  {thunk} from "redux-thunk";
import favoriteReducer from "../reducer/FavouriteReducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorite: favoriteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
