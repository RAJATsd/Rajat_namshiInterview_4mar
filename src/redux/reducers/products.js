import types from '../types';

const initialState = {
  products: [],
}

export default function products(state = initialState, action) {
  switch (action.type) {
    case types.products.FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}