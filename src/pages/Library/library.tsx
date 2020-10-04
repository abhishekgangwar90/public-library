import React from 'react';
import LibraryHeader from '../../atoms/LibraryHeader';
import LibraryFooter from '../../atoms/LibraryFooter';

import { LibraryContainer } from './library-styles';
import BooksList from '../../organisms/BooksList';

/**
 * Library Component
 * Takes care of rendering Library layout
 */
const Library: React.FunctionComponent<any> = () => {
  return (
    <LibraryContainer>
      <LibraryHeader />
      <BooksList />
      <LibraryFooter />
    </LibraryContainer>
  );
};

export default Library;
