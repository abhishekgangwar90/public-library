/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BooksListContainer = styled.div`
  min-height: 80%;
  margin-top: 10%;
  padding: 2% 10%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
`;

export const BookListHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2%;

  @media only screen and (max-width: 426px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BookListHeader = styled.div`
  font-weight: bold;
  flex: 1;
  margin: 2% 0;
`;

export const AddBookContainer = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
