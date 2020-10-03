import React, { useEffect } from 'react';
import BookInfo from '../../molecules/bookInfo';
import { BooksListContainer } from './books-list-styles';
import { booksListType, bookType } from './books-list-types';

const BooksList: React.FunctionComponent<booksListType> = ({
  books,
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

  const handleBookInfoUpdate = (newData: Array<bookType>, id: number) => {
    console.log(newData, id);
  };

  return (
    <BooksListContainer>
      <h3>List of Available Books</h3>
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
