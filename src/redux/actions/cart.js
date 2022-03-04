import types from "../types";

export const actionToAddAnItemToCart = (itemId) => ({
  type: types.cart.ADD_ONE__CART_ITEM,
  payload: itemId,
});

export const actionToRemoveAnItemFromCart = (itemId) => ({
  type: types.cart.REMOVE_ONE_CART_ITEM,
  payload: itemId,
});

export const actionToClearCart = () => ({
  type: types.cart.CLEAR_ALL_CART_ITEMS,
});
