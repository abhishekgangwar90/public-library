import { all } from 'redux-saga/effects';
import { fetchBookSaga } from './fetch-books-saga';

export default function* rootSaga() {
  yield all([fetchBookSaga()]);
}
