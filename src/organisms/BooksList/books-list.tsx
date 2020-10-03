import React from 'react';
import { useBooksData } from '../../hooks/useBooksData';
import { BooksListContainer } from './books-list-styles';

const BooksList: React.FunctionComponent<any> = () => {
  console.log(useBooksData());
  return (
    <BooksListContainer>
      <div>List of Available Books</div>
    </BooksListContainer>
  );
};

export default BooksList;
