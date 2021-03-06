import { bookInfo } from '../../state/types';

export type booksListType = {
  books?: Array<bookInfo>;
  getBooksDataAction?: any;
  editBookAction?: any;
  addBookAction?: any;
};

export type bookType = {
  id: number;
  name: string;
  author: string;
  description: string;
  count: string;
};
