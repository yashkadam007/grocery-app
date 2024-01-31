import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../FavoriteActionTypes';

export const addToFavorite = (productId) => ({
  type: ADD_TO_FAVORITE,
  payload: productId,
});

export const removeFromFavorite = (productId) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: productId,
});
