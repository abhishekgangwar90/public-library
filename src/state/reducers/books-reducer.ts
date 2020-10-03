/* eslint-disable import/prefer-default-export */

import { GET_BOOKS_DATA, GET_BOOKS_DATA_SUCCESS } from '../constants';
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
      return {
        ...state,
        isLoading: false,
        books: payload,
      };
    }

    default: {
      return state;
    }
  }
};
