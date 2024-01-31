import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../ActionTypes";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const increaseQuantity = (itemId) => ({
  type: INCREASE_QUANTITY,
  payload: itemId,
});

// export const decreaseQuantity = (itemId) => ({
//   type: DECREASE_QUANTITY,
//   payload: itemId,
// });
export const decreaseQuantity = (productId) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updatedCartItems = cart.cartItems.map((item) => {
      if (item.id === productId) {
        const newQuantity = item.quantity - 1;
        if (newQuantity <= 0) {
          // If the new quantity is zero or less, remove the item from the cart
          dispatch(removeFromCart(productId));
        } else {
          // Otherwise, decrease the quantity
          dispatch({
            type: DECREASE_QUANTITY,
            payload: productId,
          });
        }
        // Return the updated item
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    // Dispatch the updated cart items
    dispatch({
      type: "UPDATE_CART_ITEMS",
      payload: updatedCartItems,
    });

    return updatedCartItems;
  };
};

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
