import { connect } from 'react-redux';
import {
  getBooksDataAction,
  editBookAction,
  addBookAction,
} from '../../state/actions';
import BooksList from './books-list';

const mapStateToProps = ({ bookRecords = {} }: any): any => {
  const { isLoading = false, books = [], error = '' } = bookRecords;
  return {
    isLoading,
    books,
    error,
  };
};

const dispatchActions = {
  getBooksDataAction,
  editBookAction,
  addBookAction,
};

export default connect(mapStateToProps, dispatchActions)(BooksList);
