/* eslint-disable import/prefer-default-export */

import {
  EDIT_BOOK,
  ADD_NEW_BOOK,
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

    case EDIT_BOOK: {
      const tempData = [...state.books].map((elm) => {
        if (elm.id === payload.data.id) {
          return payload.data;
        }
        return elm;
      });
      return {
        ...state,
        isLoading: false,
        books: tempData,
      };
    }

    case ADD_NEW_BOOK: {
      const tempData = [...state.books];
      tempData.push(payload.data);
      return {
        ...state,
        isLoading: false,
        books: tempData,
      };
    }

    default: {
      return state;
    }
  }
};
