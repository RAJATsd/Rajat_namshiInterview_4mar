import types from "../types";

export const fetchAllProducts = () => ({
  type: types.products.FETCH_ALL_PRODUCTS_START,
});

export const fetchAllProductsSuccess = (allProducts) => ({
  type: types.products.FETCH_ALL_PRODUCTS_SUCCESS,
  payload:allProducts
});

export const fetchAllProductsFailure = (errorMessage) => ({
  type: types.products.FETCH_ALL_PRODUCTS_FAILURE,
  payload:errorMessage
});
