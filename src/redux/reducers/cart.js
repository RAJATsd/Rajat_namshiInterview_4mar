import types from "../types";
import { addOneCartItemAndReturn, removeCartItemAndReturn } from "./utils";

const initialState = {
  cart: [],
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case types.cart.ADD_ONE__CART_ITEM:
      return {
        ...state,
        cart: addOneCartItemAndReturn(state.cart, action.payload),
      };
    case types.cart.REMOVE_ONE_CART_ITEM:
      return {
        ...state,
        cart: removeCartItemAndReturn(state.cart, action.payload),
      };
    case types.cart.CLEAR_ALL_CART_ITEMS:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}
