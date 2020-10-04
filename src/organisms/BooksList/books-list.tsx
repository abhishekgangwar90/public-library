import React, { useEffect } from 'react';
import SearchField from '../../atoms/SearchField';
import BookInfo from '../../molecules/bookInfo';
import {
  BookListHeader,
  BookListHeaderContainer,
  BooksListContainer,
} from './books-list-styles';
import { booksListType, bookType } from './books-list-types';

const BooksList: React.FunctionComponent<booksListType> = ({
  books,
  editBookAction,
  getBooksDataAction,
}: booksListType) => {
  const [booksData, setBooksData] = React.useState<any>([]);

  useEffect(() => {
    getBooksDataAction();
  }, [getBooksDataAction]);

  useEffect(() => {
    if (books && Array.isArray(books) && books.length > 0) {
      setBooksData(books);
    }
  }, [books]);

  const handleBookInfoUpdate = (newData: bookType, id: number) => {
    editBookAction({
      data: newData,
    });
  };

  return (
    <BooksListContainer>
      <BookListHeaderContainer>
        <BookListHeader>List of Available Books</BookListHeader>
        <SearchField placeholder="Enter a book name to search" />
      </BookListHeaderContainer>
      {booksData.map((elm: any) => {
        return (
          <BookInfo
            key={elm.id}
            onBookEdit={handleBookInfoUpdate}
            bookDetails={elm}
          />
        );
      })}
    </BooksListContainer>
  );
};

export default BooksList;
