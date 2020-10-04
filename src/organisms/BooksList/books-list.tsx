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
  const [searchInput, setSearchInput] = React.useState<string>('');

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value = '' },
    } = event;
    let substrRegex: RegExp;

    setSearchInput(value);

    if (books && books.length > 0) {
      try {
        substrRegex = new RegExp(value, 'i');
        const searchData = [...books].filter((elm) =>
          substrRegex.test(elm.name)
        );
        setBooksData(searchData);
      } catch (e) {
        console.log('invalid input');
      }
    }
  };

  return (
    <BooksListContainer>
      <BookListHeaderContainer>
        <BookListHeader>List of Available Books</BookListHeader>
        <SearchField
          value={searchInput}
          onChange={handleSearch}
          placeholder="Enter a book name to search"
        />
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
