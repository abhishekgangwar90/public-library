import { connect } from 'react-redux';
import { getBooksDataAction } from '../../state/actions';
import BooksList from './books-list';

const mapStateToProps = ({ bookRecords = {} }: any): any => {
  const { isLoading, books, error } = bookRecords;
  return {
    isLoading,
    books,
    error,
  };
};

const dispatchActions = {
  getBooksDataAction,
};

export default connect(mapStateToProps, dispatchActions)(BooksList);
