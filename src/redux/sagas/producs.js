import { call, put, takeEvery } from "redux-saga/effects";
import { fetchAllProductsFailure, fetchAllProductsSuccess } from "../actions/products";
import types from "../types";

const apiUrl = `https://fakestoreapi.com/products`;
const getApi = () => {
  return fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

function* fetchProducts() {
  try {
    const allProducts = yield call(getApi);
    yield put(fetchAllProductsSuccess(allProducts));
  } catch (e) {
    yield put(fetchAllProductsFailure(e.message));
  }
}

function* productsSaga() {
  yield takeEvery(types.products.FETCH_ALL_PRODUCTS_START, fetchProducts);
}

export default productsSaga;
