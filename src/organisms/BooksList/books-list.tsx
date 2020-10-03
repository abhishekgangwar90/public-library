import React from 'react';
import { BooksListContainer } from './books-list-styles';

const BooksList: React.FunctionComponent<any> = () => {
  return (
    <BooksListContainer>
      <div>List of Available Books</div>
    </BooksListContainer>
  );
};

export default BooksList;
