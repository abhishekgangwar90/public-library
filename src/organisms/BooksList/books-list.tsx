import React, { Suspense, useEffect } from 'react';
import SearchField from '../../atoms/SearchField';
import {
  BookListHeader,
  BookListHeaderContainer,
  BooksListContainer,
  AddBookContainer,
} from './books-list-styles';
import { booksListType, bookType } from './books-list-types';

const AddNewBook = React.lazy(() => import('../../molecules/AddNewBookForm'));
const BookInfo = React.lazy(() => import('../../molecules/bookInfo'));

const BooksList: React.FunctionComponent<booksListType> = ({
  books,
  editBookAction,
  addBookAction,
  getBooksDataAction,
}: booksListType) => {
  const [booksData, setBooksData] = React.useState<any>([]);
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [canShowAddForm, setCanShowAddForm] = React.useState<boolean>(false);

  useEffect(() => {
    getBooksDataAction();
  }, [getBooksDataAction]);

  useEffect(() => {
    if (books && Array.isArray(books) && books.length > 0) {
      setBooksData(books);
    }
  }, [books]);

  const handleBookInfoUpdate = (newData: bookType) => {
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

  const handleAddClick = () => {
    setCanShowAddForm(!canShowAddForm);
  };

  const handleSaveNewBookClick = (newBookData: any) => {
    // const tempData = [];
    // tempData.push(newBookData);
    setCanShowAddForm(false);
    addBookAction({
      data: newBookData,
    });
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
      <AddBookContainer>
        <button
          style={{ fontSize: 'inherit' }}
          type="button"
          onClick={handleAddClick}
        >
          Add New Book
        </button>
        {canShowAddForm && (
          <Suspense fallback={<div />}>
            <AddNewBook
              newId={books && books?.length + 1}
              onFormSave={handleSaveNewBookClick}
            />
          </Suspense>
        )}
      </AddBookContainer>
      <Suspense fallback={<div />}>
        {booksData.map((elm: any) => {
          return (
            <BookInfo
              key={elm.id}
              onBookEdit={handleBookInfoUpdate}
              bookDetails={elm}
            />
          );
        })}
      </Suspense>
    </BooksListContainer>
  );
};

export default BooksList;
