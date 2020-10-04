import React, { useEffect } from 'react';
import useAddNewBookReducer, { initialState } from './add-new-book-reducer';
import { FormContainer } from './add-new-book-styles';

type Props = {
  newId: number;
  onFormSave(bookData: bookDataType): any;
};

type bookDataType = {
  id: number;
  name: string;
  author: string;
  description: string;
  count: string;
};

/**
 * Add New Book Component
 * Handles Input from user and returns a callback of bookDataType
 * @param param0
 */
const AddNewBook: React.FunctionComponent<Props> = ({
  newId,
  onFormSave,
}: Props) => {
  const [state, dispatch] = React.useReducer(
    useAddNewBookReducer,
    initialState
  );
  const { isLoading, data = {}, error = '' } = state;
  const { name = '', author = '', description = '', count = '' } = data;

  useEffect(() => {
    if (newId) {
      dispatch({
        type: 'fieldUpdate',
        payload: {
          updatedState: {
            ...state.data,
            id: newId,
          },
        },
      });
    }
  }, [newId]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: 'saveRequest' });
    if (Object.keys(state.data).every((key) => state.data[key] !== '')) {
      dispatch({ type: 'saveSuccess' });
      onFormSave(state.data);
    } else {
      dispatch({
        type: 'saveFailure',
        payload: { error: 'All Fields are Required' },
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    const newState = {
      ...state.data,
      [field]: value,
    };
    dispatch({
      type: 'fieldUpdate',
      payload: {
        updatedState: newState,
      },
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {!isLoading && error && (
        <span style={{ color: 'red', margin: '1% 0' }}>{error}</span>
      )}
      <label htmlFor="bookName">
        Book Name -
        <input
          id="bookName"
          type="text"
          name="bookName"
          value={name}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('name', e.target.value)
          }
          style={{ fontSize: 'inherit' }}
          placeholder="Enter Book Name"
        />
      </label>
      <label htmlFor="author">
        Author -
        <input
          id="author"
          type="text"
          name="author"
          value={author}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('author', e.target.value)
          }
          autoComplete="off"
          style={{ fontSize: 'inherit' }}
          placeholder="Enter Author Name Here"
        />
      </label>
      <label htmlFor="count">
        Total Count -
        <input
          id="count"
          type="text"
          autoComplete="off"
          name="count"
          value={count}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('count', e.target.value)
          }
          style={{ fontSize: 'inherit' }}
          placeholder="Enter Available book count"
        />
      </label>
      <label htmlFor="description">
        Description -
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('description', e.target.value)
          }
          autoComplete="off"
          style={{ fontSize: 'inherit' }}
          placeholder="Enter book description"
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        Save To Library
      </button>
    </FormContainer>
  );
};

export default AddNewBook;
