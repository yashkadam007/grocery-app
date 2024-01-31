// reducers/favoriteReducer.js
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../FavoriteActionTypes';
const initialState = {
  favorites: [],
};
const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
