/* eslint-disable import/prefer-default-export */
import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_BOOKS_DATA } from '../constants';
import {
  getBooksDataFailureAction,
  getBooksDataSuccessAction,
} from '../actions';
import { fetchBooksData } from '../../api';

function* callFetchBook() {
  try {
    const response = yield call(fetchBooksData);
    if (response && response.data && response.data.books) {
      yield put(
        getBooksDataSuccessAction({
          data: response.data.books,
        })
      );
    } else {
      yield put(
        getBooksDataFailureAction({
          error: 'unable to get data, please try after some time',
        })
      );
    }
  } catch (e) {
    yield put(getBooksDataFailureAction({ error: e }));
  }
}

export function* fetchBookSaga(): any {
  yield takeEvery(GET_BOOKS_DATA, callFetchBook);
}
