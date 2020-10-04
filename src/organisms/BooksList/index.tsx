import { connect } from 'react-redux';
import { getBooksDataAction, editBookAction } from '../../state/actions';
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
};

export default connect(mapStateToProps, dispatchActions)(BooksList);
