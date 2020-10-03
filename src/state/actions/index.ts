/* eslint-disable import/prefer-default-export */
import {
  GET_BOOKS_DATA,
  GET_BOOKS_DATA_FAILURE,
  GET_BOOKS_DATA_SUCCESS,
  EDIT_BOOK,
  ADD_NEW_BOOK,
} from '../constants';
import { bookAction, bookInfo, editActionPayload } from '../types';

export const getBooksDataAction = (payload: any): bookAction => {
  return {
    type: GET_BOOKS_DATA,
    payload,
  };
};

export const getBooksDataSuccessAction = (payload: any): bookAction => {
  return {
    type: GET_BOOKS_DATA_SUCCESS,
    payload,
  };
};

export const getBooksDataFailureAction = (payload: any): bookAction => {
  return {
    type: GET_BOOKS_DATA_FAILURE,
    payload,
  };
};

export const addBookAction = (payload: bookInfo): bookAction => {
  return {
    type: ADD_NEW_BOOK,
    payload,
  };
};

export const editBookAction = (payload: editActionPayload): bookAction => {
  return {
    type: EDIT_BOOK,
    payload,
  };
};
