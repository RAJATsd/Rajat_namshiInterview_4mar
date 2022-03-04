import { all } from 'redux-saga/effects'
import productsSaga from './producs'

export default function* rootSaga() {
  yield all([
    productsSaga(),
  ])
}