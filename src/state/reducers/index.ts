import { combineReducers } from 'redux';
import { booksReducer } from './books-reducer';

const rootReducer = combineReducers({
  bookRecords: booksReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
