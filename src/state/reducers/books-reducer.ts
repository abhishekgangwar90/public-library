/* eslint-disable import/prefer-default-export */

import {
  GET_BOOKS_DATA,
  GET_BOOKS_DATA_SUCCESS,
  GET_BOOKS_DATA_FAILURE,
} from '../constants';
import { bookState, bookAction } from '../types';

const initialState = {
  isLoading: false,
  error: '',
  books: [],
};

export const booksReducer = (
  state: bookState = initialState,
  { type, payload }: bookAction
): bookState => {
  switch (type) {
    case GET_BOOKS_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_BOOKS_DATA_SUCCESS: {
      const { data } = payload;
      return {
        ...state,
        isLoading: false,
        books: data,
      };
    }

    case GET_BOOKS_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        books: [],
        error: payload.error,
      };
    }

    default: {
      return state;
    }
  }
};
