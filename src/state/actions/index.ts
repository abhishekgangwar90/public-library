/* eslint-disable import/prefer-default-export */
import {
  ADD_NEW_BOOK,
  ADD_NEW_BOOK_FAILURE,
  ADD_NEW_BOOK_SUCCESS,
  GET_BOOKS_DATA,
  GET_BOOKS_DATA_FAILURE,
  GET_BOOKS_DATA_SUCCESS,
  EDIT_BOOK,
  EDIT_BOOK_SUCCESS,
  EDIT_BOOK_FAILURE,
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

export const addBookActionSuccess = (payload: any): bookAction => {
  return {
    type: ADD_NEW_BOOK_SUCCESS,
    payload,
  };
};

export const addBookActionFailure = (payload: any): bookAction => {
  return {
    type: ADD_NEW_BOOK_FAILURE,
    payload,
  };
};

export const editBookAction = (payload: editActionPayload): bookAction => {
  return {
    type: EDIT_BOOK,
    payload,
  };
};

export const editBookActionSuccess = (payload: any): bookAction => {
  return {
    type: EDIT_BOOK_SUCCESS,
    payload,
  };
};

export const editBookActionFailure = (payload: any): bookAction => {
  return {
    type: EDIT_BOOK_FAILURE,
    payload,
  };
};
